export default function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <article className="rounded-xl border border-border bg-card/70 p-5">
      <p className="text-2xl font-semibold text-primary">{value}</p>
      <p className="mt-1 text-sm text-muted-foreground">{label}</p>
    </article>
  );
}
