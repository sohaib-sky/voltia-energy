"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import ImageUploader from "@/components/uploader/ImageUploader";
import ProcessingState from "@/components/processing/ProcessingState";
import ResultEditor from "@/components/result-editor/ResultEditor";
import Features from "@/components/features/Features";
import HowItWorks from "@/components/how-it-works/HowItWorks";
import UseCases from "@/components/use-cases/UseCases";
import Technology from "@/components/technology/Technology";
import Privacy from "@/components/privacy/Privacy";
import FinalCTA from "@/components/final-cta/FinalCTA";
import Footer from "@/components/footer/Footer";
import { useBackgroundRemoval } from "@/hooks/use-background-removal";
import { validateImage } from "@/lib/validation/image";
import {
  BackgroundAtmosphere,
  CursorGlow,
  FloatingOrbs,
  NoiseOverlay,
  Vignette,
  ScrollProgress,
  SectionReveal,
  HeroReveal,
  UploadReveal,
  ProcessingReveal,
  ResultCardReveal,
  BeforeAfterSlider,
  BackgroundPicker,
  DownloadButton,
  StartNewButton,
  FeatureCard,
  UseCaseCard,
  HowItWorksStep,
  TechnologyVisual,
  PrivacyCard,
  FinalCTA as FinalCTASection,
  Footer as FooterSection,
  Navbar as NavbarSection,
  Hero as HeroSection,
  Section,
  Container,
  Grid,
  Flex,
  Stack,
  Center,
  Spacer,
  AspectRatio,
  Box,
  Text,
  Image,
  Link,
  Icon,
  Logo,
  Menu,
  MenuItem,
  Dropdown,
  Tooltip,
  Popover,
  Modal,
  Drawer,
  Toast,
  Notification,
  Alert,
  Banner,
  ContextMenu,
  CommandPalette,
  Spotlight,
  TiltCard,
  MagneticCursor,
  TextScramble,
  GlitchText,
  NeonText,
  GradientText,
  ShimmerText,
  RippleEffect,
  ParticleField,
  WaveBackground,
  GridPattern,
  LightBeam,
  SectionDivider,
  SectionHeading,
  SectionSubheading,
  Eyebrow,
  CTAButton,
  GlassCard,
  AnimatedText,
  FadeIn,
  ScaleIn,
  BlurIn,
  SlideIn,
  RotateIn,
  StaggerGrid,
  StaggerItem,
  WaveText,
  TypewriterText,
  CounterAnimation,
  ProgressBar,
  IconButton,
  SliderHandle,
  BackgroundSwitcher,
  ProcessingOverlay,
  ErrorState,
  SuccessState,
  UploadTransition,
  NavbarLink,
  FinalCTAButton,
  BeforeAfterReveal,
  HeroUploadCard,
  ResultReveal,
  GlowPulse,
  BorderGlow,
  FloatingParticles,
  ProgressLine,
  SmoothScale,
  PageTransition,
  Marquee,
  ScanLine,
  ImageReveal,
  Parallax,
  Magnetic,
  TextReveal,
  Reveal,
} from "@/components/motion/motion";

export default function Home() {
  const { state, result, error, uploadAndProcess, reset } = useBackgroundRemoval();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleFileSelect = useCallback(
    async (file: File) => {
      setValidationError(null);

      const validationErr = await validateImage(file);
      if (validationErr) {
        setValidationError(validationErr.message);
        return;
      }

      setOriginalFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      await uploadAndProcess(file);
    },
    [uploadAndProcess]
  );

  const handleRemove = useCallback(() => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    setOriginalFile(null);
    setValidationError(null);
    reset();
  }, [previewUrl, reset]);

  const handleRetry = useCallback(() => {
    if (originalFile) {
      uploadAndProcess(originalFile);
    }
  }, [originalFile, uploadAndProcess]);

  const handleReset = useCallback(() => {
    handleRemove();
  }, [handleRemove]);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Cinematic background */}
      <BackgroundAtmosphere />
      <FloatingOrbs />
      <NoiseOverlay />
      <Vignette />
      <ScrollProgress />
      <CursorGlow />
      <MagneticCursor />

      <Navbar />
      <Hero />

      {/* Upload / Processing / Result Section */}
      <section id="upload" className="section-padding pt-0">
        <div className="container-max">
          <SectionReveal className="mx-auto max-w-2xl">
            <div className="glass-strong glow-accent rounded-2xl p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {state === "idle" && !previewUrl && (
                  <motion.div
                    key="uploader"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="mb-6 text-center font-display text-xl font-bold text-text-primary">
                      Remove Background
                    </h2>
                    <ImageUploader
                      state={state}
                      previewUrl={previewUrl}
                      error={validationError}
                      onFileSelect={handleFileSelect}
                      onRemove={handleRemove}
                      onRetry={handleRetry}
                    />
                  </motion.div>
                )}

                {(state === "uploading" || state === "processing") && (
                  <motion.div
                    key="processing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="mb-6 text-center font-display text-xl font-bold text-text-primary">
                      Remove Background
                    </h2>
                    <div className="relative mb-6 overflow-hidden rounded-xl">
                      {previewUrl && (
                        <img
                          src={previewUrl}
                          alt="Processing"
                          className="mx-auto max-h-[300px] w-auto object-contain opacity-50"
                        />
                      )}
                      <div className="scan-line" />
                    </div>
                    <ProcessingState />
                  </motion.div>
                )}

                {state === "error" && (
                  <motion.div
                    key="error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="mb-6 text-center font-display text-xl font-bold text-text-primary">
                      Remove Background
                    </h2>
                    <ImageUploader
                      state={state}
                      previewUrl={previewUrl}
                      error={error?.message || null}
                      onFileSelect={handleFileSelect}
                      onRemove={handleRemove}
                      onRetry={handleRetry}
                    />
                  </motion.div>
                )}

                {state === "success" && result?.imageUrl && originalFile && (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <ResultEditor
                      originalUrl={previewUrl || ""}
                      resultUrl={result.imageUrl}
                      onReset={handleReset}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </SectionReveal>
        </div>
      </section>

      <Features />
      <HowItWorks />
      <UseCases />
      <Technology />
      <Privacy />
      <FinalCTA />
      <Footer />
    </div>
  );
}
