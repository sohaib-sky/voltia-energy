export type ProcessingState =
  | "idle"
  | "uploading"
  | "processing"
  | "success"
  | "error";

export type BackgroundType =
  | "transparent"
  | "white"
  | "black"
  | "gray"
  | "gradient"
  | "custom";

export interface BackgroundOption {
  id: BackgroundType;
  label: string;
  value: string;
}

export interface GradientPreset {
  id: string;
  name: string;
  css: string;
}

export interface RemovalResult {
  success: boolean;
  imageUrl?: string;
  error?: string;
  provider?: string;
}

export interface ProviderConfig {
  apiKey: string;
  apiUrl?: string;
  provider: string;
}

export interface ValidationError {
  code: string;
  message: string;
}

export const ACCEPTED_MIME_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
] as const;

export const ACCEPTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp"] as const;

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const MAX_IMAGE_DIMENSION = 4096;

export const GRADIENT_PRESETS: GradientPreset[] = [
  {
    id: "sunset",
    name: "Sunset",
    css: "linear-gradient(135deg, #f97316 0%, #ec4899 50%, #8b5cf6 100%)",
  },
  {
    id: "ocean",
    name: "Ocean",
    css: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 50%, #6366f1 100%)",
  },
  {
    id: "forest",
    name: "Forest",
    css: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
  },
  {
    id: "midnight",
    name: "Midnight",
    css: "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #020617 100%)",
  },
  {
    id: "aurora",
    name: "Aurora",
    css: "linear-gradient(135deg, #22d3ee 0%, #a78bfa 50%, #f472b6 100%)",
  },
  {
    id: "warm",
    name: "Warm",
    css: "linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #ef4444 100%)",
  },
];

export const BACKGROUND_OPTIONS: BackgroundOption[] = [
  { id: "transparent", label: "Transparent", value: "transparent" },
  { id: "white", label: "White", value: "#ffffff" },
  { id: "black", label: "Black", value: "#000000" },
  { id: "gray", label: "Light Gray", value: "#e5e7eb" },
  { id: "gradient", label: "Gradient", value: "gradient" },
  { id: "custom", label: "Custom", value: "custom" },
];
