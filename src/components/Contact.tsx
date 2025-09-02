import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Get in touch with us today for a 
            free consultation and let's discuss how we can help your business grow online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl">Send us a message</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input type="email" placeholder="your.email@example.com" required />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input type="tel" placeholder="Your phone number" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Details *</label>
                  <Textarea 
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    rows={5}
                    required
                  />
                  <div className="text-right text-sm text-muted-foreground mt-1">
                    0/1000 characters
                  </div>
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Image/Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-green-500 to-purple-600 h-64 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
            
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-4">Let's build something great together</h3>
              <p className="text-muted-foreground leading-relaxed">
                We're here to help you bring your vision to life. Whether you need a new website, 
                e-commerce platform, or custom web application, our team is ready to deliver 
                exceptional results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;