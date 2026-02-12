import Layout from "@/components/Layout";

export default function Blog() {
  const posts = [
    "Why Multi-Touch Attribution Changes Everything",
    "Scaling Paid Media Without Scaling Waste",
    "The Experimentation Playbook for B2B",
  ];

  return (
    <Layout>
      <section className="mx-auto w-full max-w-5xl px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold">Blog</h1>
        <div className="space-y-4">
          {posts.map((p) => (
            <article key={p} className="rounded-xl border border-border bg-card p-6">
              <h2 className="text-xl font-semibold">{p}</h2>
              <p className="mt-2 text-muted-foreground">Premium insights on growth, performance, and attribution.</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
