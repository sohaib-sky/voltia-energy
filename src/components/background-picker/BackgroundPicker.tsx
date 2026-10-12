"use client";

import { motion } from "framer-motion";
import { Check, Palette } from "lucide-react";
import {
  BackgroundType,
  GRADIENT_PRESETS,
  BACKGROUND_OPTIONS,
} from "@/types/background-removal";

interface BackgroundPickerProps {
  selected: BackgroundType;
  customColor: string;
  selectedGradient: string;
  onSelect: (type: BackgroundType) => void;
  onCustomColorChange: (color: string) => void;
  onGradientSelect: (gradient: string) => void;
}

export default function BackgroundPicker({
  selected,
  customColor,
  selectedGradient,
  onSelect,
  onCustomColorChange,
  onGradientSelect,
}: BackgroundPickerProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Palette className="h-4 w-4 text-text-secondary" />
        <h4 className="text-sm font-semibold text-text-primary">Background</h4>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {BACKGROUND_OPTIONS.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`relative flex flex-col items-center gap-1.5 rounded-xl border p-3 transition-all duration-200 ${
              selected === option.id
                ? "border-accent bg-accent/10"
                : "border-border hover:border-border-light hover:bg-white/[0.02]"
            }`}
            aria-label={`Select ${option.label} background`}
            aria-pressed={selected === option.id}
          >
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{
                background:
                  option.id === "transparent"
                    ? undefined
                    : option.value,
              }}
            >
              {option.id === "transparent" && (
                <div className="checkerboard h-8 w-8 rounded-lg" />
              )}
              {option.id === "gradient" && (
                <div
                  className="h-8 w-8 rounded-lg"
                  style={{
                    background:
                      GRADIENT_PRESETS.find((g) => g.id === selectedGradient)
                        ?.css || GRADIENT_PRESETS[0].css,
                  }}
                />
              )}
              {option.id === "custom" && (
                <div
                  className="h-8 w-8 rounded-lg border border-border"
                  style={{ background: customColor }}
                />
              )}
            </div>
            <span className="text-[10px] font-medium text-text-secondary">
              {option.label}
            </span>
            {selected === option.id && (
              <motion.div
                layoutId="bg-selected"
                className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-accent"
              >
                <Check className="h-2.5 w-2.5 text-white" />
              </motion.div>
            )}
          </button>
        ))}
      </div>

      {selected === "custom" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="flex items-center gap-3"
        >
          <label className="text-xs text-text-secondary">Custom color:</label>
          <input
            type="color"
            value={customColor}
            onChange={(e) => onCustomColorChange(e.target.value)}
            className="h-8 w-12 cursor-pointer rounded-lg border border-border bg-transparent"
            aria-label="Choose custom background color"
          />
          <span className="text-xs text-text-muted">{customColor}</span>
        </motion.div>
      )}

      {selected === "gradient" && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-2"
        >
          <label className="text-xs text-text-secondary">Gradient preset:</label>
          <div className="flex flex-wrap gap-2">
            {GRADIENT_PRESETS.map((preset) => (
              <button
                key={preset.id}
                onClick={() => onGradientSelect(preset.id)}
                className={`h-10 w-10 rounded-lg border-2 transition-all duration-200 ${
                  selectedGradient === preset.id
                    ? "border-accent scale-110"
                    : "border-transparent hover:scale-105"
                }`}
                style={{ background: preset.css }}
                aria-label={`Select ${preset.name} gradient`}
                title={preset.name}
              />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
