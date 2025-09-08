import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Shield, 
  Zap, 
  Heart, 
  Globe, 
  Smartphone,
  Code2,
  TrendingUp,
  Wrench
} from "lucide-react";

const Features = () => {
  const services = [
    {
      icon: (
        <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
          <Code2 className="h-8 w-8 text-white" />
        </div>
      ),
      title: "Website Development",
      description: "Custom websites built with modern technologies, optimized for performance and user experience.",
      features: [
        "Responsive Design",
        "SEO Optimization", 
        "Fast Loading",
        "Mobile-First"
      ]
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
          <Smartphone className="h-8 w-8 text-white" />
        </div>
      ),
      title: "E-commerce Solutions",
      description: "Complete online store solutions that drive sales and provide seamless shopping experiences.",
      features: [
        "Payment Integration",
        "Inventory Management",
        "Order Processing", 
        "Analytics Dashboard"
      ]
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
          <Globe className="h-8 w-8 text-white" />
        </div>
      ),
      title: "Mobile Optimization",
      description: "Ensure your website works perfectly on all devices with our mobile-first approach.",
      features: [
        "Touch-Friendly Design",
        "Fast Mobile Loading",
        "App-Like Experience", 
        "Cross-Platform"
      ]
    },
    {
      icon: (
        <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
          <Wrench className="h-8 w-8 text-white" />
        </div>
      ),
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your website running smoothly and securely.",
      features: [
        "Regular Updates",
        "Security Monitoring",
        "Performance Optimization", 
        "24/7 Support"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive web development solutions tailored to your business needs
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 p-8"
            >
              <CardHeader className="pb-6">
                <div className="mb-6">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-semibold mb-4">
                  {service.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Heart className="h-4 w-4 text-red-500" />
            <span>Loved by 10,000+ customers worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;