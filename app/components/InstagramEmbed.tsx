"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process(): void } };
  }
}

const processEmbeds = () => window.instgrm?.Embeds.process();

/**
 * Instagram post/reel embed. Instagram's embed.js swaps the <blockquote> for an
 * auto-sized iframe. `onLoad` handles the first page load; the effect handles
 * client-side navigation back to a page after the script is already loaded.
 */
export default function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    processEmbeds();
  }, [url]);

  return (
    <>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#fff",
          border: 0,
          borderRadius: 6,
          margin: 0,
          maxWidth: 540,
          minWidth: 326,
          width: "100%",
          padding: 16,
          color: "#3897f0",
          fontFamily: "Arial, sans-serif",
          fontSize: 14,
          textAlign: "center",
        }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          View this post on Instagram
        </a>
      </blockquote>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={processEmbeds}
      />
    </>
  );
}
