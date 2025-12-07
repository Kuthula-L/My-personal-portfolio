import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-glow opacity-40" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float delay-500" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 opacity-0 animate-fade-up">
            <Sparkles size={16} className="text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              Available for new projects
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up delay-100">
            <span className="text-foreground">Crafting Digital</span>
            <br />
            <span className="text-gradient">Experiences</span>
            <span className="text-foreground">.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up delay-200">
            I design and develop premium digital products that connect brands with
            their audience through thoughtful design and cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-up delay-300">
            <Button variant="hero" size="xl" onClick={scrollToProjects}>
              Explore My Work
              <ArrowDown size={20} className="ml-2" />
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="/#contact">Get In Touch</a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto opacity-0 animate-fade-up delay-400">
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                8<span className="text-primary">+</span>
              </div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                5<span className="text-primary">+</span>
              </div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-1">
                100<span className="text-primary">%</span>
              </div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in delay-700">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
        </div>
      </div>
    </section>
  );
}
