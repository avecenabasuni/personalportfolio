"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { certifications, primaryCerts } from "@/lib/data";
import type { Certification } from "@/lib/types";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowRightIcon, XIcon } from "lucide-react";

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [isListOpen, setIsListOpen] = useState(false);

  const featuredCerts = primaryCerts.slice(0, 5);

  const groupedByIssuer = useMemo(() => {
    return Array.from(
      certifications.reduce((map, cert) => {
        const bucket = map.get(cert.issuer) ?? [];
        bucket.push(cert);
        map.set(cert.issuer, bucket);
        return map;
      }, new Map<string, Certification[]>()),
    );
  }, []);

  const openCertDetail = (cert: Certification) => {
    setSelectedCert(cert);
    setIsListOpen(true);
  };

  return (
    <section
      id="certifications"
      className="px-4 py-14 md:px-6 md:py-16 lg:px-8 xl:px-10 2xl:px-12"
    >
      <div className="w-full">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Certifications
        </p>
        <h2 className="mb-4 font-display text-[clamp(2.35rem,3.5vw,3.9rem)] font-normal leading-[1.04] tracking-[-0.03em] text-foreground">
          Certifications that reflect
          <br className="hidden md:block" /> where I&apos;ve spent real time.
        </h2>
        <p className="mb-12 max-w-xl font-sans text-base leading-relaxed text-muted-foreground">
          Featured credentials below. Open all certifications for the complete
          list by issuer.
        </p>

        <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featuredCerts.map((cert, i) => (
            <motion.button
              key={cert.id}
              type="button"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              whileHover={{
                y: -2,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              transition={{
                duration: 0.45,
                ease: [0.21, 0.47, 0.32, 0.98],
                delay: i * 0.07,
              }}
              onClick={() => openCertDetail(cert)}
              className="rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(86,111,190,0.14),rgba(255,255,255,0.03))] px-5 py-4 text-left transition-colors hover:border-white/20"
            >
              {cert.badgeImage ? (
                <div className="mb-3 flex justify-center rounded-xl border border-white/8 bg-white/[0.02] p-2">
                  <Image
                    src={cert.badgeImage}
                    alt={`${cert.name} badge`}
                    width={74}
                    height={74}
                    className="h-[74px] w-[74px] rounded-lg object-contain"
                  />
                </div>
              ) : null}
              <p className="mb-1 font-sans text-sm font-medium leading-snug text-foreground">
                {cert.name}
              </p>
              <div className="mt-2 flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] text-muted-foreground">
                  {cert.issuer}
                </span>
                <div className="flex items-center gap-2">
                  {cert.credentialUrl ? (
                    <span className="rounded-full border border-white/12 px-2 py-0.5 text-[10px] text-muted-foreground/75">
                      Has link
                    </span>
                  ) : null}
                  <span className="font-mono text-[11px] text-muted-foreground/60">
                    {cert.issuedOn}
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => {
            setSelectedCert(selectedCert ?? featuredCerts[0] ?? certifications[0] ?? null);
            setIsListOpen(true);
          }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 font-sans text-sm font-medium text-muted-foreground transition-colors duration-200 hover:border-white/20 hover:text-foreground md:px-6 md:py-3"
        >
          See all certifications
          <ArrowRightIcon size={14} />
        </button>

        <Dialog open={isListOpen} onOpenChange={setIsListOpen}>
          <DialogContent
            showCloseButton={false}
            className="flex h-[min(90dvh,56rem)] w-[90vw] max-w-[90vw] sm:w-[900px] sm:max-w-[90vw] flex-col overflow-hidden overflow-x-hidden rounded-[1.5rem] border border-white/10 bg-[#10141b]/92 p-0 text-left shadow-2xl backdrop-blur-2xl"
          >
            <div className="shrink-0 border-b border-white/8 bg-[#10141b]/96 px-6 py-5 md:px-7 md:py-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <DialogTitle className="font-display text-2xl font-normal text-foreground md:text-3xl">
                    All certifications
                  </DialogTitle>
                  <DialogDescription className="mt-2 font-sans text-sm text-muted-foreground">
                    Grouped by issuer. Select any item on the left to update the detail panel.
                  </DialogDescription>
                </div>
                <DialogClose className="rounded-full border border-white/10 p-2 text-muted-foreground transition-colors hover:text-foreground">
                  <XIcon size={16} />
                  <span className="sr-only">Close modal</span>
                </DialogClose>
              </div>
            </div>

            <motion.div
              className="grid min-h-0 flex-1 overflow-hidden md:grid-cols-[minmax(0,40%)_minmax(0,60%)]"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="modal-dark-scrollbar min-h-0 overflow-y-auto overscroll-contain border-b border-white/8 px-6 py-5 md:border-b-0 md:border-r md:px-7 md:py-6">
                <div className="space-y-7">
                  {groupedByIssuer.map(([issuer, certs]) => (
                    <div key={issuer}>
                      <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground/62">
                        {issuer}
                      </p>
                      <ul className="space-y-2">
                        {certs.map((cert) => {
                          const isSelected = selectedCert?.id === cert.id;

                          return (
                            <li key={cert.id}>
                              <button
                                type="button"
                                onClick={() => setSelectedCert(cert)}
                                className={`w-full rounded-xl border px-4 py-3 text-left transition-colors ${
                                  isSelected
                                    ? "border-white/22 bg-white/[0.08]"
                                    : "border-white/8 bg-white/[0.03] hover:border-white/16 hover:bg-white/[0.05]"
                                }`}
                              >
                                <p className="font-sans text-sm font-medium text-foreground">
                                  {cert.name}
                                </p>
                                <p className="mt-1 font-mono text-xs text-muted-foreground/65">
                                  {cert.issuedOn}
                                </p>
                              </button>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="modal-dark-scrollbar min-h-0 overflow-y-auto overflow-x-hidden overscroll-contain px-6 py-5 md:px-7 md:py-6 [white-space:normal] [word-break:keep-all] [overflow-wrap:break-word]">
                {selectedCert ? (
                  <motion.div
                    key={selectedCert.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.28, ease: [0.21, 0.47, 0.32, 0.98] }}
                  >
                    {selectedCert.badgeImage ? (
                      <div className="mb-5 flex justify-center rounded-2xl border border-white/8 bg-white/[0.02] p-3">
                        <Image
                          src={selectedCert.badgeImage}
                          alt={`${selectedCert.name} badge`}
                          width={124}
                          height={124}
                          className="h-[124px] w-[124px] rounded-xl object-contain"
                        />
                      </div>
                    ) : null}
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground/60 [white-space:normal] [word-break:keep-all] [overflow-wrap:break-word]">
                        {selectedCert.platform}
                      </p>
                      <h3 className="mt-3 font-display text-2xl leading-[1.08] text-foreground md:text-3xl [white-space:normal] [word-break:keep-all] [overflow-wrap:break-word]">
                        {selectedCert.name}
                      </h3>
                      <p className="mt-3 font-sans text-base leading-relaxed text-muted-foreground [white-space:normal] [word-break:keep-all] [overflow-wrap:break-word]">
                        {selectedCert.summary}
                      </p>
                    </div>

                    {selectedCert.credentialUrl ? (
                      <a
                        href={selectedCert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-sans text-sm text-foreground transition-colors hover:border-white/20"
                      >
                        View credential
                        <ArrowRightIcon size={14} />
                      </a>
                    ) : null}

                    <div className="mt-6 flex flex-col gap-3 lg:flex-row">
                    <div className="flex-1 rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-5">
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground/54">
                        Issuer
                      </p>
                      <p className="mt-2 font-sans text-base text-foreground [white-space:normal] [word-break:keep-all] [overflow-wrap:break-word]">
                        {selectedCert.issuer}
                      </p>
                    </div>
                    <div className="flex-1 rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-5">
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground/54">
                        Issued On
                      </p>
                      <p className="mt-2 font-sans text-base text-foreground [white-space:normal] [word-break:keep-all] [overflow-wrap:break-word]">
                        {selectedCert.issuedOn}
                      </p>
                    </div>
                    <div className="flex-1 rounded-2xl border border-white/8 bg-white/[0.03] px-5 py-5">
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground/54">
                        Expiration
                      </p>
                      <p className="mt-2 font-sans text-base text-foreground [white-space:normal] [word-break:keep-all] [overflow-wrap:break-word]">
                        {selectedCert.expiresOn ?? "No published expiration"}
                      </p>
                    </div>
                  </div>
                  </motion.div>
                ) : null}
              </div>
            </motion.div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
