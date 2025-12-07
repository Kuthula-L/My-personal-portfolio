import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSortedProjects } from '@/data/projects';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Timeline() {
  const projects = getSortedProjects();
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentYear, setCurrentYear] = useState<number>(projects[0]?.year || 2024);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const containerHeight = rect.height;
      
      // Calculate scroll progress within the container
      const progress = Math.max(
        0,
        Math.min(1, (windowHeight - rect.top) / (windowHeight + containerHeight))
      );
      setScrollProgress(progress);

      // Determine which year to show based on scroll
      const projectIndex = Math.floor(progress * projects.length);
      const clampedIndex = Math.min(projectIndex, projects.length - 1);
      if (projects[clampedIndex]) {
        setCurrentYear(projects[clampedIndex].year);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [projects]);

  return (
    <section id="projects" className="py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={cn(
            'max-w-4xl mx-auto text-center mb-20 transition-all duration-700',
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <span className="text-primary font-medium mb-4 block">Selected Work</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Project <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A chronological journey through my most impactful projects, 
            from recent work to foundational pieces.
          </p>
        </div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative">
          {/* Desktop: Timeline with left dates, right cards */}
          <div className="hidden lg:block">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2">
              {/* Progress indicator */}
              <div
                className="absolute top-0 left-0 w-full bg-primary transition-all duration-100"
                style={{ height: `${scrollProgress * 100}%` }}
              />
              {/* Glowing dot */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary animate-pulse-glow"
                style={{ top: `${scrollProgress * 100}%` }}
              />
            </div>

            {/* Floating Year Indicator */}
            <div className="sticky top-32 z-20 pointer-events-none mb-8">
              <div className="absolute left-1/2 -translate-x-1/2 -translate-y-full">
                <span className="font-display text-8xl font-bold text-primary/10">
                  {currentYear}
                </span>
              </div>
            </div>

            {/* Project Cards */}
            {projects.map((project, index) => (
              <TimelineItem key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Mobile: Single column */}
          <div className="lg:hidden space-y-8">
            {projects.map((project, index) => (
              <MobileTimelineItem key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ project, index }: { project: ReturnType<typeof getSortedProjects>[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={cn(
        'relative grid grid-cols-2 gap-12 mb-24 last:mb-0',
        isVisible ? 'opacity-100' : 'opacity-0'
      )}
    >
      {/* Date Side */}
      <div
        className={cn(
          'flex items-center transition-all duration-700',
          isEven ? 'justify-end pr-12' : 'order-2 justify-start pl-12',
          isVisible
            ? 'translate-x-0'
            : isEven
            ? '-translate-x-10'
            : 'translate-x-10'
        )}
      >
        <div className={cn('text-right', !isEven && 'text-left')}>
          <span className="font-display text-4xl font-bold text-foreground block">
            {project.date.split(' ')[0]}
          </span>
          <span className="text-xl text-muted-foreground">
            {project.date.split(' ')[1]}
          </span>
        </div>
      </div>

      {/* Timeline Dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-card border-4 border-primary z-10" />

      {/* Card Side */}
      <div
        className={cn(
          'transition-all duration-700',
          isEven ? 'pl-12' : 'order-1 pr-12',
          isVisible
            ? 'translate-x-0'
            : isEven
            ? 'translate-x-10'
            : '-translate-x-10'
        )}
      >
        <ProjectCard project={project} />
      </div>
    </div>
  );
}

function MobileTimelineItem({ project, index }: { project: ReturnType<typeof getSortedProjects>[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={cn(
        'relative pl-8 border-l-2 border-border transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
      
      {/* Date */}
      <div className="mb-4">
        <span className="font-display text-lg font-bold text-foreground">
          {project.date}
        </span>
      </div>

      {/* Card */}
      <ProjectCard project={project} />
    </div>
  );
}

function ProjectCard({ project }: { project: ReturnType<typeof getSortedProjects>[0] }) {
  return (
    <Link
      to={`/project/${project.id}`}
      className="group block rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-hover"
    >
      {/* Image */}
      <div className="aspect-video bg-secondary relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <ArrowUpRight
            size={20}
            className="text-muted-foreground group-hover:text-primary transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 flex-shrink-0 ml-4"
          />
        </div>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
