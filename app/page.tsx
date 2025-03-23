import Link from "next/link"
import { Building, Zap, Sparkles, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CounterAnimation } from "@/components/counter-animation"
import { HeroAnimation } from "@/components/hero-animation"
import { ParallaxCards } from "@/components/parallax-cards"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { FloatingElements } from "@/components/floating-elements"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Building className="h-6 w-6 text-primary" />
            <span className="text-lg font-display font-bold">Assemblr</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group"
            >
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground relative group"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="relative overflow-hidden group">
                <span className="relative z-10">Login</span>
                <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm" className="relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%] group-hover:animate-shimmer"></span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="hero-section overflow-hidden relative py-20 md:py-32">
          <FloatingElements />
          <div className="container relative">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6 animate-fade-in">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-primary text-primary-foreground animate-pulse">
                    <Sparkles className="h-3 w-3 mr-1" />
                    <span>New AI-powered governance insights</span>
                  </div>
                  <h1 className="animate-slide-up text-4xl md:text-5xl lg:text-6xl font-bold">
                    <span className="gradient-text bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
                      Build, Fund, and Govern
                    </span>{" "}
                    Your Organization
                  </h1>
                  <p className="max-w-[600px] text-xl text-muted-foreground animate-slide-up [animation-delay:100ms]">
                    A complete platform for creating and managing modern organizations with transparent governance and
                    flexible funding options.
                  </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row animate-slide-up [animation-delay:200ms]">
                  <Link href="/signup">
                    <Button size="lg" className="gap-2 relative overflow-hidden group">
                      <span className="relative z-10 flex items-center">
                        Start Building
                        <Rocket className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%] group-hover:animate-shimmer"></span>
                    </Button>
                  </Link>
                  <Link href="/demo">
                    <Button size="lg" variant="outline" className="group relative">
                      <span className="relative z-10">Watch Demo</span>
                      <span className="absolute inset-0 scale-0 rounded-md bg-primary/10 transition-all duration-300 group-hover:scale-100"></span>
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-8 animate-slide-up [animation-delay:300ms]">
                  <div className="flex flex-col p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-accent">
                    <div className="text-3xl font-bold text-primary">
                      <CounterAnimation value={5000} duration={2000} />+
                    </div>
                    <div className="text-sm text-muted-foreground">Organizations</div>
                  </div>
                  <div className="flex flex-col p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-accent">
                    <div className="text-3xl font-bold text-primary">
                      <CounterAnimation value={120} duration={2000} />
                      M+
                    </div>
                    <div className="text-sm text-muted-foreground">Managed Funds</div>
                  </div>
                  <div className="flex flex-col p-3 rounded-lg bg-background/50 backdrop-blur-sm border border-accent">
                    <div className="text-3xl font-bold text-primary">
                      <CounterAnimation value={98} duration={2000} />%
                    </div>
                    <div className="text-sm text-muted-foreground">Satisfaction</div>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <HeroAnimation />
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        <section
          id="features"
          className="section py-20 relative overflow-hidden bg-gradient-to-b from-background to-accent/20"
        >
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold bg-primary/10 text-primary">
                <Zap className="h-4 w-4 mr-2" />
                Powerful Features
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
                Core Features
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Everything you need to build and manage your organization in one place
              </p>
            </div>

            <ParallaxCards />
          </div>

          <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl translate-x-1/4 translate-y-1/4"></div>
        </section>

        <section className="section py-20 relative overflow-hidden">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold bg-primary/10 text-primary">
                <Sparkles className="h-4 w-4 mr-2" />
                Why Choose Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
                Why Choose Assemblr
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                A modern platform built for the future of organizational management
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-accent/50 border border-transparent hover:border-accent hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 rounded-full bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Streamlined Setup</h3>
                <p className="mt-2 text-muted-foreground">
                  Launch your organization in minutes, not weeks, with our intuitive setup process.
                </p>
              </div>

              <div className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-accent/50 border border-transparent hover:border-accent hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 rounded-full bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="M12 8v4l3 3"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Time-Saving Automation</h3>
                <p className="mt-2 text-muted-foreground">
                  Automate routine tasks and governance processes to focus on what matters.
                </p>
              </div>

              <div className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-accent/50 border border-transparent hover:border-accent hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 rounded-full bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M20 7h-9"></path>
                    <path d="M14 17H5"></path>
                    <circle cx="17" cy="17" r="3"></circle>
                    <circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Flexible Configuration</h3>
                <p className="mt-2 text-muted-foreground">
                  Customize every aspect of your organization to match your unique needs.
                </p>
              </div>

              <div className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-accent/50 border border-transparent hover:border-accent hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 rounded-full bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Real-time Analytics</h3>
                <p className="mt-2 text-muted-foreground">
                  Make data-driven decisions with comprehensive analytics and reporting.
                </p>
              </div>

              <div className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-accent/50 border border-transparent hover:border-accent hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 rounded-full bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Enterprise-Grade Security</h3>
                <p className="mt-2 text-muted-foreground">
                  Protect your organization with advanced security features and compliance tools.
                </p>
              </div>

              <div className="group flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-accent/50 border border-transparent hover:border-accent hover:shadow-lg hover:-translate-y-1">
                <div className="mb-4 rounded-full bg-primary/10 p-3 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Community Engagement</h3>
                <p className="mt-2 text-muted-foreground">
                  Build and nurture your community with powerful engagement tools.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 relative overflow-hidden bg-gradient-to-b from-accent/20 to-background">
          <div className="container">
            <TestimonialCarousel />
          </div>
          <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full filter blur-3xl translate-x-1/2"></div>
        </section>

        <section className="section py-20 relative overflow-hidden">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-16">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold bg-primary/10 text-primary">
                <Rocket className="h-4 w-4 mr-2" />
                Get Started Today
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
                Ready to Get Started?
              </h2>
              <p className="max-w-[800px] text-xl text-muted-foreground">
                Join thousands of organizations already using Assemblr to streamline their operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 relative overflow-hidden group">
                    <span className="relative z-10 flex items-center">
                      Start Building
                      <Rocket className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%] group-hover:animate-shimmer"></span>
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button size="lg" variant="outline" className="group relative">
                    <span className="relative z-10">Watch Demo</span>
                    <span className="absolute inset-0 scale-0 rounded-md bg-primary/10 transition-all duration-300 group-hover:scale-100"></span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-1/2">
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-background"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-background">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building className="h-6 w-6 text-primary" />
                <span className="text-lg font-display font-bold">Assemblr</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Building the future of organizational management.</p>
              <p className="text-sm text-muted-foreground">© 2025 Assemblr. All rights reserved.</p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/features"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/roadmap"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Roadmap
                  </Link>
                </li>
                <li>
                  <Link
                    href="/changelog"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/guides"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Guides
                  </Link>
                </li>
                <li>
                  <Link href="/api" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link
                    href="/support"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex gap-4">
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms
                </Link>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy
                </Link>
                <Link href="/cookies" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Cookies
                </Link>
              </div>
              <div className="flex gap-4">
                <Link
                  href="https://twitter.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Link>
                <Link
                  href="https://github.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

