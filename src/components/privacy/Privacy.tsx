"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Server, Eye } from "lucide-react";

const privacyFeatures = [
  {
    icon: Server,
    title: "Secure Processing",
    description: "Your images are processed through the configured background-removal service.",
  },
  {
    icon: Lock,
    title: "No Permanent Storage",
    description: "Uploaded images are not permanently stored on our servers.",
  },
  {
    icon: Eye,
    title: "No Data Sharing",
    description: "Your images are not shared with third parties beyond the processing provider.",
  },
  {
    icon: Shield,
    title: "Encrypted Transfer",
    description: "All uploads and downloads use encrypted connections.",
  },
];

export default function Privacy() {
  return (
    <section id="privacy" className="section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <h2 className="editorial-heading">
            YOUR IMAGE.
            <br />
            <span className="text-gradient">YOUR CONTROL.</span>
          </h2>
          <p className="editorial-subheading mx-auto mt-6">
            Images are sent to the configured background-removal service for
            processing. Processing and retention depend on the configured
            provider and its policies.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {privacyFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <feature.icon className="h-6 w-6 text-accent-light" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-text-primary">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-text-secondary">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mx-auto mt-8 max-w-xl text-center text-xs text-text-muted"
        >
          For more details, please read our{" "}
          <a href="#" className="text-accent-light underline underline-offset-2 hover:text-accent">
            Privacy Policy
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
