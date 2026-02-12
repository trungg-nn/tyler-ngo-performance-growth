export default function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <article className="rounded-2xl border border-border bg-card/65 p-5 shadow-[0_10px_40px_rgba(0,0,0,0.25)]">
      <p className="text-3xl font-semibold text-primary">{value}</p>
      <p className="mt-1 text-base text-muted-foreground">{label}</p>
    </article>
  );
}
