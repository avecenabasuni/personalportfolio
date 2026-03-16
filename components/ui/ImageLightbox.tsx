"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { XIcon } from "lucide-react";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";

type ImageLightboxProps = {
  src: string;
  alt: string;
  sizes: string;
  triggerClassName: string;
  imageClassName?: string;
};

export default function ImageLightbox({
  src,
  alt,
  sizes,
  triggerClassName,
  imageClassName = "object-cover object-top",
}: ImageLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={triggerClassName}
        aria-label="Open image in fullscreen"
      >
        <Image src={src} alt={alt} fill className={imageClassName} sizes={sizes} />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          showCloseButton={false}
          className="max-w-[calc(100vw-1.5rem)] border-none bg-transparent p-0 shadow-none ring-0 sm:max-w-[92vw]"
        >
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" aria-hidden />
          <div className="relative z-10 flex min-h-[100svh] items-center justify-center p-4 sm:p-8">
            <div className="relative w-full max-w-6xl overflow-hidden rounded-[1.4rem] border border-white/10 bg-[#0f141c] shadow-2xl">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover opacity-35 blur-2xl scale-105"
                  aria-hidden
                />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_58%),linear-gradient(180deg,rgba(8,12,18,0.12),rgba(8,12,18,0.42))]" />
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="100vw"
                  className="object-contain p-4 sm:p-6"
                  priority
                />
              </div>

              <DialogClose className="absolute right-4 top-4 z-20 rounded-full border border-white/10 bg-black/30 p-2 text-white/80 transition-colors hover:text-white">
                <XIcon size={16} />
                <span className="sr-only">Close lightbox</span>
              </DialogClose>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
