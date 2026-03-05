"use client";

import React from "react";
import { X, Download, ExternalLink, Link2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DocumentModalProps {
  isOpen: boolean;
  title: string;
  pdfUrl: string;
  onClose: () => void;
}

export default function DocumentModal({
  isOpen,
  title,
  pdfUrl,
  onClose,
}: DocumentModalProps) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyLink = async () => {
    const absoluteUrl =
      typeof window === "undefined"
        ? pdfUrl
        : new URL(pdfUrl, window.location.origin).toString();

    try {
      await navigator.clipboard.writeText(absoluteUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback for environments where clipboard API is unavailable.
      const input = document.createElement("input");
      input.value = absoluteUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      <button
        type="button"
        aria-label="Close document preview"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-10 flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b px-4 py-3 sm:px-6">
          <h2 className="text-base font-semibold sm:text-lg">{title}</h2>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="rounded-md p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex flex-wrap gap-3 border-b px-4 py-3 sm:px-6">
          <Button asChild size="sm">
            <a href={pdfUrl} download>
              <Download className="mr-2 size-4" />
              Download PDF
            </a>
          </Button>
          <Button variant="outline" size="sm" onClick={handleCopyLink}>
            <Link2 className="mr-2 size-4" />
            {copied ? "Link Copied" : "Copy Link"}
          </Button>
          <Button asChild variant="outline" size="sm">
            <a href={pdfUrl} target="_blank" rel="noreferrer">
              <ExternalLink className="mr-2 size-4" />
              Open in New Tab
            </a>
          </Button>
        </div>

        <div className="min-h-0 flex-1 bg-muted/20">
          <iframe
            title={`${title} preview`}
            src={`${pdfUrl}#toolbar=1&navpanes=0`}
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
