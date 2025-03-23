"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Building, Edit, Loader2, Save, User, Vote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function UserProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [isSaving, setIsSaving] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    email: "john@example.com",
    bio: "Product manager with experience in blockchain and governance systems.",
    location: "San Francisco, CA",
    website: "https://johndoe.com",
    twitter: "@johndoe",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setIsSaving(true)
    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      setIsEditing(false)
    }, 1000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <Building className="h-6 w-6 text-primary" />
            <span className="text-lg font-display font-bold">Assemblr</span>
          </Link>
          <nav className="hidden md:flex gap-8">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              href="/dashboard/organization"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Organization
            </Link>
            <Link
              href="/dashboard/governance"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Governance
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/user/profile">
              <Button variant="ghost" size="sm" className="gap-2">
                <User className="h-4 w-4" />
                Profile
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center">
                      <User className="h-12 w-12 text-muted-foreground" />
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      className="absolute bottom-0 right-0 rounded-full h-8 w-8 bg-background"
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </div>
                  <h2 className="text-xl font-bold">{profileData.name}</h2>
                  <p className="text-sm text-muted-foreground mb-4">{profileData.email}</p>
                  <div className="w-full space-y-2 text-sm">
                    {profileData.location && (
                      <div className="flex items-center justify-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-muted-foreground"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span>{profileData.location}</span>
                      </div>
                    )}
                    {profileData.website && (
                      <div className="flex items-center justify-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-muted-foreground"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                          <path d="M2 12h20" />
                        </svg>
                        <a
                          href={profileData.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {profileData.website.replace(/^https?:\/\//, "")}
                        </a>
                      </div>
                    )}
                    {profileData.twitter && (
                      <div className="flex items-center justify-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-muted-foreground"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                        <a
                          href={`https://twitter.com/${profileData.twitter.replace("@", "")}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {profileData.twitter}
                        </a>
                      </div>
                    )}
                  </div>
                  <Separator className="my-4" />
                  <div className="grid grid-cols-3 gap-4 w-full text-center">
                    <div>
                      <p className="text-2xl font-bold">12</p>
                      <p className="text-xs text-muted-foreground">Proposals</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">48</p>
                      <p className="text-xs text-muted-foreground">Votes</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-xs text-muted-foreground">Organizations</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-2">
              <Tabs defaultValue="profile">
                <TabsList className="mb-4">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="activity">Activity</TabsTrigger>
                  <TabsTrigger value="organizations">Organizations</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="profile">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <div>
                        <CardTitle>Profile Information</CardTitle>
                        <CardDescription>Manage your public profile information</CardDescription>
                      </div>
                      {!isEditing ? (
                        <Button variant="outline" onClick={() => setIsEditing(true)}>
                          Edit Profile
                        </Button>
                      ) : (
                        <div className="flex gap-2">
                          <Button variant="outline" onClick={() => setIsEditing(false)}>
                            Cancel
                          </Button>
                          <Button onClick={handleSave} disabled={isSaving}>
                            {isSaving ? (
                              <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Saving...
                              </>
                            ) : (
                              <>
                                <Save className="mr-2 h-4 w-4" />
                                Save
                              </>
                            )}
                          </Button>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {isEditing ? (
                        <div className="space-y-4">
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="name">Full Name</Label>
                              <Input id="name" name="name" value={profileData.name} onChange={handleChange} />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                value={profileData.email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="bio">Bio</Label>
                            <Textarea id="bio" name="bio" rows={4} value={profileData.bio} onChange={handleChange} />
                          </div>
                          <div className="grid gap-4 md:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="location">Location</Label>
                              <Input
                                id="location"
                                name="location"
                                value={profileData.location}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="website">Website</Label>
                              <Input id="website" name="website" value={profileData.website} onChange={handleChange} />
                            </div>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="twitter">Twitter</Label>
                            <Input id="twitter" name="twitter" value={profileData.twitter} onChange={handleChange} />
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div>
                            <h3 className="text-sm font-medium text-muted-foreground">Bio</h3>
                            <p className="mt-1">{profileData.bio}</p>
                          </div>
                          <Separator />
                          <div className="grid gap-4 md:grid-cols-2">
                            <div>
                              <h3 className="text-sm font-medium text-muted-foreground">Full Name</h3>
                              <p className="mt-1">{profileData.name}</p>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                              <p className="mt-1">{profileData.email}</p>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                              <p className="mt-1">{profileData.location}</p>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium text-muted-foreground">Website</h3>
                              <p className="mt-1">
                                <a
                                  href={profileData.website}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  {profileData.website}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="activity">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                      <CardDescription>Your recent actions across all organizations</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <Vote className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">Voted on "Treasury Allocation Q2"</p>
                            <p className="text-sm text-muted-foreground">You voted in favor of the proposal</p>
                            <p className="text-xs text-muted-foreground">2 hours ago • Acme Organization</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                            </svg>
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">
                              Created proposal "Community Event Budget"
                            </p>
                            <p className="text-sm text-muted-foreground">Your proposal is now open for voting</p>
                            <p className="text-xs text-muted-foreground">Yesterday • Beta Project</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <div className="rounded-full bg-primary/10 p-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-primary"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                          </div>
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium leading-none">Invited 3 new members</p>
                            <p className="text-sm text-muted-foreground">You invited Jane, Alex, and Sarah to join</p>
                            <p className="text-xs text-muted-foreground">3 days ago • Acme Organization</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View All Activity
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="organizations">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Organizations</CardTitle>
                      <CardDescription>Organizations you're a member of</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between rounded-md border p-4">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center">
                              <Building className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <p className="font-medium">Acme Organization</p>
                              <p className="text-sm text-muted-foreground">Admin • Joined Jan 2025</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                        <div className="flex items-center justify-between rounded-md border p-4">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-md bg-blue-100 flex items-center justify-center">
                              <Building className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <p className="font-medium">Beta Project</p>
                              <p className="text-sm text-muted-foreground">Contributor • Joined Mar 2025</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                        <div className="flex items-center justify-between rounded-md border p-4">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-md bg-green-100 flex items-center justify-center">
                              <Building className="h-5 w-5 text-green-600" />
                            </div>
                            <div>
                              <p className="font-medium">Green Initiative DAO</p>
                              <p className="text-sm text-muted-foreground">Member • Joined Apr 2025</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link href="/dashboard/organizations/create" className="w-full">
                        <Button className="w-full">Create New Organization</Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="settings">
                  <Card>
                    <CardHeader>
                      <CardTitle>Account Settings</CardTitle>
                      <CardDescription>Manage your account preferences and security</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Email Notifications</h3>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="notify-proposals"
                              className="h-4 w-4 rounded border-gray-300"
                              defaultChecked
                            />
                            <Label htmlFor="notify-proposals" className="font-normal">
                              New proposals requiring your vote
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="notify-comments"
                              className="h-4 w-4 rounded border-gray-300"
                              defaultChecked
                            />
                            <Label htmlFor="notify-comments" className="font-normal">
                              Comments on your proposals
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="notify-results"
                              className="h-4 w-4 rounded border-gray-300"
                              defaultChecked
                            />
                            <Label htmlFor="notify-results" className="font-normal">
                              Proposal results
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <input type="checkbox" id="notify-digest" className="h-4 w-4 rounded border-gray-300" />
                            <Label htmlFor="notify-digest" className="font-normal">
                              Weekly activity digest
                            </Label>
                          </div>
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Security</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Password</p>
                              <p className="text-sm text-muted-foreground">Last changed 3 months ago</p>
                            </div>
                            <Button variant="outline">Change Password</Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Two-Factor Authentication</p>
                              <p className="text-sm text-muted-foreground">Not enabled</p>
                            </div>
                            <Button>Enable</Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Connected Wallets</p>
                              <p className="text-sm text-muted-foreground">1 wallet connected</p>
                            </div>
                            <Button variant="outline">Manage</Button>
                          </div>
                        </div>
                      </div>
                      <Separator />
                      <div className="space-y-2">
                        <h3 className="text-lg font-medium">Account Management</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Export Data</p>
                              <p className="text-sm text-muted-foreground">Download all your data</p>
                            </div>
                            <Button variant="outline">Export</Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium text-red-500">Delete Account</p>
                              <p className="text-sm text-muted-foreground">
                                Permanently delete your account and all data
                              </p>
                            </div>
                            <Button variant="destructive">Delete</Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Save Settings</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

