"use client";

import { useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Check } from "lucide-react";
import BeforeAfterViewer from "@/components/before-after/BeforeAfterViewer";
import BackgroundPicker from "@/components/background-picker/BackgroundPicker";
import DownloadButton from "@/components/download/DownloadButton";
import { BackgroundType, GRADIENT_PRESETS } from "@/types/background-removal";

interface ResultEditorProps {
  originalUrl: string;
  resultUrl: string;
  onReset: () => void;
}

export default function ResultEditor({
  originalUrl,
  resultUrl,
  onReset,
}: ResultEditorProps) {
  const [background, setBackground] = useState<BackgroundType>("transparent");
  const [customColor, setCustomColor] = useState("#6366f1");
  const [selectedGradient, setSelectedGradient] = useState("aurora");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getBackgroundStyle = useCallback(() => {
    switch (background) {
      case "transparent":
        return undefined;
      case "white":
        return "#ffffff";
      case "black":
        return "#000000";
      case "gray":
        return "#e5e7eb";
      case "custom":
        return customColor;
      case "gradient":
        return GRADIENT_PRESETS.find((g) => g.id === selectedGradient)?.css;
      default:
        return undefined;
    }
  }, [background, customColor, selectedGradient]);

  const handleDownload = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = new Image();
    img.crossOrigin = "anonymous";

    await new Promise<void>((resolve, reject) => {
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;

        const bgStyle = getBackgroundStyle();
        if (bgStyle) {
          if (bgStyle.startsWith("linear-gradient")) {
            const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
            const colors = bgStyle.match(/#[a-f0-9]{6}/gi) || ["#6366f1", "#a78bfa"];
            colors.forEach((color, i) => {
              gradient.addColorStop(i / (colors.length - 1), color);
            });
            ctx.fillStyle = gradient;
          } else {
            ctx.fillStyle = bgStyle;
          }
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(img, 0, 0);
        resolve();
      };
      img.onerror = reject;
      img.src = resultUrl;
    });

    const link = document.createElement("a");
    link.download = "true-cutout-result.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }, [resultUrl, getBackgroundStyle]);

  const bgStyle = getBackgroundStyle();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/20">
          <Check className="h-4 w-4 text-green-400" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            Background removed
          </h3>
          <p className="text-sm text-text-secondary">
            Your cutout is ready. Customize the background or download.
          </p>
        </div>
      </div>

      <div className="glass-strong rounded-2xl p-4">
        <BeforeAfterViewer
          beforeUrl={originalUrl}
          afterUrl={resultUrl}
          className="mx-auto max-w-md"
        />
      </div>

      <div className="glass-strong rounded-2xl p-4">
        <div
          className="relative mx-auto flex aspect-square max-w-md items-center justify-center overflow-hidden rounded-xl"
          style={{ background: bgStyle }}
        >
          {!bgStyle && <div className="checkerboard absolute inset-0" />}
          <img
            src={resultUrl}
            alt="Processed result"
            className="relative z-10 max-h-full max-w-full object-contain"
            crossOrigin="anonymous"
          />
        </div>
      </div>

      <div className="glass-strong rounded-2xl p-4">
        <BackgroundPicker
          selected={background}
          customColor={customColor}
          selectedGradient={selectedGradient}
          onSelect={setBackground}
          onCustomColorChange={setCustomColor}
          onGradientSelect={setSelectedGradient}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <DownloadButton
          imageUrl={resultUrl}
          onDownload={handleDownload}
          className="flex-1"
        />
        <button onClick={onReset} className="btn-secondary flex-1">
          <RotateCcw className="h-4 w-4" />
          Start New
        </button>
      </div>

      <canvas ref={canvasRef} className="hidden" />
    </motion.div>
  );
}
