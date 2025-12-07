import { useParams, Link, Navigate } from 'react-router-dom';
import { getProjectById, getSortedProjects } from '@/data/projects';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowUpRight, Calendar, Clock, User, ChevronRight } from 'lucide-react';

export default function ProjectPage() {
  const { id } = useParams();
  const project = getProjectById(id || '');
  const allProjects = getSortedProjects();
  const currentIndex = allProjects.findIndex((p) => p.id === id);
  const nextProject = allProjects[currentIndex + 1] || allProjects[0];
  
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation();

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24">
        {/* Back Button */}
        <div className="container mx-auto px-6 py-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={18} />
            <span>Back to Projects</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section
          ref={heroRef}
          className={cn(
            'pb-16 transition-all duration-700',
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                {project.title}
              </h1>

              {/* Description */}
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                {project.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} className="text-primary" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={16} className="text-primary" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User size={16} className="text-primary" />
                  <span>{project.role}</span>
                </div>
              </div>

              {/* Live Link */}
              {project.liveUrl && (
                <Button variant="hero" size="lg" className="mt-8" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live Site
                    <ArrowUpRight size={18} />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="pb-20">
          <div className="container mx-auto px-6">
            <div className="aspect-video rounded-2xl bg-card border border-border overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section
          ref={contentRef}
          className={cn(
            'pb-20 transition-all duration-700',
            contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Challenge */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    The Challenge
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    The Solution
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Results */}
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    Key Results
                  </h2>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ChevronRight size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Client */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                    Client
                  </h3>
                  <p className="text-foreground font-medium">{project.client}</p>
                </div>

                {/* Tech Stack */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-secondary text-sm font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section
          ref={galleryRef}
          className={cn(
            'pb-20 transition-all duration-700',
            galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <div className="container mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              Project Gallery
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="aspect-video rounded-xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Project */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <span className="text-muted-foreground text-sm uppercase tracking-wider">
                Next Project
              </span>
              <Link
                to={`/project/${nextProject.id}`}
                className="block mt-4 group"
              >
                <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {nextProject.title}
                  <ArrowUpRight
                    size={32}
                    className="inline-block ml-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </h3>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
