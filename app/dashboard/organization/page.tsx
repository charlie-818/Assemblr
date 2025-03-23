import Link from "next/link"
import { Building, Edit, Globe, Users, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OrganizationPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Organization</h1>
        <p className="text-muted-foreground">Manage your organization's profile, structure, and settings.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <Card className="flex-1">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>Organization Profile</CardTitle>
              <Link href="/dashboard/organization/edit">
                <Button variant="outline" size="icon">
                  <Edit className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <div className="relative h-20 w-20 rounded-lg border bg-muted">
                <Building className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
              </div>
              <div className="flex-1 space-y-1 text-center sm:text-left">
                <h3 className="font-semibold">Acme Organization</h3>
                <div className="text-sm text-muted-foreground">
                  <p>Non-profit organization</p>
                  <p>Founded: January 2025</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold">Mission Statement</h4>
              <p className="text-sm text-muted-foreground">
                Acme Organization is dedicated to advancing technological innovation while promoting ethical practices
                and community engagement. We strive to create solutions that empower individuals and organizations to
                achieve their goals sustainably.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <h4 className="mb-1 text-sm font-semibold">Website</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Globe className="h-4 w-4" />
                  <a href="https://acme-org.example.com" className="hover:underline">
                    acme-org.example.com
                  </a>
                </div>
              </div>
              <div>
                <h4 className="mb-1 text-sm font-semibold">Members</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4" />
                  <span>128 members</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="flex-1">
          <CardHeader>
            <CardTitle>Organization Structure</CardTitle>
            <CardDescription>Current organizational structure and governance model</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-2 text-sm font-semibold">Governance Model</h4>
              <div className="rounded-md border p-3">
                <div className="mb-2 flex items-center gap-2">
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                    Hybrid DAO
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">
                  A combination of token-weighted voting for major decisions and delegated authority for day-to-day
                  operations.
                </p>
              </div>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold">Leadership Structure</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-md border p-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                    <div>
                      <p className="text-sm font-medium">John Doe</p>
                      <p className="text-xs text-muted-foreground">President</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-md border p-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                    <div>
                      <p className="text-sm font-medium">Jane Smith</p>
                      <p className="text-xs text-muted-foreground">Treasurer</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-md border p-2">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-muted" />
                    <div>
                      <p className="text-sm font-medium">Alex Johnson</p>
                      <p className="text-xs text-muted-foreground">Secretary</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/organization/structure">
              <Button variant="outline" size="sm">
                Edit Structure
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="details">
        <TabsList>
          <TabsTrigger value="details">Organization Details</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="legal">Legal Documents</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Organization Details</CardTitle>
              <CardDescription>Detailed information about your organization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Organization Type</h4>
                  <p className="text-sm text-muted-foreground">Non-profit</p>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Jurisdiction</h4>
                  <p className="text-sm text-muted-foreground">Delaware, USA</p>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Tax ID</h4>
                  <p className="text-sm text-muted-foreground">XX-XXXXXXX</p>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Registration Date</h4>
                  <p className="text-sm text-muted-foreground">January 15, 2025</p>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold">Description</h4>
                <p className="text-sm text-muted-foreground">
                  Acme Organization focuses on developing open-source software solutions for community governance and
                  transparent decision-making. Our projects aim to bridge traditional organizational structures with
                  modern decentralized approaches, creating more inclusive and efficient systems for collaboration.
                </p>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold">Contact Information</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Email: contact@acme-org.example.com</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Address: 123 Main St, Anytown, USA</p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/organization/edit-details">
                <Button variant="outline" size="sm">
                  Edit Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="branding">
          <Card>
            <CardHeader>
              <CardTitle>Organization Branding</CardTitle>
              <CardDescription>Manage your organization's visual identity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Logo</h4>
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 rounded-lg border bg-muted">
                      <Building className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
                    </div>
                    <Button variant="outline" size="sm">
                      Upload New Logo
                    </Button>
                  </div>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold">Color Scheme</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="h-8 w-8 rounded-full bg-primary" title="Primary" />
                    <div className="h-8 w-8 rounded-full bg-secondary" title="Secondary" />
                    <div className="h-8 w-8 rounded-full bg-accent" title="Accent" />
                    <div className="h-8 w-8 rounded-full bg-muted" title="Muted" />
                    <Button variant="outline" size="sm" className="ml-2">
                      Customize
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="mb-2 text-sm font-semibold">Brand Guidelines</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  Upload or create brand guidelines for consistent representation.
                </p>
                <Button variant="outline" size="sm">
                  Upload Guidelines
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="legal">
          <Card>
            <CardHeader>
              <CardTitle>Legal Documents</CardTitle>
              <CardDescription>Manage your organization's legal documents and bylaws</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-md border p-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Organization Bylaws</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-md border p-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Articles of Incorporation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-md border p-3">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">Governance Framework</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <Button variant="outline">Upload New Document</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

