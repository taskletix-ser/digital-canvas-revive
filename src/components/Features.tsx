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
  TrendingUp
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Lightning Fast",
      description: "Optimized performance with cutting-edge technology for blazing fast load times.",
      badge: "Performance",
      color: "text-accent-blue"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee and data protection.",
      badge: "Security", 
      color: "text-accent-green"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile First",
      description: "Responsive design that looks perfect on every device and screen size.",
      badge: "Design",
      color: "text-accent-purple"
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Clean Code",
      description: "Well-structured, maintainable code following industry best practices.",
      badge: "Development",
      color: "text-accent-orange"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Global Scale", 
      description: "CDN-powered delivery ensuring fast access from anywhere in the world.",
      badge: "Infrastructure",
      color: "text-accent-blue"
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth Focused",
      description: "Built to scale with your business needs and handle increasing traffic.",
      badge: "Scalability",
      color: "text-primary"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Services
          </Badge>
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
            Why Choose
            <span className="gradient-text"> Our Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We deliver exceptional digital experiences with modern technology, 
            creative design, and reliable performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border/50 hover:border-primary/20 bg-gradient-card"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-primary/10 ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
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