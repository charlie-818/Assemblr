import Link from "next/link"
import { Check, Clock, FileText, Plus, Vote, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GovernancePage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Governance</h1>
          <p className="text-muted-foreground">Manage proposals, voting, and governance settings.</p>
        </div>
        <Link href="/dashboard/governance/create">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Create Proposal
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Proposals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">2 require your vote</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Participation Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72%</div>
            <p className="text-xs text-muted-foreground">+5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Proposals Passed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">This year</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="active">
        <TabsList>
          <TabsTrigger value="active">Active Proposals</TabsTrigger>
          <TabsTrigger value="past">Past Proposals</TabsTrigger>
          <TabsTrigger value="drafts">Drafts</TabsTrigger>
        </TabsList>
        <TabsContent value="active" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Treasury Allocation Q2</CardTitle>
              <CardDescription>Proposal to allocate funds for Q2 2025 projects and operations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Ends in 3 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Vote className="h-4 w-4 text-muted-foreground" />
                  <span>128 votes</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Current Status</span>
                  <span className="text-sm font-medium">65%</span>
                </div>
                <Progress value={65} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>83 votes for</span>
                  <span>45 votes against</span>
                </div>
              </div>
              <div className="rounded-md bg-muted p-3">
                <p className="text-sm">
                  This proposal seeks to allocate $120,000 from the treasury for Q2 2025 projects, including $50,000 for
                  development, $30,000 for marketing, $25,000 for community initiatives, and $15,000 for operational
                  expenses.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/dashboard/governance/proposal/1">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </Link>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <X className="h-4 w-4" />
                  Against
                </Button>
                <Button size="sm" className="gap-1">
                  <Check className="h-4 w-4" />
                  For
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>New Member Onboarding Process</CardTitle>
              <CardDescription>Proposal to revise the member onboarding process</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Ends in 5 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Vote className="h-4 w-4 text-muted-foreground" />
                  <span>128 votes</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Current Status</span>
                  <span className="text-sm font-medium">42%</span>
                </div>
                <Progress value={42} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>54 votes for</span>
                  <span>74 votes against</span>
                </div>
              </div>
              <div className="rounded-md bg-muted p-3">
                <p className="text-sm">
                  This proposal suggests implementing a new member onboarding process that includes a mandatory
                  orientation session, a mentorship program, and a 30-day probationary period for new members.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/dashboard/governance/proposal/2">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </Link>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <X className="h-4 w-4" />
                  Against
                </Button>
                <Button size="sm" className="gap-1">
                  <Check className="h-4 w-4" />
                  For
                </Button>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Partnership with MetaDAO</CardTitle>
              <CardDescription>Proposal to form a strategic partnership with MetaDAO</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>Ends in 2 days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Vote className="h-4 w-4 text-muted-foreground" />
                  <span>128 votes</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Current Status</span>
                  <span className="text-sm font-medium">78%</span>
                </div>
                <Progress value={78} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>100 votes for</span>
                  <span>28 votes against</span>
                </div>
              </div>
              <div className="rounded-md bg-muted p-3">
                <p className="text-sm">
                  This proposal outlines a strategic partnership with MetaDAO to collaborate on joint projects, share
                  resources, and co-host community events. The partnership would involve a token swap and joint
                  governance on collaborative initiatives.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/dashboard/governance/proposal/3">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </Link>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <X className="h-4 w-4" />
                  Against
                </Button>
                <Button size="sm" className="gap-1">
                  <Check className="h-4 w-4" />
                  For
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="past" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Community Grant Program</CardTitle>
              <CardDescription>
                Proposal to establish a community grant program for open-source contributors
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                    Passed
                  </span>
                  <span>Ended 14 days ago</span>
                </div>
                <div className="flex items-center gap-2">
                  <Vote className="h-4 w-4 text-muted-foreground" />
                  <span>112 votes</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Final Result</span>
                  <span className="text-sm font-medium">82%</span>
                </div>
                <Progress value={82} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>92 votes for</span>
                  <span>20 votes against</span>
                </div>
              </div>
              <div className="rounded-md bg-muted p-3">
                <p className="text-sm">
                  This proposal established a $50,000 community grant program to fund open-source contributors working
                  on projects aligned with our organization's mission.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/governance/proposal/4">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Governance Parameter Updates</CardTitle>
              <CardDescription>Proposal to update voting thresholds and quorum requirements</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">Rejected</span>
                  <span>Ended 21 days ago</span>
                </div>
                <div className="flex items-center gap-2">
                  <Vote className="h-4 w-4 text-muted-foreground" />
                  <span>98 votes</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Final Result</span>
                  <span className="text-sm font-medium">35%</span>
                </div>
                <Progress value={35} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>34 votes for</span>
                  <span>64 votes against</span>
                </div>
              </div>
              <div className="rounded-md bg-muted p-3">
                <p className="text-sm">
                  This proposal suggested lowering the quorum requirement from 40% to 25% and reducing the approval
                  threshold for standard proposals from 60% to 51%.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/governance/proposal/5">
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="drafts" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tokenomics Revision</CardTitle>
              <CardDescription>Draft proposal to revise the organization's tokenomics model</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>Last edited 2 days ago</span>
                </div>
                <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                  Draft
                </span>
              </div>
              <div className="rounded-md bg-muted p-3">
                <p className="text-sm">
                  This draft proposal suggests revising our tokenomics model to introduce a staking mechanism, adjust
                  inflation rates, and implement a token burn program to enhance long-term sustainability.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/dashboard/governance/draft/1">
                <Button variant="outline" size="sm">
                  Edit Draft
                </Button>
              </Link>
              <Button size="sm">Submit Proposal</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contributor Rewards Program</CardTitle>
              <CardDescription>Draft proposal for a new contributor rewards program</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>Last edited 5 days ago</span>
                </div>
                <span className="rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                  Draft
                </span>
              </div>
              <div className="rounded-md bg-muted p-3">
                <p className="text-sm">
                  This draft outlines a comprehensive contributor rewards program that would recognize and compensate
                  community members for various contributions, including code, content, community management, and
                  governance participation.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/dashboard/governance/draft/2">
                <Button variant="outline" size="sm">
                  Edit Draft
                </Button>
              </Link>
              <Button size="sm">Submit Proposal</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Governance Settings</CardTitle>
          <CardDescription>Current governance parameters and settings</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Voting System</h4>
              <p className="text-sm text-muted-foreground">Token-weighted</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Quorum Requirement</h4>
              <p className="text-sm text-muted-foreground">40% of total voting power</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Proposal Threshold</h4>
              <p className="text-sm text-muted-foreground">5% of total supply</p>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Voting Period</h4>
              <p className="text-sm text-muted-foreground">7 days</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Approval Threshold</h4>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Standard Proposals</span>
                  <span>60%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Constitutional Changes</span>
                  <span>75%</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Emergency Actions</span>
                  <span>80%</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Timelock</h4>
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm">
                  <span>Standard Proposals</span>
                  <span>48 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Treasury Actions</span>
                  <span>72 hours</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Emergency Actions</span>
                  <span>24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Link href="/dashboard/governance/settings">
            <Button variant="outline" size="sm">
              Edit Settings
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

