import Layout from "@/components/Layout";

export default function Contact() {
  return (
    <Layout>
      <section className="mx-auto w-full max-w-4xl px-4 py-16">
        <h1 className="mb-6 text-4xl font-bold">Contact</h1>
        <div className="rounded-xl border border-border bg-card p-6 text-muted-foreground">
          <p>Email: trungngo.2810@gmail.com</p>
          <p>Phone: +44 7763 464 335</p>
          <p>Location: London, United Kingdom</p>
        </div>
      </section>
    </Layout>
  );
}
