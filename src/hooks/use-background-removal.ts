"use client";

import { useState, useCallback, useRef } from "react";
import { ProcessingState, RemovalResult, ValidationError } from "@/types/background-removal";

interface UseBackgroundRemovalReturn {
  state: ProcessingState;
  result: RemovalResult | null;
  error: ValidationError | null;
  uploadAndProcess: (file: File) => Promise<void>;
  reset: () => void;
}

export function useBackgroundRemoval(): UseBackgroundRemovalReturn {
  const [state, setState] = useState<ProcessingState>("idle");
  const [result, setResult] = useState<RemovalResult | null>(null);
  const [error, setError] = useState<ValidationError | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const uploadAndProcess = useCallback(async (file: File) => {
    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setState("uploading");
    setError(null);
    setResult(null);

    try {
      const formData = new FormData();
      formData.append("image", file);

      setState("processing");

      const response = await fetch("/api/remove-background", {
        method: "POST",
        body: formData,
        signal: controller.signal,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setError(data.error || { code: "UNKNOWN", message: "An error occurred" });
        setState("error");
        return;
      }

      setResult(data.data);
      setState("success");
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        return;
      }
      setError({
        code: "NETWORK_ERROR",
        message: "Network error. Please check your connection and try again.",
      });
      setState("error");
    }
  }, []);

  const reset = useCallback(() => {
    abortControllerRef.current?.abort();
    setState("idle");
    setResult(null);
    setError(null);
  }, []);

  return {
    state,
    result,
    error,
    uploadAndProcess,
    reset,
  };
}
