import Link from "next/link"
import { ArrowRight, Building, Coins, Users, Vote, Zap, FileText, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Building className="h-6 w-6 text-primary" />
            <span className="text-lg font-display font-bold">Assemblr</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link href="/features" className="text-sm font-medium text-foreground transition-colors relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
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
        <section className="py-12 md:py-24 bg-gradient-to-b from-background to-accent/20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-semibold bg-primary/10 text-primary">
                <Sparkles className="h-4 w-4 mr-2" />
                Powerful Features
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
                Comprehensive Platform Features
              </h1>
              <p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
                Discover all the tools and features that make Assemblr the ultimate platform for modern organizations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Organization Creation</CardTitle>
                  <CardDescription>Define your organization's structure, mission, and branding</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Multiple organization types</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Custom branding options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Flexible structure templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Complete customization</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/features/organization" className="w-full">
                    <Button className="w-full group">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Coins className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Funding Mechanisms</CardTitle>
                  <CardDescription>Multiple ways to fund your organization and manage resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Membership dues & donations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Investment rounds</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Token creation & management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Treasury dashboard</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/features/funding" className="w-full">
                    <Button className="w-full group">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Vote className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Governance Structure</CardTitle>
                  <CardDescription>Customizable governance systems for transparent decision-making</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>DAO integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Proposal & voting systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Customizable parameters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Role-based permissions</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/features/governance" className="w-full">
                    <Button className="w-full group">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Member Management</CardTitle>
                  <CardDescription>Tools for onboarding, communication, and member coordination</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>User onboarding flows</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Member dashboards</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Directory & communication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Contribution tracking</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/features/members" className="w-full">
                    <Button className="w-full group">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Legal & Compliance</CardTitle>
                  <CardDescription>Tools to ensure your organization meets legal requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Bylaw templates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Jurisdiction compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Audit trails</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Privacy controls</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/features/legal" className="w-full">
                    <Button className="w-full group">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardHeader>
                  <div className="rounded-full w-12 h-12 bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
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
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </div>
                  <CardTitle>Multi-Chain Support</CardTitle>
                  <CardDescription>Blockchain integration with support for multiple networks</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Ethereum, Solana & more</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Wallet connectivity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Decentralized storage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>API integrations</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/features/blockchain" className="w-full">
                    <Button className="w-full group">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-gradient-to-b from-accent/20 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
                Ready to transform your organization?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Join thousands of organizations already using Assemblr to streamline their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/signup">
                  <Button size="lg" className="gap-2 relative overflow-hidden group">
                    <span className="relative z-10">Get Started</span>
                    <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%] group-hover:animate-shimmer"></span>
                  </Button>
                </Link>
                <Link href="/demo">
                  <Button variant="outline" size="lg" className="group relative">
                    <span className="relative z-10">Watch Demo</span>
                    <span className="absolute inset-0 scale-0 rounded-md bg-primary/10 transition-all duration-300 group-hover:scale-100"></span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center gap-2">
              <Building className="h-6 w-6 text-primary" />
              <span className="text-lg font-display font-bold">Assemblr</span>
            </div>
            <p className="text-muted-foreground">Building better organizations, together.</p>
            <div className="flex gap-4">
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

