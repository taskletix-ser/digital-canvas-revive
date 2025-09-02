import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A modern e-commerce website with advanced features and seamless user experience.",
      technologies: ["React", "Node.js", "MongoDB"],
      image: "bg-gradient-to-br from-blue-600 to-purple-600"
    },
    {
      title: "Corporate Website", 
      description: "A professional corporate website that effectively communicates the brand message.",
      technologies: ["HTML5", "CSS3", "JavaScript"],
      image: "bg-gradient-to-br from-teal-500 to-blue-600"
    },
    {
      title: "Web Application",
      description: "A complex web application with real-time features and advanced functionality.",
      technologies: ["Vue.js", "Express", "PostgreSQL"],
      image: "bg-gradient-to-br from-green-500 to-teal-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our recent work that showcases our expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              {/* Project Image */}
              <div className={`h-48 ${project.image} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              
              {/* Project Content */}
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-semibold mb-2">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;