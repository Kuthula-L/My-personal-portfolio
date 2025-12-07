import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Code2, Palette, Rocket, Zap } from 'lucide-react';

const skills = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Creating intuitive interfaces that delight users and drive engagement.',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Building scalable applications with modern technologies and best practices.',
  },
  {
    icon: Rocket,
    title: 'Strategy',
    description: 'Defining product vision and roadmaps that align with business goals.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed, accessibility, and exceptional user experience.',
  },
];

const technologies = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'PostgreSQL',
  'Figma', 'Tailwind', 'AWS', 'Docker', 'GraphQL', 'MongoDB'
];

export function About() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={sectionRef}
          className={cn(
            'max-w-4xl mx-auto text-center mb-20 transition-all duration-700',
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <span className="text-primary font-medium mb-4 block">About Me</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Turning Ideas Into
            <span className="text-gradient"> Digital Reality</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a designer and developer with over 5 years of experience creating digital products
            that make a difference. I believe in the power of thoughtful design and clean code to
            solve real problems and create meaningful connections between brands and their users.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={skillsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={cn(
                'group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-hover',
                skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              )}
              style={{ transitionDelay: skillsVisible ? `${index * 100}ms` : '0ms' }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <skill.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {skill.title}
              </h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Technologies */}
        <div className={cn(
          'text-center transition-all duration-700 delay-300',
          skillsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        )}>
          <h3 className="font-display text-xl font-semibold text-foreground mb-6">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium border border-border hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
