import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Target, BarChart3, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import MetricCard from "@/components/MetricCard";

const metrics = [
  { value: "+35%", label: "Qualified Pipeline" },
  { value: "-22%", label: "Cost Per Acquisition" },
  { value: "+40%", label: "Attribution Accuracy" },
  { value: "£5M/mo", label: "Budget Managed" },
];

const capabilities = [
  { icon: TrendingUp, title: "Full-Funnel Growth", desc: "End-to-end strategy from awareness to conversion." },
  { icon: Target, title: "Performance Media", desc: "Precision paid campaigns across search and social." },
  { icon: BarChart3, title: "Attribution & Analytics", desc: "Reveal true impact with robust measurement." },
  { icon: Zap, title: "Experimentation", desc: "A/B testing and rapid iteration for compounding gains." },
];

export default function Index() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-primary/10 to-background">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 md:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-primary">Performance Marketing Manager · London</p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">Driving growth through data, media & experimentation</h1>
            <p className="mt-6 max-w-xl text-muted-foreground">I help ambitious brands scale revenue with full-funnel performance strategy, attribution, and optimisation.</p>
            <div className="mt-8 flex gap-3">
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-primary-foreground">View My Work <ArrowRight size={16} /></Link>
              <Link to="/contact" className="rounded-lg border border-border px-5 py-3">Get in Touch</Link>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-10 text-center text-muted-foreground">Premium Portrait Area</div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16">
        <AnimatedSection>
          <h2 className="mb-8 text-3xl font-semibold">Results</h2>
        </AnimatedSection>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {metrics.map((m) => <MetricCard key={m.label} {...m} />)}
        </div>
      </section>

      <section className="bg-card/40 py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h2 className="mb-8 text-3xl font-semibold">What I do best</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {capabilities.map((c) => (
              <article key={c.title} className="rounded-xl border border-border bg-background p-6">
                <c.icon className="mb-3 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">{c.title}</h3>
                <p className="text-muted-foreground">{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
