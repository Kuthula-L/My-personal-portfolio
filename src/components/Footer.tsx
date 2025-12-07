import { ArrowUpRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-display text-xl font-bold text-foreground">
              Portfolio<span className="text-primary">.</span>
            </span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} All rights reserved. Crafted with passion.
          </p>

          <a
            href="#"
            className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            Back to top
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
