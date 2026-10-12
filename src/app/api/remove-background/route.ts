import { NextRequest, NextResponse } from "next/server";
import { removeBackground } from "@/lib/background-removal/remove-background";
import { isProviderConfigured } from "@/lib/background-removal/provider";

export async function POST(request: NextRequest) {
  if (!isProviderConfigured()) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "NOT_CONFIGURED",
          message:
            "Background removal is not configured yet. Add your AI provider credentials to enable processing.",
        },
      },
      { status: 503 }
    );
  }

  try {
    const formData = await request.formData();
    const file = formData.get("image");

    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: "INVALID_REQUEST",
            message: "No image file provided.",
          },
        },
        { status: 400 }
      );
    }

    const result = await removeBackground(file);

    if (!result.success) {
      const statusCode = getStatusCode(result.error?.code || "");
      return NextResponse.json(result, { status: statusCode });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error("Background removal error:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: "INTERNAL_ERROR",
          message: "An internal error occurred. Please try again.",
        },
      },
      { status: 500 }
    );
  }
}

function getStatusCode(code: string): number {
  switch (code) {
    case "UNSUPPORTED_TYPE":
    case "UNSUPPORTED_EXTENSION":
      return 415;
    case "FILE_TOO_LARGE":
      return 413;
    case "DIMENSION_TOO_LARGE":
      return 413;
    case "CORRUPTED_FILE":
      return 400;
    case "PROCESSING_ERROR":
      return 502;
    default:
      return 500;
  }
}
