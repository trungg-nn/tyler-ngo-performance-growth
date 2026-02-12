import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import MetricCard from "@/components/MetricCard";

const metrics = [
  { value: "+35%", label: "Qualified Pipeline" },
  { value: "-22%", label: "CPA Reduction" },
  { value: "+40%", label: "Attribution Accuracy" },
  { value: "£5M/mo", label: "Budget Managed" },
];

export default function Index() {
  return (
    <Layout>
      <section className="hero-bg relative overflow-hidden border-b border-border/60">
        <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-24 md:pt-32">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center rounded-full border border-primary/30 bg-card/30 px-4 py-1.5 text-sm text-primary">
              • Performance Marketing Manager · London
            </p>
            <h1 className="text-5xl font-bold leading-[1.05] md:text-7xl">
              Driving growth through <span className="text-gradient-gold">data, media & experimentation</span>
            </h1>
            <p className="mt-7 max-w-2xl text-xl text-muted-foreground">
              I help ambitious brands scale revenue with full-funnel performance strategies, rigorous attribution, and relentless optimisation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/portfolio" className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-base font-medium text-primary-foreground">
                View My Work <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="rounded-xl border border-border bg-background/30 px-7 py-3.5 text-base">
                Get in Touch
              </Link>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
            {metrics.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
