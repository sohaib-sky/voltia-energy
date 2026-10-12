import {
  ACCEPTED_MIME_TYPES,
  ACCEPTED_EXTENSIONS,
  MAX_FILE_SIZE,
  MAX_IMAGE_DIMENSION,
  ValidationError,
} from "@/types/background-removal";

export function validateFileType(file: File): ValidationError | null {
  if (!ACCEPTED_MIME_TYPES.includes(file.type as (typeof ACCEPTED_MIME_TYPES)[number])) {
    return {
      code: "UNSUPPORTED_TYPE",
      message: "Unsupported image format. Please upload a JPG, PNG, or WEBP image.",
    };
  }
  return null;
}

export function validateFileExtension(filename: string): ValidationError | null {
  const ext = filename.toLowerCase().slice(filename.lastIndexOf("."));
  if (!ACCEPTED_EXTENSIONS.includes(ext as (typeof ACCEPTED_EXTENSIONS)[number])) {
    return {
      code: "UNSUPPORTED_EXTENSION",
      message: "Unsupported file extension. Please upload a JPG, PNG, or WEBP image.",
    };
  }
  return null;
}

export function validateFileSize(file: File): ValidationError | null {
  if (file.size > MAX_FILE_SIZE) {
    return {
      code: "FILE_TOO_LARGE",
      message: "Image is too large. Maximum file size is 10MB.",
    };
  }
  return null;
}

export async function validateImageDimensions(
  file: File
): Promise<ValidationError | null> {
  return new Promise((resolve) => {
    const url = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      URL.revokeObjectURL(url);
      if (img.width > MAX_IMAGE_DIMENSION || img.height > MAX_IMAGE_DIMENSION) {
        resolve({
          code: "DIMENSION_TOO_LARGE",
          message: `Image dimensions are too large. Maximum is ${MAX_IMAGE_DIMENSION}x${MAX_IMAGE_DIMENSION} pixels.`,
        });
      } else {
        resolve(null);
      }
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve({
        code: "CORRUPTED_FILE",
        message: "Unable to read this image. The file may be corrupted.",
      });
    };

    img.src = url;
  });
}

export async function validateImage(file: File): Promise<ValidationError | null> {
  const typeError = validateFileType(file);
  if (typeError) return typeError;

  const extError = validateFileExtension(file.name);
  if (extError) return extError;

  const sizeError = validateFileSize(file);
  if (sizeError) return sizeError;

  const dimError = await validateImageDimensions(file);
  if (dimError) return dimError;

  return null;
}
