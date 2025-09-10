import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { contactApi, ContactFormData } from "@/services/api";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    country_code: '+91',
    company: '',
    project_type: '',
    budget_range: '',
    timeline: '',
    project_details: ''
  });

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.project_details.trim()) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields (Name, Email, Project Details).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await contactApi.submitContact(formData);
      
      toast({
        title: "Success!",
        description: response.message || "Your message has been sent successfully. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        country_code: '+91',
        company: '',
        project_type: '',
        budget_range: '',
        timeline: '',
        project_details: ''
      });

    } catch (error) {
      console.error('Contact form submission error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name *</label>
                    <Input 
                      placeholder="Your name" 
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <Input 
                      type="tel" 
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Country Code</label>
                    <Select value={formData.country_code} onValueChange={(value) => handleInputChange('country_code', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country code" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+91">🇮🇳 +91 (India)</SelectItem>
                        <SelectItem value="+1">🇺🇸 +1 (USA)</SelectItem>
                        <SelectItem value="+44">🇬🇧 +44 (UK)</SelectItem>
                        <SelectItem value="+61">🇦🇺 +61 (Australia)</SelectItem>
                        <SelectItem value="+49">🇩🇪 +49 (Germany)</SelectItem>
                        <SelectItem value="+33">🇫🇷 +33 (France)</SelectItem>
                        <SelectItem value="+81">🇯🇵 +81 (Japan)</SelectItem>
                        <SelectItem value="+86">🇨🇳 +86 (China)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input 
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Type</label>
                    <Select value={formData.project_type} onValueChange={(value) => handleInputChange('project_type', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="website">Website Development</SelectItem>
                        <SelectItem value="ecommerce">E-commerce Platform</SelectItem>
                        <SelectItem value="webapp">Web Application</SelectItem>
                        <SelectItem value="mobile">Mobile App</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Budget Range</label>
                    <Select value={formData.budget_range} onValueChange={(value) => handleInputChange('budget_range', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-5k">Under $5,000</SelectItem>
                        <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-plus">$50,000+</SelectItem>
                        <SelectItem value="discuss">Let's discuss</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Timeline</label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="1-month">Within 1 month</SelectItem>
                      <SelectItem value="2-3-months">2-3 months</SelectItem>
                      <SelectItem value="3-6-months">3-6 months</SelectItem>
                      <SelectItem value="6-months-plus">6+ months</SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Project Details *</label>
                  <Textarea 
                    placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                    rows={5}
                    value={formData.project_details}
                    onChange={(e) => handleInputChange('project_details', e.target.value)}
                    required
                  />
                  <div className="text-right text-sm text-muted-foreground mt-1">
                    {formData.project_details.length}/1000 characters
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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