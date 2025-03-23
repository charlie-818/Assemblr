import { Bell, Building, Globe, Mail, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Manage your organization and account settings</p>
      </div>

      <Tabs defaultValue="organization">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="organization">Organization</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>

        <TabsContent value="organization" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Organization Settings</CardTitle>
              <CardDescription>Manage your organization's profile and settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Organization Profile</h3>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Organization Name</span>
                    <span className="text-sm text-muted-foreground">Acme Organization</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Organization Type</span>
                    <span className="text-sm text-muted-foreground">Non-profit</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Jurisdiction</span>
                    <span className="text-sm text-muted-foreground">Delaware, USA</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Website</span>
                    <span className="text-sm text-muted-foreground">acme-org.example.com</span>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Branding</h3>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="relative h-20 w-20 rounded-lg border bg-muted">
                      <Building className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 text-muted-foreground" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Organization Logo</p>
                      <p className="text-xs text-muted-foreground">Recommended size: 512x512px</p>
                      <Button variant="outline" size="sm">
                        Change Logo
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Color Scheme</p>
                    <div className="flex flex-wrap gap-2">
                      <div className="h-8 w-8 rounded-full bg-primary" title="Primary" />
                      <div className="h-8 w-8 rounded-full bg-secondary" title="Secondary" />
                      <div className="h-8 w-8 rounded-full bg-accent" title="Accent" />
                      <div className="h-8 w-8 rounded-full bg-muted" title="Muted" />
                      <Button variant="outline" size="sm" className="ml-2">
                        Customize
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Governance Settings</h3>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Governance Model</span>
                    <span className="text-sm text-muted-foreground">Hybrid DAO</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Voting System</span>
                    <span className="text-sm text-muted-foreground">Token-weighted</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Quorum Requirement</span>
                    <span className="text-sm text-muted-foreground">40% of total voting power</span>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      Edit Governance
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Manage third-party integrations and connections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-md border p-3">
                  <div className="flex items-center gap-3">
                    <Wallet className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Wallet Connection</p>
                      <p className="text-sm text-muted-foreground">Connect blockchain wallets</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
                <div className="flex items-center justify-between rounded-md border p-3">
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Website Integration</p>
                      <p className="text-sm text-muted-foreground">Connect to your website</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
                <div className="flex items-center justify-between rounded-md border p-3">
                  <div className="flex items-center gap-3">
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
                      className="h-5 w-5 text-muted-foreground"
                    >
                      <path d="M10.5 20H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H20a2 2 0 0 1 2 2v3" />
                      <circle cx="18" cy="18" r="3" />
                      <path d="M18 14v1" />
                      <path d="M18 21v1" />
                      <path d="M22 18h-1" />
                      <path d="M15 18h-1" />
                      <path d="m21 15-.88.88" />
                      <path d="M15.88 20.12 15 21" />
                      <path d="m21 21-.88-.88" />
                      <path d="M15.88 15.88 15 15" />
                    </svg>
                    <div>
                      <p className="font-medium">API Access</p>
                      <p className="text-sm text-muted-foreground">Manage API keys and access</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Add Integration
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="account" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Manage your personal account settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Profile Information</h3>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-full bg-muted" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium">Profile Picture</p>
                      <Button variant="outline" size="sm">
                        Change Picture
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Name</span>
                    <span className="text-sm text-muted-foreground">John Doe</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Email</span>
                    <span className="text-sm text-muted-foreground">john@example.com</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Role</span>
                    <span className="text-sm text-muted-foreground">Admin</span>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      Edit Profile
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Connected Wallets</h3>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Wallet className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Ethereum Wallet</p>
                        <p className="text-sm text-muted-foreground">0x1a2b...3c4d</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Disconnect
                    </Button>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      Connect Wallet
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Account Preferences</h3>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="dark-mode" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="dark-mode" className="text-sm font-medium">
                      Dark Mode
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="email-notifications"
                      className="h-4 w-4 rounded border-gray-300"
                      defaultChecked
                    />
                    <label htmlFor="email-notifications" className="text-sm font-medium">
                      Email Notifications
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="two-factor" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="two-factor" className="text-sm font-medium">
                      Two-Factor Authentication
                    </label>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security and authentication</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Password</h3>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex flex-col gap-1">
                    <span className="text-sm font-medium">Current Password</span>
                    <span className="text-sm text-muted-foreground">••••••••••••</span>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm">
                      Change Password
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Two-Factor Authentication</p>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Enable
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Login Sessions</h3>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Current Session</p>
                        <p className="text-sm text-muted-foreground">Chrome on Windows • IP: 192.168.1.1</p>
                        <p className="text-xs text-muted-foreground">Started: May 15, 2025, 10:30 AM</p>
                      </div>
                      <div className="rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                        Active
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Previous Session</p>
                        <p className="text-sm text-muted-foreground">Safari on macOS • IP: 192.168.1.2</p>
                        <p className="text-xs text-muted-foreground">Ended: May 14, 2025, 6:45 PM</p>
                      </div>
                      <div className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
                        Ended
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <Button variant="outline" size="sm" className="text-red-500">
                      Log Out All Devices
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">API Keys</h3>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Personal API Key</p>
                      <p className="text-sm text-muted-foreground">For personal integrations and development</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Generate Key
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy Settings</CardTitle>
              <CardDescription>Manage your privacy and data settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Data Privacy</h3>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="profile-visibility"
                      className="h-4 w-4 rounded border-gray-300"
                      defaultChecked
                    />
                    <label htmlFor="profile-visibility" className="text-sm font-medium">
                      Make my profile visible to other members
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="voting-privacy" className="h-4 w-4 rounded border-gray-300" />
                    <label htmlFor="voting-privacy" className="text-sm font-medium">
                      Keep my voting activity private
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="analytics" className="h-4 w-4 rounded border-gray-300" defaultChecked />
                    <label htmlFor="analytics" className="text-sm font-medium">
                      Allow anonymous usage data collection
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button variant="outline" size="sm" className="text-red-500">
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Settings</CardTitle>
              <CardDescription>Manage how and when you receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Email Notifications</h3>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Governance Updates</p>
                        <p className="text-sm text-muted-foreground">New proposals and voting reminders</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="governance-email"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                      <label htmlFor="governance-email" className="sr-only">
                        Governance Updates
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Treasury Activity</p>
                        <p className="text-sm text-muted-foreground">Fund transfers and financial updates</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="treasury-email"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                      <label htmlFor="treasury-email" className="sr-only">
                        Treasury Activity
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Member Updates</p>
                        <p className="text-sm text-muted-foreground">New members and role changes</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="member-email"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                      <label htmlFor="member-email" className="sr-only">
                        Member Updates
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">In-App Notifications</h3>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">All Notifications</p>
                        <p className="text-sm text-muted-foreground">Enable or disable all in-app notifications</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="all-notifications"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                      <label htmlFor="all-notifications" className="sr-only">
                        All Notifications
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Proposal Reminders</p>
                        <p className="text-sm text-muted-foreground">Reminders for proposals ending soon</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="proposal-notifications"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                      <label htmlFor="proposal-notifications" className="sr-only">
                        Proposal Reminders
                      </label>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Bell className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Document Updates</p>
                        <p className="text-sm text-muted-foreground">Notifications for document changes</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="document-notifications"
                        className="h-4 w-4 rounded border-gray-300"
                        defaultChecked
                      />
                      <label htmlFor="document-notifications" className="sr-only">
                        Document Updates
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg font-medium">Notification Schedule</h3>
                <div className="rounded-md border p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Digest Frequency</p>
                      <p className="text-sm text-muted-foreground">How often you receive notification digests</p>
                    </div>
                    <select className="rounded-md border px-3 py-1 text-sm">
                      <option>Real-time</option>
                      <option>Daily</option>
                      <option>Weekly</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Quiet Hours</p>
                      <p className="text-sm text-muted-foreground">Don't send notifications during these hours</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

