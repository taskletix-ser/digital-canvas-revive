import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Features />
        <Process />
        <Projects />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;