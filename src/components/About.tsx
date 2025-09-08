import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const values = [
    {
      title: "Mission-Driven",
      description: "We're committed to helping businesses establish a strong digital presence that drives real growth."
    },
    {
      title: "Client-Centered", 
      description: "Every project starts with understanding your unique needs and building solutions that fit perfectly."
    },
    {
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions for your business."
    },
    {
      title: "Quality Assured",
      description: "Our rigorous testing and quality assurance process ensures exceptional results every time."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
            About TASKLETIX
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded in 2025, we're a passionate team of developers and designers 
            dedicated to creating exceptional web experiences that help businesses 
            thrive in the digital world.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Story */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-semibold text-foreground mb-6">Our Story</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  TASKLETIX started with a simple mission: to bridge the gap between innovative technology and practical 
                  business solutions. We saw too many businesses struggling with outdated websites that didn't represent their 
                  true potential.
                </p>
                <p>
                  Today, we've grown into a full-service web development agency that combines technical 
                  expertise with creative design to deliver websites that not only look amazing but also 
                  drive meaningful business results.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-background border border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <h4 className="font-semibold text-foreground text-lg mb-3">{value.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;