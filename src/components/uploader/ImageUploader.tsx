"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, X, AlertCircle } from "lucide-react";
import { ProcessingState } from "@/types/background-removal";

interface ImageUploaderProps {
  state: ProcessingState;
  previewUrl: string | null;
  error: string | null;
  onFileSelect: (file: File) => void;
  onRemove: () => void;
  onRetry: () => void;
}

export default function ImageUploader({
  state,
  previewUrl,
  error,
  onFileSelect,
  onRemove,
  onRetry,
}: ImageUploaderProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file) onFileSelect(file);
    },
    [onFileSelect]
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) onFileSelect(file);
      if (inputRef.current) inputRef.current.value = "";
    },
    [onFileSelect]
  );

  const isProcessing = state === "uploading" || state === "processing";

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {state === "idle" && !previewUrl && (
          <motion.div
            key="upload"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => inputRef.current?.click()}
              className={`group relative flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 transition-all duration-300 sm:p-12 ${
                isDragOver
                  ? "border-accent bg-accent/5 scale-[1.02] glow-accent-strong"
                  : "border-border hover:border-accent/50 hover:bg-white/[0.02]"
              }`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  inputRef.current?.click();
                }
              }}
              aria-label="Upload image"
            >
              <input
                ref={inputRef}
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleFileChange}
                className="hidden"
                aria-hidden="true"
              />

              <motion.div
                animate={isDragOver ? { scale: 1.1 } : { scale: 1 }}
                className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 transition-colors group-hover:bg-accent/15"
              >
                <Upload className="h-8 w-8 text-accent-light" />
              </motion.div>

              <p className="text-base font-semibold text-text-primary sm:text-lg">
                {isDragOver ? "Drop to remove background" : "Drop your image here"}
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                or choose a file
              </p>
              <p className="mt-4 text-xs text-text-muted">
                JPG &bull; PNG &bull; WEBP
              </p>
            </div>
          </motion.div>
        )}

        {previewUrl && state !== "success" && (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <div className="glass-strong relative overflow-hidden rounded-2xl">
              <div className="relative aspect-square max-h-[400px] w-full overflow-hidden">
                <img
                  src={previewUrl}
                  alt="Uploaded preview"
                  className="h-full w-full object-contain"
                />
                {isProcessing && (
                  <div className="absolute inset-0 flex items-center justify-center bg-background/60 backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-3">
                      <div className="h-10 w-10 animate-spin rounded-full border-2 border-accent border-t-transparent" />
                      <p className="text-sm font-medium text-text-primary">
                        {state === "uploading" ? "Uploading..." : "Processing..."}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {state === "error" && (
                <div className="border-t border-border p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-400">
                        Something went wrong
                      </p>
                      <p className="mt-1 text-sm text-text-secondary">{error}</p>
                    </div>
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button onClick={onRetry} className="btn-primary flex-1 !py-2.5">
                      Try Again
                    </button>
                    <button onClick={onRemove} className="btn-secondary flex-1 !py-2.5">
                      Choose Another
                    </button>
                  </div>
                </div>
              )}

              {!isProcessing && state !== "error" && (
                <div className="absolute right-3 top-3">
                  <button
                    onClick={onRemove}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-background/80 text-text-secondary backdrop-blur-sm transition-colors hover:bg-background hover:text-text-primary"
                    aria-label="Remove image"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
