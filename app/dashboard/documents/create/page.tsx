"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, FileText, Info, Save } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function CreateDocumentPage() {
  const [documentType, setDocumentType] = useState("blank")

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/documents">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Create Document</h1>
          <p className="text-muted-foreground">Create a new document for your organization</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Document Details</CardTitle>
              <CardDescription>Enter the details for your new document</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Document Title</Label>
                <Input id="title" placeholder="Enter document title" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter a brief description of this document"
                  className="min-h-[80px]"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="legal">Legal</SelectItem>
                      <SelectItem value="governance">Governance</SelectItem>
                      <SelectItem value="financial">Financial</SelectItem>
                      <SelectItem value="membership">Membership</SelectItem>
                      <SelectItem value="operations">Operations</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="visibility">Visibility</Label>
                  <Select defaultValue="organization">
                    <SelectTrigger id="visibility">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="private">Private (Only Me)</SelectItem>
                      <SelectItem value="restricted">Restricted (Select Members)</SelectItem>
                      <SelectItem value="organization">Organization (All Members)</SelectItem>
                      <SelectItem value="public">Public</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Document Content</Label>
                <Tabs defaultValue="blank" onValueChange={setDocumentType}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="blank">Blank Document</TabsTrigger>
                    <TabsTrigger value="template">Use Template</TabsTrigger>
                    <TabsTrigger value="upload">Upload File</TabsTrigger>
                  </TabsList>
                  <TabsContent value="blank" className="space-y-4 pt-4">
                    <Textarea placeholder="Start typing your document content here..." className="min-h-[300px]" />
                  </TabsContent>
                  <TabsContent value="template" className="space-y-4 pt-4">
                    <div className="space-y-2">
                      <Label htmlFor="template">Select Template</Label>
                      <Select>
                        <SelectTrigger id="template">
                          <SelectValue placeholder="Choose a template" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bylaws">Organization Bylaws</SelectItem>
                          <SelectItem value="proposal">Proposal Template</SelectItem>
                          <SelectItem value="minutes">Meeting Minutes</SelectItem>
                          <SelectItem value="policy">Policy Document</SelectItem>
                          <SelectItem value="report">Financial Report</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="rounded-md bg-muted p-3">
                      <div className="flex items-start gap-2">
                        <Info className="mt-0.5 h-4 w-4 text-blue-500" />
                        <div className="text-sm">
                          <p className="font-medium">Template Information</p>
                          <p className="text-muted-foreground">
                            Select a template to pre-populate your document with a standardized structure. You can
                            customize the content after selecting a template.
                          </p>
                        </div>
                      </div>
                    </div>
                    <Textarea
                      placeholder="Template content will appear here after selection..."
                      className="min-h-[200px]"
                      disabled
                    />
                  </TabsContent>
                  <TabsContent value="upload" className="space-y-4 pt-4">
                    <div className="flex flex-col items-center justify-center gap-4 rounded-md border border-dashed p-8">
                      <FileText className="h-8 w-8 text-muted-foreground" />
                      <div className="space-y-1 text-center">
                        <p className="text-sm font-medium">Drag and drop your file here</p>
                        <p className="text-xs text-muted-foreground">
                          Supports PDF, DOCX, TXT, and Markdown files up to 10MB
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Browse Files
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              <div className="space-y-2">
                <Label>Document Settings</Label>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="versioning" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                    <Label htmlFor="versioning" className="font-normal">
                      Enable version history
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="comments" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                    <Label htmlFor="comments" className="font-normal">
                      Allow comments
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="approval" className="h-4 w-4 rounded border-gray-300" />
                    <Label htmlFor="approval" className="font-normal">
                      Require approval before publishing
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button className="gap-1">
                <Save className="h-4 w-4" />
                {documentType === "upload" ? "Upload Document" : "Save Document"}
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Document Guidelines</CardTitle>
              <CardDescription>Tips for creating effective documents</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md bg-muted p-3">
                <h3 className="mb-2 font-medium">Best Practices</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Use clear, concise language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Include a descriptive title and summary</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Organize content with headings and sections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Use consistent formatting and style</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Include version information and dates</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-2 rounded-md border p-3">
                <Info className="h-5 w-5 text-blue-500" />
                <div className="text-sm">
                  <p className="font-medium">Document Templates</p>
                  <p className="text-muted-foreground">
                    Use templates to ensure consistency and save time when creating common document types.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Document Workflow</CardTitle>
              <CardDescription>How documents move through your organization</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Draft</p>
                    <p className="text-xs text-muted-foreground">Create and edit your document</p>
                  </div>
                </div>
                <div className="ml-3.5 h-6 w-px bg-border" />
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Review</p>
                    <p className="text-xs text-muted-foreground">Share for feedback and comments</p>
                  </div>
                </div>
                <div className="ml-3.5 h-6 w-px bg-border" />
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Approval</p>
                    <p className="text-xs text-muted-foreground">Get necessary approvals</p>
                  </div>
                </div>
                <div className="ml-3.5 h-6 w-px bg-border" />
                <div className="flex items-center gap-3">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    4
                  </div>
                  <div>
                    <p className="font-medium">Publication</p>
                    <p className="text-xs text-muted-foreground">Publish to the organization</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

