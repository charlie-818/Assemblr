import Link from "next/link"
import { Building, ChevronRight, FileText, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function DocsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Building className="h-6 w-6 text-primary" />
            <span className="text-lg font-display font-bold">Assemblr</span>
          </Link>
          <div className="hidden md:flex flex-1 items-center justify-center px-8">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search documentation..." className="w-full rounded-md pl-8" />
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="flex-1 flex">
        <aside className="hidden md:flex w-64 flex-col border-r p-6">
          <nav className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Getting Started</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/docs/introduction"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                  >
                    Introduction
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/quickstart"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                  >
                    Quickstart Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/installation"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                  >
                    Installation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Core Concepts</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/docs/organizations"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                  >
                    Organizations
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/governance"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                  >
                    Governance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/treasury"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                  >
                    Treasury Management
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/members"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                  >
                    Member Management
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Advanced</h3>
              <ul className="space-y-1">
                <li>
                  <Link
                    href="/docs/api"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                  >
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/webhooks"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                  >
                    Webhooks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/integrations"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors block py-1"
                  >
                    Integrations
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        <main className="flex-1 py-12">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Documentation</h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Everything you need to know about using Assemblr for your organization.
              </p>
              <div className="flex md:hidden w-full max-w-sm">
                <div className="relative w-full">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Search documentation..." className="w-full rounded-md pl-8" />
                </div>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription>Learn the basics of Assemblr and set up your first organization.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/docs/introduction" className="text-primary hover:underline flex items-center gap-1">
                        Introduction to Assemblr
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/quickstart" className="text-primary hover:underline flex items-center gap-1">
                        Quickstart Guide
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/installation" className="text-primary hover:underline flex items-center gap-1">
                        Installation and Setup
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/docs/getting-started" className="w-full">
                    <Button variant="outline" className="w-full">
                      View All
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Governance</CardTitle>
                  <CardDescription>Learn how to set up and manage your organization's governance.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/docs/governance/proposals"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Creating Proposals
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/governance/voting"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Voting Systems
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/governance/parameters"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Governance Parameters
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/docs/governance" className="w-full">
                    <Button variant="outline" className="w-full">
                      View All
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Treasury</CardTitle>
                  <CardDescription>Manage your organization's funds and financial resources.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/docs/treasury/setup"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Setting Up Your Treasury
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/treasury/multisig"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Multi-signature Controls
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/treasury/transactions"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Managing Transactions
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/docs/treasury" className="w-full">
                    <Button variant="outline" className="w-full">
                      View All
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Members</CardTitle>
                  <CardDescription>Manage your organization's members and roles.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/docs/members/inviting"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Inviting Members
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/docs/members/roles" className="text-primary hover:underline flex items-center gap-1">
                        Role Management
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/members/permissions"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Permission Settings
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/docs/members" className="w-full">
                    <Button variant="outline" className="w-full">
                      View All
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>API Reference</CardTitle>
                  <CardDescription>Integrate with Assemblr using our comprehensive API.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/docs/api/authentication"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Authentication
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/api/organizations"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Organizations API
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/api/governance"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Governance API
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/docs/api" className="w-full">
                    <Button variant="outline" className="w-full">
                      View All
                    </Button>
                  </Link>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Guides & Tutorials</CardTitle>
                  <CardDescription>Step-by-step guides to help you get the most out of Assemblr.</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/docs/guides/first-proposal"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Creating Your First Proposal
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/guides/treasury-setup"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Setting Up a Secure Treasury
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/docs/guides/onboarding"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Member Onboarding Best Practices
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/docs/guides" className="w-full">
                    <Button variant="outline" className="w-full">
                      View All
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-16 flex flex-col items-center justify-center space-y-4 text-center">
              <div className="flex items-center gap-2">
                <FileText className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Need more help?</h2>
              </div>
              <p className="mx-auto max-w-[600px] text-muted-foreground">
                Can't find what you're looking for in our documentation? Our support team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact">
                  <Button variant="outline" size="lg">
                    Contact Support
                  </Button>
                </Link>
                <Link href="https://community.assemblr.com">
                  <Button size="lg">Join Community</Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>

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

