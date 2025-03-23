import Link from "next/link"
import { Check, Mail, Search, Shield, User, UserPlus, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MembersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Members</h1>
          <p className="text-muted-foreground">Manage your organization's members and roles.</p>
        </div>
        <Link href="/dashboard/members/invite">
          <Button className="gap-2">
            <UserPlus className="h-4 w-4" />
            Invite Members
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">+12 new members this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98</div>
            <p className="text-xs text-muted-foreground">76% of total members</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Governance Participation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72%</div>
            <p className="text-xs text-muted-foreground">Average voting participation</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-xl font-semibold tracking-tight">Member Directory</h2>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search members..." className="w-full rounded-md pl-8 md:w-[300px]" />
            </div>
            <Button variant="outline" size="sm">
              Filters
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Members</TabsTrigger>
            <TabsTrigger value="admins">Admins</TabsTrigger>
            <TabsTrigger value="contributors">Contributors</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <div className="rounded-md border">
                  <div className="grid grid-cols-6 gap-4 p-4 font-medium">
                    <div className="col-span-2">Member</div>
                    <div>Role</div>
                    <div>Joined</div>
                    <div>Status</div>
                    <div></div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-6 gap-4 p-4">
                      <div className="col-span-2 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted" />
                        <div>
                          <p className="font-medium">John Doe</p>
                          <p className="text-sm text-muted-foreground">john@example.com</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                          Admin
                        </span>
                      </div>
                      <div className="flex items-center text-sm">Jan 15, 2025</div>
                      <div className="flex items-center">
                        <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                          <Check className="h-3 w-3" />
                          Active
                        </span>
                      </div>
                      <div className="flex items-center justify-end">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 p-4">
                      <div className="col-span-2 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted" />
                        <div>
                          <p className="font-medium">Jane Smith</p>
                          <p className="text-sm text-muted-foreground">jane@example.com</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                          Contributor
                        </span>
                      </div>
                      <div className="flex items-center text-sm">Feb 3, 2025</div>
                      <div className="flex items-center">
                        <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                          <Check className="h-3 w-3" />
                          Active
                        </span>
                      </div>
                      <div className="flex items-center justify-end">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 p-4">
                      <div className="col-span-2 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted" />
                        <div>
                          <p className="font-medium">Alex Johnson</p>
                          <p className="text-sm text-muted-foreground">alex@example.com</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                          Admin
                        </span>
                      </div>
                      <div className="flex items-center text-sm">Jan 20, 2025</div>
                      <div className="flex items-center">
                        <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                          <Check className="h-3 w-3" />
                          Active
                        </span>
                      </div>
                      <div className="flex items-center justify-end">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 p-4">
                      <div className="col-span-2 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted" />
                        <div>
                          <p className="font-medium">Sarah Williams</p>
                          <p className="text-sm text-muted-foreground">sarah@example.com</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-800">
                          Contributor
                        </span>
                      </div>
                      <div className="flex items-center text-sm">Mar 5, 2025</div>
                      <div className="flex items-center">
                        <span className="flex items-center gap-1 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                          <Check className="h-3 w-3" />
                          Active
                        </span>
                      </div>
                      <div className="flex items-center justify-end">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-6 gap-4 p-4">
                      <div className="col-span-2 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted" />
                        <div>
                          <p className="font-medium">Michael Brown</p>
                          <p className="text-sm text-muted-foreground">michael@example.com</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                          Member
                        </span>
                      </div>
                      <div className="flex items-center text-sm">Apr 12, 2025</div>
                      <div className="flex items-center">
                        <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                          Inactive
                        </span>
                      </div>
                      <div className="flex items-center justify-end">
                        <Button variant="ghost" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">Showing 5 of 128 members</div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="admins">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <Users className="h-10 w-10 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Admin Members</h3>
                  <p className="text-sm text-muted-foreground">View and manage organization administrators</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="contributors">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <Users className="h-10 w-10 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Contributors</h3>
                  <p className="text-sm text-muted-foreground">View and manage organization contributors</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="pending">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center justify-center space-y-2 text-center">
                  <Users className="h-10 w-10 text-muted-foreground" />
                  <h3 className="text-lg font-medium">Pending Invitations</h3>
                  <p className="text-sm text-muted-foreground">View and manage pending member invitations</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Member Roles</CardTitle>
            <CardDescription>Manage member roles and permissions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-md border p-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <div>
                    <p className="font-medium">Admin</p>
                    <p className="text-xs text-muted-foreground">Full access to all organization settings</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">5 members</span>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-md border p-3">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-blue-600" />
                  <div>
                    <p className="font-medium">Contributor</p>
                    <p className="text-xs text-muted-foreground">Can create proposals and contribute to projects</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">42 members</span>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-md border p-3">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-yellow-600" />
                  <div>
                    <p className="font-medium">Member</p>
                    <p className="text-xs text-muted-foreground">
                      Can vote on proposals and participate in discussions
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">81 members</span>
                  <Button variant="outline" size="sm">
                    Edit
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/members/roles">
              <Button variant="outline" size="sm">
                Manage Roles
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Member Activity</CardTitle>
            <CardDescription>Recent member activity and engagement</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Governance Participation</span>
                <span className="text-sm font-medium">72%</span>
              </div>
              <Progress value={72} className="h-2" />
              <p className="text-xs text-muted-foreground">Percentage of members who voted in the last 5 proposals</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Forum Activity</span>
                <span className="text-sm font-medium">58%</span>
              </div>
              <Progress value={58} className="h-2" />
              <p className="text-xs text-muted-foreground">Percentage of members active in forum discussions</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Contribution Rate</span>
                <span className="text-sm font-medium">35%</span>
              </div>
              <Progress value={35} className="h-2" />
              <p className="text-xs text-muted-foreground">Percentage of members who have made contributions</p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/members/analytics">
              <Button variant="outline" size="sm">
                View Analytics
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Member Communication</CardTitle>
          <CardDescription>Send announcements and messages to members</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-md border p-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">Announcement: Quarterly Meeting</p>
                  <p className="text-xs text-muted-foreground">Sent on May 1, 2025</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">128 recipients</div>
            </div>
            <div className="flex items-center justify-between rounded-md border p-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">Governance Update: New Voting System</p>
                  <p className="text-xs text-muted-foreground">Sent on April 15, 2025</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">120 recipients</div>
            </div>
            <div className="flex items-center justify-between rounded-md border p-3">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="font-medium">Welcome to New Members</p>
                  <p className="text-xs text-muted-foreground">Sent on April 5, 2025</p>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">12 recipients</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/dashboard/members/communications">
            <Button variant="outline" size="sm">
              View All Communications
            </Button>
          </Link>
          <Link href="/dashboard/members/send-message">
            <Button size="sm" className="gap-1">
              <Mail className="h-4 w-4" />
              Send Message
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

