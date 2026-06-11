const proofPoints = [
  {
    value: "76+",
    label: "Enterprise systems instrumented",
  },
  {
    value: "20+",
    label: "Certifications across core platforms",
  },
  {
    value: "New Relic / AWS / GCP / Nutanix",
    label: "Production and partner ecosystem",
  },
  {
    value: "Jakarta / remote / relocation",
    label: "Available for regional or global teams",
  },
];

export default function RecruiterProofStrip() {
  return (
    <section
      aria-label="Recruiter proof points"
      className="bg-[#0d1218] px-4 py-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12"
    >
      <div className="grid gap-2 border-b border-white/8 pb-8 sm:grid-cols-2 lg:grid-cols-4">
        {proofPoints.map((point) => (
          <div
            key={point.value}
            className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
          >
            <p className="break-words font-sans text-lg font-medium leading-tight text-foreground">
              {point.value}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase leading-snug tracking-[0.14em] text-muted-foreground/70">
              {point.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
