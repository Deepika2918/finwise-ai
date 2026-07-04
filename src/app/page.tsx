import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import AiDemo from "@/components/landing/AiDemo";
import SavingChallenge from "@/components/landing/SavingChallenge";
import Testimonials from "@/components/landing/Testimonials";
import Faq from "@/components/landing/Faq";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AiDemo />
        <SavingChallenge />
        <Testimonials />
        <Faq />
         <CTA />
      </main>

      <Footer />
    </>
  );
}