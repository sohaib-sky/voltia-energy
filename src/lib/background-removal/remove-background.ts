import { getProvider, isProviderConfigured } from "./provider";
import { validateImage } from "@/lib/validation/image";
import { RemovalResult, ValidationError } from "@/types/background-removal";

export interface ProcessResult {
  success: boolean;
  data?: RemovalResult;
  error?: ValidationError;
}

export async function removeBackground(file: File): Promise<ProcessResult> {
  if (!isProviderConfigured()) {
    return {
      success: false,
      error: {
        code: "NOT_CONFIGURED",
        message:
          "Background removal is not configured yet. Add your AI provider credentials to enable processing.",
      },
    };
  }

  const validationError = await validateImage(file);
  if (validationError) {
    return {
      success: false,
      error: validationError,
    };
  }

  try {
    const provider = getProvider();
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const result = await provider.removeBackground(buffer, file.type);

    return {
      success: true,
      data: result,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "An unexpected error occurred";

    return {
      success: false,
      error: {
        code: "PROCESSING_ERROR",
        message: "We couldn't process this image. Please try again.",
      },
    };
  }
}
