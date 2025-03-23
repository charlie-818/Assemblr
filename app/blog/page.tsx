import Link from "next/link"
import { ArrowRight, Building, Calendar, Clock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Organizational Governance",
      excerpt: "Explore how AI and blockchain are transforming how organizations make decisions and manage resources.",
      date: "May 15, 2025",
      author: "Sarah Chen",
      readTime: "8 min read",
      category: "Governance",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "5 Ways to Improve Member Engagement",
      excerpt:
        "Practical strategies to boost participation and create a more active community within your organization.",
      date: "May 10, 2025",
      author: "Michael Rodriguez",
      readTime: "6 min read",
      category: "Community",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Treasury Management Best Practices",
      excerpt: "Learn how leading organizations are managing their resources efficiently in the digital age.",
      date: "May 5, 2025",
      author: "Aisha Johnson",
      readTime: "10 min read",
      category: "Finance",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "The Rise of Decentralized Organizations",
      excerpt: "How DAOs and other decentralized structures are changing the organizational landscape.",
      date: "April 28, 2025",
      author: "David Kim",
      readTime: "7 min read",
      category: "Trends",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Legal Considerations for Modern Organizations",
      excerpt: "Navigate the complex legal landscape of running a digital-first organization across jurisdictions.",
      date: "April 20, 2025",
      author: "Elena Rodriguez",
      readTime: "9 min read",
      category: "Legal",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Case Study: How Acme DAO Scaled to 10,000 Members",
      excerpt: "An in-depth look at how one organization managed explosive growth while maintaining community values.",
      date: "April 15, 2025",
      author: "James Wilson",
      readTime: "12 min read",
      category: "Case Study",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

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
            <Link href="/blog" className="text-sm font-medium text-foreground transition-colors relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary"></span>
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
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
                Assemblr Blog
              </h1>
              <p className="mx-auto max-w-[700px] text-xl text-muted-foreground">
                Insights, guides, and news about organizational management and governance
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Card
                  key={post.id}
                  className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold bg-primary/10 text-primary">
                        {post.category}
                      </span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter className="p-6 pt-0 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{post.author}</span>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" size="sm" className="group/btn">
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg" className="group">
                Load More Articles
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-gradient-to-b from-accent/20 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-blue-500">
                Subscribe to Our Newsletter
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Get the latest insights and updates delivered straight to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="relative overflow-hidden group">
                  <span className="relative z-10">Subscribe</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary via-purple-500 to-primary bg-[length:200%] group-hover:animate-shimmer"></span>
                </Button>
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

