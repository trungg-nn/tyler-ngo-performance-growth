import Layout from "@/components/Layout";

export default function Portfolio() {
  return (
    <Layout>
      <section className="mx-auto w-full max-w-5xl px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">Portfolio</h1>
        <div className="grid gap-5 md:grid-cols-2">
          {[
            "B2B Pipeline Optimisation (+35% pipeline, -22% CPA)",
            "Offline Conversion Attribution (+40% accuracy)",
            "High-Scale UA Engine (£5M/mo budget)",
          ].map((item) => (
            <article key={item} className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-lg font-semibold">{item}</h2>
              <p className="mt-2 text-muted-foreground">Challenge → Approach → Result.</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
