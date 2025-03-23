"use client"

import { useState } from "react"
import Link from "next/link"
import { Calendar, Check, Clock, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar as CalendarComponent } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function CreateProposalPage() {
  const [date, setDate] = useState<Date | undefined>(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000))

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Create Proposal</h1>
        <p className="text-muted-foreground">Create a new governance proposal for the organization.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Proposal Details</CardTitle>
              <CardDescription>Provide the details for your governance proposal</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Proposal Title</Label>
                <Input id="title" placeholder="Enter a clear, descriptive title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="summary">Summary</Label>
                <Textarea
                  id="summary"
                  placeholder="Provide a brief summary of your proposal (1-2 sentences)"
                  className="min-h-[80px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description</Label>
                <Textarea
                  id="description"
                  placeholder="Provide a detailed description of your proposal, including background, rationale, and expected outcomes"
                  className="min-h-[200px]"
                />
              </div>
              <div className="space-y-2">
                <Label>Proposal Type</Label>
                <RadioGroup defaultValue="standard">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="font-normal">
                      Standard Proposal
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="treasury" id="treasury" />
                    <Label htmlFor="treasury" className="font-normal">
                      Treasury Action
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="parameter" id="parameter" />
                    <Label htmlFor="parameter" className="font-normal">
                      Parameter Change
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="membership" id="membership" />
                    <Label htmlFor="membership" className="font-normal">
                      Membership Decision
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="governance">Governance</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="development">Development</SelectItem>
                      <SelectItem value="community">Community</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Voting End Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left font-normal">
                        <Calendar className="mr-2 h-4 w-4" />
                        {date ? date.toLocaleDateString() : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <CalendarComponent mode="single" selected={date} onSelect={setDate} initialFocus />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Voting Options</Label>
                <RadioGroup defaultValue="standard">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="standard" id="standard-voting" />
                    <Label htmlFor="standard-voting" className="font-normal">
                      Standard (For/Against)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="multiple" id="multiple-voting" />
                    <Label htmlFor="multiple-voting" className="font-normal">
                      Multiple Choice
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ranked" id="ranked-voting" />
                    <Label htmlFor="ranked-voting" className="font-normal">
                      Ranked Choice
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Save as Draft</Button>
              <Button>Submit Proposal</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Proposal Guidelines</CardTitle>
              <CardDescription>Tips for creating effective proposals</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md bg-muted p-3">
                <h3 className="mb-2 font-medium">What makes a good proposal?</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Clear, specific title and description</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Well-defined problem and solution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Consideration of alternatives</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Clear implementation plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Transparent about costs and resources</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-2 rounded-md border p-3">
                <Info className="h-5 w-5 text-blue-500" />
                <div className="text-sm">
                  <p className="font-medium">Proposal Requirements</p>
                  <p className="text-muted-foreground">
                    You need at least 5% of the total token supply to submit a proposal.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-md border p-3">
                <Clock className="h-5 w-5 text-yellow-500" />
                <div className="text-sm">
                  <p className="font-medium">Voting Period</p>
                  <p className="text-muted-foreground">
                    Standard proposals have a 7-day voting period. Treasury actions require 72 hours timelock.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Governance Process</CardTitle>
              <CardDescription>How proposals move through governance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Draft</p>
                    <p className="text-xs text-muted-foreground">Create and refine your proposal</p>
                  </div>
                </div>
                <div className="ml-3.5 h-6 w-px bg-border" />
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Discussion</p>
                    <p className="text-xs text-muted-foreground">Community feedback and amendments</p>
                  </div>
                </div>
                <div className="ml-3.5 h-6 w-px bg-border" />
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Voting</p>
                    <p className="text-xs text-muted-foreground">Members vote on the proposal</p>
                  </div>
                </div>
                <div className="ml-3.5 h-6 w-px bg-border" />
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    4
                  </div>
                  <div>
                    <p className="font-medium">Implementation</p>
                    <p className="text-xs text-muted-foreground">Approved proposals are executed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need Help?</CardTitle>
              <CardDescription>Resources for proposal creation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col gap-2">
                <Link href="/dashboard/governance/templates" className="text-sm text-primary hover:underline">
                  View proposal templates
                </Link>
                <Link href="/dashboard/governance/examples" className="text-sm text-primary hover:underline">
                  See successful proposal examples
                </Link>
                <Link href="/dashboard/governance/faq" className="text-sm text-primary hover:underline">
                  Governance FAQ
                </Link>
                <Button variant="outline" size="sm" className="mt-2 w-full">
                  Request Proposal Review
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

