import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
import { ArrowUpRight, Mail, Github, Linkedin, Twitter, Send, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
];

export function Contact() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={sectionRef}
          className={cn(
            'max-w-4xl mx-auto text-center mb-16 transition-all duration-700',
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
        >
          <span className="text-primary font-medium mb-4 block">Get In Touch</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Drop me a message and
            let's create something amazing together.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div
            className={cn(
              'lg:col-span-2 transition-all duration-700 delay-200',
              sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            )}
          >
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                  Let's connect
                </h3>
                <p className="text-muted-foreground">
                  I'm always excited to discuss new opportunities, creative ideas,
                  or just have a friendly chat about design and technology.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-foreground mb-4">Find me on</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="group w-12 h-12 rounded-xl bg-secondary flex items-center justify-center border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon
                        size={20}
                        className="text-muted-foreground group-hover:text-primary transition-colors"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-card border border-border">
                <p className="text-sm text-muted-foreground mb-2">Email me at</p>
                <a
                  href="mailto:hello@example.com"
                  className="text-foreground font-medium hover:text-primary transition-colors flex items-center gap-2"
                >
                  hello@example.com
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={cn(
              'lg:col-span-3 transition-all duration-700 delay-300',
              formVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            )}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-card border-border focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="What's this about?"
                  required
                  className="bg-card border-border focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="bg-card border-border focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
