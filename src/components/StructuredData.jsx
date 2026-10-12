import React from 'react';

export default function StructuredData() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "VOLTIA",
    "url": "https://YOUR-DOMAIN.com/"
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VOLTIA",
    "url": "https://YOUR-DOMAIN.com/",
    // Note: A real logo asset is missing in /public. Placeholder below requires a real logo.
    // "logo": "https://YOUR-DOMAIN.com/images/logo.png"
  };

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "VOLTIA Midnight Berry",
    "brand": {
      "@type": "Brand",
      "name": "VOLTIA"
    },
    "description": "VOLTIA Midnight Berry",
    "image": [
      "https://YOUR-DOMAIN.com/images/products/midnight-berry.webp"
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
    </>
  );
}
