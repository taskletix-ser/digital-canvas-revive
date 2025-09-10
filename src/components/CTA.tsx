import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 gradient-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6 text-white">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Let's discuss your project and create something amazing together. Get in 
          touch with us today for a free consultation.
        </p>
        <Button 
          variant="secondary" 
          size="lg" 
          className="px-8 py-4 text-lg font-semibold"
        >
          Start Your Project
        </Button>
      </div>
    </section>
  );
};

export default CTA;