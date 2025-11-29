import Hero from "../components/Hero";
import Features from "../components/Features";
import Highlights from "../components/Highlights";
import PricingOrContact from "../components/PricingOrContact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-slate-950">
        <Hero />
        <Features />
        <Highlights />
        <PricingOrContact />
      </main>
      <Footer />
    </>
  );
}
