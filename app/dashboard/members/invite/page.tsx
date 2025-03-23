"use client"

import React, { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Plus, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
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
      
      <Card>
        <CardHeader>
          <CardTitle>Invite New Members</CardTitle>
          <CardDescription>
            Send invitations to join your organization
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="member@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Invitation Message</Label>
              <Textarea
                id="message"
                placeholder="Add a personal message"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Send Invitation</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

