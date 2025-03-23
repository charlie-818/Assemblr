import Link from "next/link"
import { Building, Coins, FileText, Users, Vote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TreasuryChart } from "@/components/treasury-chart"
import { MemberActivityChart } from "@/components/member-activity-chart"
import { GovernanceActivityChart } from "@/components/governance-activity-chart"
import { ActivityFeed } from "@/components/activity-feed"
import { StatCard } from "@/components/stat-card"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back to your organization dashboard.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Treasury Balance"
          value="$24,685.00"
          change="+$1,200"
          changeText="from last month"
          icon={<Coins className="h-4 w-4 text-muted-foreground" />}
          href="/dashboard/treasury"
          linkText="View Treasury"
          chartData={[18, 22, 19, 23, 25, 28, 24]}
        />

        <StatCard
          title="Active Members"
          value="128"
          change="+12"
          changeText="new members this month"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
          href="/dashboard/members"
          linkText="View Members"
          chartData={[85, 90, 95, 100, 110, 115, 128]}
          chartColor="var(--chart-secondary)"
        />

        <StatCard
          title="Active Proposals"
          value="5"
          change="2"
          changeText="require your vote"
          icon={<Vote className="h-4 w-4 text-muted-foreground" />}
          href="/dashboard/governance"
          linkText="View Proposals"
          chartData={[2, 4, 3, 5, 4, 6, 5]}
          chartColor="var(--chart-tertiary)"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-6">
        <Card className="col-span-6 md:col-span-4">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div>
              <CardTitle>Governance Activity</CardTitle>
              <CardDescription>Recent proposals and voting activity</CardDescription>
            </div>
            <Tabs defaultValue="proposals" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="proposals">Proposals</TabsTrigger>
                <TabsTrigger value="chart">Analytics</TabsTrigger>
              </TabsList>
              <TabsContent value="proposals" className="space-y-4">
                <div className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Treasury Allocation Q2</span>
                        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                          Active
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">Ends in 3 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={65} className="h-2" />
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>83 votes for</span>
                      <span>45 votes against</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">New Member Onboarding Process</span>
                        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                          Active
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">Ends in 5 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={42} className="h-2" />
                      <span className="text-sm font-medium">42%</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>54 votes for</span>
                      <span>74 votes against</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">Partnership with MetaDAO</span>
                        <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                          Active
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">Ends in 2 days</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Progress value={78} className="h-2" />
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>100 votes for</span>
                      <span>28 votes against</span>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="chart">
                <div className="h-[300px] mt-4">
                  <GovernanceActivityChart />
                </div>
              </TabsContent>
            </Tabs>
          </CardHeader>
          <CardFooter>
            <Link href="/dashboard/governance">
              <Button variant="outline" size="sm">
                View All Proposals
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="col-span-6 md:col-span-2">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common tasks and actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <Link href="/dashboard/governance/create">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 group transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                >
                  <Vote className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  Create Proposal
                </Button>
              </Link>
              <Link href="/dashboard/members/invite">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 group transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                >
                  <Users className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  Invite Members
                </Button>
              </Link>
              <Link href="/dashboard/treasury/transfer">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 group transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                >
                  <Coins className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  Transfer Funds
                </Button>
              </Link>
              <Link href="/dashboard/documents/create">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 group transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                >
                  <FileText className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  Create Document
                </Button>
              </Link>
              <Link href="/dashboard/organization/edit">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2 group transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
                >
                  <Building className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
                  Edit Organization
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <Card className="col-span-12 md:col-span-8">
          <CardHeader>
            <CardTitle>Treasury Overview</CardTitle>
            <CardDescription>Financial activity and balance history</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <TreasuryChart />
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              Download Report
            </Button>
            <Link href="/dashboard/treasury">
              <Button size="sm">Manage Treasury</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="col-span-12 md:col-span-4">
          <CardHeader>
            <CardTitle>Member Activity</CardTitle>
            <CardDescription>Recent member engagement</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <MemberActivityChart />
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/members">
              <Button variant="outline" size="sm" className="w-full">
                View All Members
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div>
        <Tabs defaultValue="activity">
          <TabsList>
            <TabsTrigger value="activity">Recent Activity</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest actions and updates in your organization</CardDescription>
              </CardHeader>
              <CardContent>
                <ActivityFeed />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Organization Analytics</CardTitle>
                <CardDescription>Key metrics and performance indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Member Growth</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px]">
                        {/* Member Growth Chart would go here */}
                        <div className="h-full flex items-center justify-center border rounded-md">
                          <p className="text-muted-foreground">Member growth visualization</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Proposal Success Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[200px]">
                        {/* Proposal Success Chart would go here */}
                        <div className="h-full flex items-center justify-center border rounded-md">
                          <p className="text-muted-foreground">Proposal success visualization</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

