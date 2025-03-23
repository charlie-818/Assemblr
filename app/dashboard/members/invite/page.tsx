"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Plus, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function InviteMembersPage() {
  const [invites, setInvites] = useState([{ email: "", role: "" }])
  
  const addInvite = () => {
    setInvites([...invites, { email: "", role: "" }])
  }
  
  const removeInvite = (index: number) => {
    const newInvites = [...invites]
    newInvites.splice(index, 1)
    setInvites(newInvites)
  }
  
  const updateInvite = (index: number, field: string, value: string) => {
    const newInvites = [...invites]
    newInvites[index] = { ...newInvites[index], [field]: value }
    setInvites(newInvites)
  }
  
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/members">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invite Members</h1>
          <p className="text-muted-foreground">
            Invite new members to join your organization
          </p>
        </div>
      </div>
      
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Invite New Members</CardTitle>
              <CardDescription>
                Send invitations to join your organization
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {invites.map((invite, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-1 space-y-2">
                      <Label htmlFor={`email-${index}`}>Email Address</Label>
                      <Input
                        id={`email-${index}`}
                        type="email"
                        placeholder="member@example.com"
                        value={invite.email}
                        onChange={(e) => updateInvite(index, "email", e.target.value)}
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <Label htmlFor={`role-${index}`}>Role</Label>
                      <Select
                        value={invite.role}
                        onValueChange={(value) => updateInvite(index, "role", value)}
                      >
                        <SelectTrigger id={`role-${index}`}>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="admin">Admin</SelectItem>
                          <SelectItem value="contributor">Contributor</SelectItem>
                          <SelectItem value="member">Member</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    {invites.length > 1 && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="mt-8"
                        onClick={() => removeInvite(index)}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                <Button variant="outline" className="gap-1" onClick={addInvite}>
                  <Plus className="h-4 w-4" />
                  Add Another Invite
                </Button>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Invitation Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Add a personal message to your invitation"
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label>Invitation Settings</Label>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="require-approval" className="h-4 w-4 rounded border-gray-300" />
                    <Label htmlFor="require-approval" className="font-normal">
                      Require admin approval for new members
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="send-welcome" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                    <Label htmlFor="send-welcome" className="font-normal">
                      Send welcome message after approval
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="notify-members" className="h-4 w-4 rounded border-gray-300" />
                    <Label htmlFor="notify-members" className="font-normal">
                      Notify existing members about new joiners
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button className="gap-1">
                <Mail className="h-4 w-4" />
                Send Invitations
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Invitation Methods</CardTitle>
              <CardDescription>
                Different ways to invite members
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md border p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="font-medium">Email Invitation</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Send personalized email invitations to specific individuals.
                </p>
                <div className="pt-1">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    Current Method
                  </span>
                </div>
              </div>
              <div className="rounded-md border p-3 space-y-2">
                <div className="flex items-center gap-2">
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
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                  <span className="font-medium">Invitation Link</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Generate a shareable link that allows anyone to join.
                </p>
                <div className="pt-1">
                  <Button variant="outline" size="sm" className="w-full">
                    Generate Link
                  </Button>
                </div>
              </div>
              <div className="rounded-md border p-3 space-y-2">
                <div className="flex items-center gap-2">
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
                    className="h-4 w-4 text-muted-foreground"
                  >
                    <rect width="20" height\

