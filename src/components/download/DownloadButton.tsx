"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Download, Check, Loader2 } from "lucide-react";

interface DownloadButtonProps {
  imageUrl: string;
  filename?: string;
  format?: "png" | "jpg";
  onDownload?: () => Promise<void> | void;
  className?: string;
}

export default function DownloadButton({
  imageUrl,
  filename = "true-cutout-result.png",
  format = "png",
  onDownload,
  className = "",
}: DownloadButtonProps) {
  const [downloadState, setDownloadState] = useState<
    "idle" | "preparing" | "ready" | "error"
  >("idle");

  const handleDownload = useCallback(async () => {
    setDownloadState("preparing");

    try {
      if (onDownload) {
        await onDownload();
      } else {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }

      setDownloadState("ready");
      setTimeout(() => setDownloadState("idle"), 2000);
    } catch {
      setDownloadState("error");
      setTimeout(() => setDownloadState("idle"), 3000);
    }
  }, [imageUrl, filename, onDownload]);

  return (
    <motion.button
      onClick={handleDownload}
      disabled={downloadState === "preparing"}
      whileHover={{ scale: downloadState === "preparing" ? 1 : 1.02 }}
      whileTap={{ scale: downloadState === "preparing" ? 1 : 0.98 }}
      className={`btn-primary ${className}`}
      aria-label={`Download ${format.toUpperCase()}`}
    >
      {downloadState === "preparing" && (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Preparing download...
        </>
      )}
      {downloadState === "ready" && (
        <>
          <Check className="h-4 w-4" />
          Download ready
        </>
      )}
      {downloadState === "idle" && (
        <>
          <Download className="h-4 w-4" />
          Download {format.toUpperCase()}
        </>
      )}
      {downloadState === "error" && (
        <>
          <Download className="h-4 w-4" />
          Try Again
        </>
      )}
    </motion.button>
  );
}
