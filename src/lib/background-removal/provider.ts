import { ProviderConfig, RemovalResult } from "@/types/background-removal";

export interface BackgroundRemovalProvider {
  name: string;
  removeBackground(imageBuffer: Buffer, mimeType: string): Promise<RemovalResult>;
}

class RemoveBgProvider implements BackgroundRemovalProvider {
  name = "removebg";

  async removeBackground(
    imageBuffer: Buffer,
    mimeType: string
  ): Promise<RemovalResult> {
    const config = getProviderConfig();
    const apiUrl = config.apiUrl || "https://api.remove.bg/v1.0/removebg";

    const formData = new FormData();
    const uint8Array = new Uint8Array(imageBuffer);
    const blob = new Blob([uint8Array], { type: mimeType });
    formData.append("image_file", blob, "image");
    formData.append("size", "auto");
    formData.append("format", "png");
    formData.append("bg_color", "");

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "X-Api-Key": config.apiKey,
      },
      body: formData,
      signal: AbortSignal.timeout(60000),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      throw new Error(
        `Provider error (${response.status}): ${errorText || response.statusText}`
      );
    }

    const resultBuffer = Buffer.from(await response.arrayBuffer());

    return {
      success: true,
      imageUrl: `data:image/png;base64,${resultBuffer.toString("base64")}`,
      provider: this.name,
    };
  }
}

class ClipdropProvider implements BackgroundRemovalProvider {
  name = "clipdrop";

  async removeBackground(
    imageBuffer: Buffer,
    mimeType: string
  ): Promise<RemovalResult> {
    const config = getProviderConfig();
    const apiUrl =
      config.apiUrl || "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/image-to-image";

    const formData = new FormData();
    const uint8Array = new Uint8Array(imageBuffer);
    const blob = new Blob([uint8Array], { type: mimeType });
    formData.append("init_image", blob, "image");
    formData.append("output_format", "png");

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.apiKey}`,
      },
      body: formData,
      signal: AbortSignal.timeout(60000),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      throw new Error(
        `Provider error (${response.status}): ${errorText || response.statusText}`
      );
    }

    const resultBuffer = Buffer.from(await response.arrayBuffer());

    return {
      success: true,
      imageUrl: `data:image/png;base64,${resultBuffer.toString("base64")}`,
      provider: this.name,
    };
  }
}

class ReplicateProvider implements BackgroundRemovalProvider {
  name = "replicate";

  async removeBackground(
    imageBuffer: Buffer,
    mimeType: string
  ): Promise<RemovalResult> {
    const config = getProviderConfig();
    const apiUrl = config.apiUrl || "https://api.replicate.com/v1/predictions";

    const base64Image = imageBuffer.toString("base64");
    const dataUri = `data:${mimeType};base64,${base64Image}`;

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Token ${config.apiKey}`,
        "Content-Type": "application/json",
        "Prefer": "wait",
      },
      body: JSON.stringify({
        version: "fb8af171cfa161f3ef0e4df35f163790b55f7bf27c7d4f9d0c2651c5a2e5f5c5",
        input: { image: dataUri },
      }),
      signal: AbortSignal.timeout(120000),
    });

    if (!response.ok) {
      const errorText = await response.text().catch(() => "");
      throw new Error(
        `Provider error (${response.status}): ${errorText || response.statusText}`
      );
    }

    const result = (await response.json()) as { output?: string };
    const outputUrl = result.output;

    if (!outputUrl) {
      throw new Error("Provider did not return an image URL");
    }

    const imageResponse = await fetch(outputUrl, {
      signal: AbortSignal.timeout(60000),
    });

    if (!imageResponse.ok) {
      throw new Error("Failed to download processed image from provider");
    }

    const resultBuffer = Buffer.from(await imageResponse.arrayBuffer());

    return {
      success: true,
      imageUrl: `data:image/png;base64,${resultBuffer.toString("base64")}`,
      provider: this.name,
    };
  }
}

function getProviderConfig(): ProviderConfig {
  const apiKey = process.env.BACKGROUND_REMOVAL_API_KEY;
  const apiUrl = process.env.BACKGROUND_REMOVAL_API_URL;
  const provider = process.env.BACKGROUND_REMOVAL_PROVIDER || "removebg";

  if (!apiKey) {
    throw new Error("BACKGROUND_REMOVAL_API_KEY is not configured");
  }

  return { apiKey, apiUrl, provider };
}

export function getProvider(): BackgroundRemovalProvider {
  const provider = process.env.BACKGROUND_REMOVAL_PROVIDER || "removebg";

  switch (provider) {
    case "removebg":
      return new RemoveBgProvider();
    case "clipdrop":
      return new ClipdropProvider();
    case "replicate":
      return new ReplicateProvider();
    default:
      throw new Error(`Unknown provider: ${provider}`);
  }
}

export function isProviderConfigured(): boolean {
  return !!process.env.BACKGROUND_REMOVAL_API_KEY;
}
