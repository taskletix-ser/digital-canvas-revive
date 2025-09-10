const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We start by understanding your business goals, target audience, and project requirements to create a comprehensive plan."
    },
    {
      number: "02", 
      title: "Design & Prototyping",
      description: "Our designers create stunning mockups and prototypes that align with your brand and user experience goals."
    },
    {
      number: "03",
      title: "Development", 
      description: "Our developers bring the designs to life using modern technologies and best practices for optimal performance."
    },
    {
      number: "04",
      title: "Testing & Launch",
      description: "Rigorous testing ensures everything works perfectly before we launch your website to the world."
    }
  ];

  return (
    <section id="process" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl sm:text-5xl mb-6">
            Our Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures successful project delivery
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              {/* Step Number */}
              <div className="w-20 h-20 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mx-auto mb-6">
                {step.number}
              </div>
              
              {/* Step Content */}
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;