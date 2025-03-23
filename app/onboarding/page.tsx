"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Building, Check, ChevronRight, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function OnboardingPage() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    mission: "",
    website: "",
    size: "",
    logo: null,
    inviteMembers: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    } else {
      setIsLoading(true)
      // Simulate completion
      setTimeout(() => {
        setIsLoading(false)
        router.push("/dashboard")
      }, 1500)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Building className="h-6 w-6 text-primary" />
            <span className="text-lg font-display font-bold">Assemblr</span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Step {currentStep} of 3</span>
            <div className="flex gap-1">
              {[1, 2, 3].map((step) => (
                <div
                  key={step}
                  className={`h-2 w-8 rounded-full ${
                    step === currentStep ? "bg-primary" : step < currentStep ? "bg-primary/50" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4 md:p-8">
        <Card className="w-full max-w-2xl">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">
              {currentStep === 1 && "Tell us about your organization"}
              {currentStep === 2 && "Customize your organization"}
              {currentStep === 3 && "Invite team members"}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && "Let's set up your organization profile"}
              {currentStep === 2 && "Add your branding and customize settings"}
              {currentStep === 3 && "Invite colleagues to join your organization"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mission">Mission Statement</Label>
                  <Textarea
                    id="mission"
                    name="mission"
                    placeholder="Describe your organization's mission and purpose"
                    rows={4}
                    value={formData.mission}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website">Website (optional)</Label>
                  <Input
                    id="website"
                    name="website"
                    placeholder="https://example.com"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="size">Organization Size</Label>
                  <select
                    id="size"
                    name="size"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    value={formData.size}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select size
                    </option>
                    <option value="1-10">1-10 members</option>
                    <option value="11-50">11-50 members</option>
                    <option value="51-200">51-200 members</option>
                    <option value="201-500">201-500 members</option>
                    <option value="501+">501+ members</option>
                  </select>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="logo">Organization Logo</Label>
                  <div className="flex items-center gap-4">
                    <div className="h-20 w-20 rounded-lg border flex items-center justify-center bg-muted">
                      <Building className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <Button variant="outline" type="button">
                      Upload Logo
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Recommended size: 512x512px. Max file size: 5MB.</p>
                </div>
                <div className="space-y-2">
                  <Label>Color Theme</Label>
                  <div className="flex flex-wrap gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary border-2 border-primary ring-2 ring-offset-2 cursor-pointer" />
                    <div className="h-10 w-10 rounded-full bg-blue-500 border border-muted cursor-pointer" />
                    <div className="h-10 w-10 rounded-full bg-green-500 border border-muted cursor-pointer" />
                    <div className="h-10 w-10 rounded-full bg-purple-500 border border-muted cursor-pointer" />
                    <div className="h-10 w-10 rounded-full bg-orange-500 border border-muted cursor-pointer" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Governance Settings</Label>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="token-voting"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                      <Label htmlFor="token-voting" className="font-normal">
                        Enable token-weighted voting
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="multi-sig"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                      <Label htmlFor="multi-sig" className="font-normal">
                        Enable multi-signature treasury
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="checkbox" id="public-proposals" className="h-4 w-4 rounded border-gray-300" />
                      <Label htmlFor="public-proposals" className="font-normal">
                        Allow public proposal submissions
                      </Label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="inviteMembers">Invite Members</Label>
                  <Textarea
                    id="inviteMembers"
                    name="inviteMembers"
                    placeholder="Enter email addresses separated by commas"
                    rows={4}
                    value={formData.inviteMembers}
                    onChange={handleChange}
                  />
                  <p className="text-xs text-muted-foreground">
                    Team members will receive an email invitation to join your organization.
                  </p>
                </div>
                <div className="space-y-2">
                  <Label>Default Member Role</Label>
                  <div className="grid gap-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="role-member"
                        name="role"
                        className="h-4 w-4 border-gray-300"
                        defaultChecked
                      />
                      <Label htmlFor="role-member" className="font-normal">
                        Member (can vote on proposals)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="role-contributor" name="role" className="h-4 w-4 border-gray-300" />
                      <Label htmlFor="role-contributor" className="font-normal">
                        Contributor (can create proposals and vote)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input type="radio" id="role-admin" name="role" className="h-4 w-4 border-gray-300" />
                      <Label htmlFor="role-admin" className="font-normal">
                        Admin (full access to organization settings)
                      </Label>
                    </div>
                  </div>
                </div>
                <div className="rounded-md bg-muted p-4 flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">You're almost ready!</p>
                    <p className="text-sm text-muted-foreground">
                      After completing this step, you'll be taken to your organization dashboard where you can start
                      managing your organization.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={handleBack} disabled={currentStep === 1}>
              Back
            </Button>
            <Button onClick={handleNext} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Setting up...
                </>
              ) : currentStep === 3 ? (
                "Complete Setup"
              ) : (
                <>
                  Continue
                  <ChevronRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}

