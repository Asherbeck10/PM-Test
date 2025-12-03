import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import SectionTitle from "../../components/ SectionTitle/SectionTitle";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import Footer from "../../components/Footer/Footer";
import { FEATURES } from "../../data/features";
import { TESTIMONIALS } from "../../data/testimonials";
import { LOGOS } from "../../data/logos";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[1440px] bg-white">
      {/* Navbar */}
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <Hero />

        {/* Partner Logos */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {LOGOS.map((logo) => (
                <div key={logo.id} className="opacity-70">
                  <img src={logo.src} alt={logo.alt} className="h-8 w-auto" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <SectionTitle
              title="Powerful Features"
              subtitle="Everything you need to plan, track, and deliver great work."
            />

            <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
              {FEATURES.map((feature) => (
                <FeatureCard key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-50 py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <SectionTitle title="What Our Customers Say" />

            <div className="mt-16 space-y-12">
              {TESTIMONIALS.map((t) => (
                <blockquote key={t.name} className="mx-auto max-w-2xl">
                  <p className="text-lg italic">“{t.quote}”</p>
                  <footer className="mt-4 text-sm font-medium">
                    — {t.name}, {t.role}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <SectionTitle title="Ready to Get Started?" />
            <button className="mt-8 rounded-full bg-black px-10 py-4 text-white">
              Start Free Trial
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
