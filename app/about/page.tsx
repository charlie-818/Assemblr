import Link from "next/link"
import { Building, Users, Lightbulb, Heart, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Building className="h-6 w-6 text-primary" />
            <span className="text-lg font-display font-bold">Assemblr</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Mission</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We're building the future of organizational governance and management.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-8 pt-12">
              <p className="text-lg">
                At Assemblr, we believe that organizations should be transparent, efficient, and accessible to all. Our
                platform is designed to empower communities, companies, and collectives to make decisions together,
                manage resources effectively, and achieve their goals.
              </p>
              <p className="text-lg">
                Founded in 2023, Assemblr emerged from our team's experience working with DAOs, non-profits, and
                traditional companies. We saw a need for better tools that bridge the gap between traditional
                organizational structures and new decentralized models.
              </p>
              <p className="text-lg">
                Our platform combines the best of both worlds: the accountability and structure of traditional
                governance with the transparency and participation of decentralized systems.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Our Values</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">The principles that guide everything we do.</p>
            </div>
            <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Community First</h3>
                  <p className="text-muted-foreground">
                    We believe that organizations thrive when everyone has a voice. Our platform is designed to
                    facilitate participation and collaboration at every level.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Radical Transparency</h3>
                  <p className="text-muted-foreground">
                    We're committed to openness in everything we do. From our code to our business practices, we believe
                    transparency builds trust and accountability.
                  </p>
                </CardContent>
              </Card>
              <Card className="md:col-span-2 lg:col-span-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <Heart className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Accessible Governance</h3>
                  <p className="text-muted-foreground">
                    We're dedicated to making governance accessible to everyone, regardless of technical background. Our
                    tools are designed to be intuitive and user-friendly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tighter">Meet Our Team</h2>
                <p className="text-lg text-muted-foreground">
                  We're a diverse team of engineers, designers, and governance experts passionate about building tools
                  that empower organizations to achieve their missions.
                </p>
                <p className="text-lg text-muted-foreground">
                  With backgrounds spanning traditional finance, blockchain technology, community organizing, and
                  software development, our team brings a unique perspective to organizational governance.
                </p>
                <Link href="/team">
                  <Button className="gap-2">
                    Meet the full team
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="aspect-square rounded-lg bg-muted overflow-hidden">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Sarah Chen</h4>
                    <p className="text-sm text-muted-foreground">Co-founder & CEO</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="aspect-square rounded-lg bg-muted overflow-hidden">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Michael Rodriguez</h4>
                    <p className="text-sm text-muted-foreground">Co-founder & CTO</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="aspect-square rounded-lg bg-muted overflow-hidden">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">Aisha Johnson</h4>
                    <p className="text-sm text-muted-foreground">Head of Product</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="aspect-square rounded-lg bg-muted overflow-hidden">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt="Team member"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">David Kim</h4>
                    <p className="text-sm text-muted-foreground">Lead Engineer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Join Our Mission</h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                We're always looking for talented individuals who share our vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/careers">
                  <Button variant="secondary" size="lg">
                    View Open Positions
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                  >
                    Contact Us
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

