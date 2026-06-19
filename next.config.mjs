/** @type {import('next').NextConfig} */

const nextConfig = {
  // Inline CSS into <style> tags to remove render-blocking stylesheet requests.
  experimental: {
    inlineCss: true,
  },
  images: {
    // Prefer AVIF (smaller than WebP) with WebP fallback.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
