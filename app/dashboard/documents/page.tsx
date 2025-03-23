import Link from "next/link"
import { Clock, Download, FileText, Filter, Folder, Plus, Search, Share, Star, StarOff } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DocumentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Documents</h1>
          <p className="text-muted-foreground">Manage your organization's documents and files</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link href="/dashboard/documents/create">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Create Document
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search documents..." className="w-full rounded-md pl-8 md:w-[300px]" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            Filters
          </Button>
          <Button variant="outline" size="sm" className="gap-1">
            <Clock className="h-4 w-4" />
            Recent
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All Documents</TabsTrigger>
          <TabsTrigger value="legal">Legal</TabsTrigger>
          <TabsTrigger value="governance">Governance</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
          <TabsTrigger value="shared">Shared with Me</TabsTrigger>
        </TabsList>
        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <CardTitle className="text-sm font-medium">Organization Bylaws</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Star className="h-4 w-4 text-yellow-400" />
                  </Button>
                </div>
                <CardDescription className="text-xs">Last updated: May 15, 2025</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-xs text-muted-foreground">
                  Official bylaws governing the organization's structure, governance, and operations.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-xs text-muted-foreground">Legal Document</div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <CardTitle className="text-sm font-medium">Governance Framework</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Star className="h-4 w-4 text-yellow-400" />
                  </Button>
                </div>
                <CardDescription className="text-xs">Last updated: April 28, 2025</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-xs text-muted-foreground">
                  Comprehensive framework outlining the governance processes, voting mechanisms, and decision-making
                  procedures.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-xs text-muted-foreground">Governance Document</div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <CardTitle className="text-sm font-medium">Treasury Policy</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <StarOff className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
                <CardDescription className="text-xs">Last updated: May 2, 2025</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-xs text-muted-foreground">
                  Policy document detailing treasury management, fund allocation procedures, and financial controls.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-xs text-muted-foreground">Financial Document</div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <CardTitle className="text-sm font-medium">Member Handbook</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <StarOff className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
                <CardDescription className="text-xs">Last updated: April 10, 2025</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-xs text-muted-foreground">
                  Comprehensive guide for members covering roles, responsibilities, benefits, and participation
                  guidelines.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-xs text-muted-foreground">Membership Document</div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <CardTitle className="text-sm font-medium">Q1 2025 Financial Report</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <StarOff className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
                <CardDescription className="text-xs">Last updated: April 15, 2025</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-xs text-muted-foreground">
                  Quarterly financial report detailing treasury activity, asset allocation, and financial performance.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-xs text-muted-foreground">Financial Document</div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <CardTitle className="text-sm font-medium">Strategic Plan 2025-2026</CardTitle>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <StarOff className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
                <CardDescription className="text-xs">Last updated: March 20, 2025</CardDescription>
              </CardHeader>
              <CardContent className="pb-2">
                <p className="text-xs text-muted-foreground">
                  Strategic planning document outlining organizational goals, initiatives, and roadmap for the next two
                  years.
                </p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-xs text-muted-foreground">Planning Document</div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Download className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Share className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Document Folders</CardTitle>
              <CardDescription>Organized document collections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex items-center gap-3 rounded-md border p-3">
                  <Folder className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="font-medium">Legal Documents</p>
                    <p className="text-xs text-muted-foreground">8 documents</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Open
                  </Button>
                </div>
                <div className="flex items-center gap-3 rounded-md border p-3">
                  <Folder className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="font-medium">Governance</p>
                    <p className="text-xs text-muted-foreground">12 documents</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Open
                  </Button>
                </div>
                <div className="flex items-center gap-3 rounded-md border p-3">
                  <Folder className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="font-medium">Financial Reports</p>
                    <p className="text-xs text-muted-foreground">15 documents</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Open
                  </Button>
                </div>
                <div className="flex items-center gap-3 rounded-md border p-3">
                  <Folder className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="font-medium">Meeting Minutes</p>
                    <p className="text-xs text-muted-foreground">24 documents</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Open
                  </Button>
                </div>
                <div className="flex items-center gap-3 rounded-md border p-3">
                  <Folder className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="font-medium">Templates</p>
                    <p className="text-xs text-muted-foreground">6 documents</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Open
                  </Button>
                </div>
                <div className="flex items-center gap-3 rounded-md border p-3">
                  <Folder className="h-5 w-5 text-muted-foreground" />
                  <div className="flex-1">
                    <p className="font-medium">Project Documentation</p>
                    <p className="text-xs text-muted-foreground">18 documents</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    Open
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="gap-1">
                <Plus className="h-4 w-4" />
                Create Folder
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="legal">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <FileText className="h-10 w-10 text-muted-foreground" />
                <h3 className="text-lg font-medium">Legal Documents</h3>
                <p className="text-sm text-muted-foreground">View and manage legal documents for your organization</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="governance">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <FileText className="h-10 w-10 text-muted-foreground" />
                <h3 className="text-lg font-medium">Governance Documents</h3>
                <p className="text-sm text-muted-foreground">
                  View and manage governance documents for your organization
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <FileText className="h-10 w-10 text-muted-foreground" />
                <h3 className="text-lg font-medium">Document Templates</h3>
                <p className="text-sm text-muted-foreground">View and use document templates for your organization</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="shared">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <FileText className="h-10 w-10 text-muted-foreground" />
                <h3 className="text-lg font-medium">Shared Documents</h3>
                <p className="text-sm text-muted-foreground">View documents shared with you by other members</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Recent document activity and updates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Treasury Policy updated</p>
                <p className="text-sm text-muted-foreground">John Doe updated the Treasury Policy document</p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">New document created</p>
                <p className="text-sm text-muted-foreground">Jane Smith created "Q1 2025 Financial Report"</p>
                <p className="text-xs text-muted-foreground">Yesterday</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <Share className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Document shared</p>
                <p className="text-sm text-muted-foreground">
                  Alex Johnson shared "Strategic Plan 2025-2026" with 5 members
                </p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="rounded-full bg-primary/10 p-2">
                <FileText className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">Document approved</p>
                <p className="text-sm text-muted-foreground">"Governance Framework" was approved by the board</p>
                <p className="text-xs text-muted-foreground">3 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            View All Activity
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

