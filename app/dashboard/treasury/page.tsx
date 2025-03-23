import Link from "next/link"
import { ArrowDown, ArrowUp, Coins, CreditCard, DollarSign, Download, Plus, Wallet, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TreasuryPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Treasury</h1>
          <p className="text-muted-foreground">Manage your organization's funds and financial resources.</p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Link href="/dashboard/treasury/transfer">
            <Button variant="outline" className="gap-2">
              <CreditCard className="h-4 w-4" />
              Transfer
            </Button>
          </Link>
          <Link href="/dashboard/treasury/add-funds">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add Funds
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,685.00</div>
            <p className="text-xs text-muted-foreground">+$1,200 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Token Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">125,000 ACME</div>
            <p className="text-xs text-muted-foreground">$12,500 at current price</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Inflow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$3,240.00</div>
            <div className="flex items-center gap-1 text-xs text-green-500">
              <ArrowUp className="h-3 w-3" />
              <span>12% from last month</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Monthly Outflow</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,040.00</div>
            <div className="flex items-center gap-1 text-xs text-red-500">
              <ArrowDown className="h-3 w-3" />
              <span>8% from last month</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <Card className="md:col-span-4">
          <CardHeader>
            <CardTitle>Treasury Allocation</CardTitle>
            <CardDescription>Current allocation of treasury funds</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Operations</span>
                <span className="text-sm font-medium">40%</span>
              </div>
              <Progress value={40} className="h-2" />
              <p className="text-xs text-muted-foreground">$9,874.00</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Development</span>
                <span className="text-sm font-medium">30%</span>
              </div>
              <Progress value={30} className="h-2" />
              <p className="text-xs text-muted-foreground">$7,405.50</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Community</span>
                <span className="text-sm font-medium">20%</span>
              </div>
              <Progress value={20} className="h-2" />
              <p className="text-xs text-muted-foreground">$4,937.00</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Reserve</span>
                <span className="text-sm font-medium">10%</span>
              </div>
              <Progress value={10} className="h-2" />
              <p className="text-xs text-muted-foreground">$2,468.50</p>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/treasury/allocation">
              <Button variant="outline" size="sm">
                Adjust Allocation
              </Button>
            </Link>
          </CardFooter>
        </Card>
        <Card className="md:col-span-3">
          <CardHeader>
            <CardTitle>Connected Wallets</CardTitle>
            <CardDescription>Wallets connected to the treasury</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-md border p-2">
                <div className="flex items-center gap-2">
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Main Treasury</p>
                    <p className="text-xs text-muted-foreground">Ethereum</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">$15,420.00</p>
                  <p className="text-xs text-muted-foreground">0x1a2b...3c4d</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-md border p-2">
                <div className="flex items-center gap-2">
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Operations</p>
                    <p className="text-xs text-muted-foreground">Ethereum</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">$5,265.00</p>
                  <p className="text-xs text-muted-foreground">0x4d3c...2b1a</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-md border p-2">
                <div className="flex items-center gap-2">
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">Development</p>
                    <p className="text-xs text-muted-foreground">Solana</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">$4,000.00</p>
                  <p className="text-xs text-muted-foreground">Acme5...Xz9</p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Link href="/dashboard/treasury/wallets">
              <Button variant="outline" size="sm" className="gap-1">
                <Wallet className="h-4 w-4" />
                Connect Wallet
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="transactions">
        <TabsList>
          <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
          <TabsTrigger value="assets">Assets</TabsTrigger>
          <TabsTrigger value="reports">Financial Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="transactions" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Recent treasury transactions and activities</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Export
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-100 p-2">
                      <ArrowDown className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Membership Dues</p>
                      <p className="text-sm text-muted-foreground">May 15, 2025</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">+$1,200.00</p>
                    <p className="text-sm text-muted-foreground">12 transactions</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-red-100 p-2">
                      <ArrowUp className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Development Expenses</p>
                      <p className="text-sm text-muted-foreground">May 12, 2025</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-600">-$850.00</p>
                    <p className="text-sm text-muted-foreground">Contract payment</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-100 p-2">
                      <ArrowDown className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Grant Funding</p>
                      <p className="text-sm text-muted-foreground">May 10, 2025</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">+$5,000.00</p>
                    <p className="text-sm text-muted-foreground">Web3 Foundation</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-red-100 p-2">
                      <ArrowUp className="h-4 w-4 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium">Marketing Campaign</p>
                      <p className="text-sm text-muted-foreground">May 5, 2025</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-red-600">-$1,200.00</p>
                    <p className="text-sm text-muted-foreground">Social media ads</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-green-100 p-2">
                      <ArrowDown className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium">Token Sale</p>
                      <p className="text-sm text-muted-foreground">May 1, 2025</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">+$3,500.00</p>
                    <p className="text-sm text-muted-foreground">10,000 ACME tokens</p>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/treasury/transactions">
                <Button variant="outline" size="sm">
                  View All Transactions
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="assets" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Treasury Assets</CardTitle>
              <CardDescription>All assets held by the organization</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-5 gap-4 p-4 font-medium">
                    <div>Asset</div>
                    <div>Amount</div>
                    <div>Value (USD)</div>
                    <div>Allocation</div>
                    <div>Location</div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-5 gap-4 p-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                        <span>USD</span>
                      </div>
                      <div>$10,000.00</div>
                      <div>$10,000.00</div>
                      <div>40.5%</div>
                      <div>Bank Account</div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 p-4">
                      <div className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-muted-foreground"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2L19.5 15H4.5L12 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 22L4.5 15H19.5L12 22Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>ETH</span>
                      </div>
                      <div>5.2 ETH</div>
                      <div>$9,360.00</div>
                      <div>37.9%</div>
                      <div>Main Treasury</div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 p-4">
                      <div className="flex items-center gap-2">
                        <Coins className="h-4 w-4 text-muted-foreground" />
                        <span>ACME</span>
                      </div>
                      <div>125,000 ACME</div>
                      <div>$12,500.00</div>
                      <div>50.6%</div>
                      <div>Multiple Wallets</div>
                    </div>
                    <div className="grid grid-cols-5 gap-4 p-4">
                      <div className="flex items-center gap-2">
                        <svg
                          className="h-4 w-4 text-muted-foreground"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                          <path
                            d="M8 14L12 10M12 10L16 14M12 10V18"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M12 6V8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>SOL</span>
                      </div>
                      <div>75 SOL</div>
                      <div>$3,825.00</div>
                      <div>15.5%</div>
                      <div>Development Wallet</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/dashboard/treasury/assets">
                <Button variant="outline" size="sm">
                  Manage Assets
                </Button>
              </Link>
              <Link href="/dashboard/treasury/add-asset">
                <Button size="sm">Add Asset</Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Financial Reports</CardTitle>
              <CardDescription>Treasury reports and financial statements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-4 gap-4 p-4 font-medium">
                    <div>Report</div>
                    <div>Period</div>
                    <div>Generated</div>
                    <div></div>
                  </div>
                  <div className="divide-y">
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Monthly Treasury Report</span>
                      </div>
                      <div>April 2025</div>
                      <div>May 5, 2025</div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Quarterly Financial Statement</span>
                      </div>
                      <div>Q1 2025</div>
                      <div>April 15, 2025</div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Monthly Treasury Report</span>
                      </div>
                      <div>March 2025</div>
                      <div>April 5, 2025</div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-4">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span>Annual Financial Report</span>
                      </div>
                      <div>2024</div>
                      <div>February 28, 2025</div>
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/dashboard/treasury/reports">
                <Button variant="outline" size="sm">
                  View All Reports
                </Button>
              </Link>
              <Link href="/dashboard/treasury/generate-report">
                <Button size="sm">Generate Report</Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

