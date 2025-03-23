"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Check, CreditCard, Info, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AddFundsPage() {
  const [method, setMethod] = useState("crypto")

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Link href="/dashboard/treasury">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Add Funds</h1>
          <p className="text-muted-foreground">Add funds to your organization's treasury</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Add Funds to Treasury</CardTitle>
              <CardDescription>Choose a method to add funds to your organization's treasury</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="crypto" onValueChange={setMethod}>
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="crypto">Cryptocurrency</TabsTrigger>
                  <TabsTrigger value="fiat">Fiat Currency</TabsTrigger>
                  <TabsTrigger value="token">Organization Token</TabsTrigger>
                </TabsList>
                <TabsContent value="crypto" className="space-y-6 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="crypto-asset">Select Asset</Label>
                    <Select>
                      <SelectTrigger id="crypto-asset">
                        <SelectValue placeholder="Select cryptocurrency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="eth">Ethereum (ETH)</SelectItem>
                        <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
                        <SelectItem value="usdc">USD Coin (USDC)</SelectItem>
                        <SelectItem value="sol">Solana (SOL)</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="crypto-amount">Amount</Label>
                    <div className="flex gap-2">
                      <Input id="crypto-amount" type="number" placeholder="0.00" />
                      <Select defaultValue="eth">
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="ETH" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="eth">ETH</SelectItem>
                          <SelectItem value="btc">BTC</SelectItem>
                          <SelectItem value="usdc">USDC</SelectItem>
                          <SelectItem value="sol">SOL</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="crypto-wallet">Destination Wallet</Label>
                    <Select>
                      <SelectTrigger id="crypto-wallet">
                        <SelectValue placeholder="Select wallet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="main">Main Treasury (0x1a2b...3c4d)</SelectItem>
                        <SelectItem value="operations">Operations (0x4d3c...2b1a)</SelectItem>
                        <SelectItem value="development">Development (Acme5...Xz9)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="rounded-md bg-muted p-3">
                    <div className="flex items-start gap-2">
                      <Info className="mt-0.5 h-4 w-4 text-blue-500" />
                      <div className="text-sm">
                        <p className="font-medium">Transfer Instructions</p>
                        <p className="text-muted-foreground">
                          Send your cryptocurrency to the wallet address shown below. Funds will be credited to the
                          treasury once the transaction is confirmed on the blockchain.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="wallet-address">Wallet Address</Label>
                    <div className="flex gap-2">
                      <Input id="wallet-address" value="0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t" readOnly />
                      <Button variant="outline" size="icon">
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
                          className="h-4 w-4"
                        >
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="fiat" className="space-y-6 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="fiat-currency">Currency</Label>
                    <Select>
                      <SelectTrigger id="fiat-currency">
                        <SelectValue placeholder="Select currency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usd">US Dollar (USD)</SelectItem>
                        <SelectItem value="eur">Euro (EUR)</SelectItem>
                        <SelectItem value="gbp">British Pound (GBP)</SelectItem>
                        <SelectItem value="jpy">Japanese Yen (JPY)</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fiat-amount">Amount</Label>
                    <div className="flex gap-2">
                      <Input id="fiat-amount" type="number" placeholder="0.00" />
                      <Select defaultValue="usd">
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="USD" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usd">USD</SelectItem>
                          <SelectItem value="eur">EUR</SelectItem>
                          <SelectItem value="gbp">GBP</SelectItem>
                          <SelectItem value="jpy">JPY</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Payment Method</Label>
                    <RadioGroup defaultValue="card">
                      <div className="flex items-center space-x-2 rounded-md border p-3">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center gap-2 font-normal">
                          <CreditCard className="h-4 w-4" />
                          Credit/Debit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 rounded-md border p-3">
                        <RadioGroupItem value="bank" id="bank" />
                        <Label htmlFor="bank" className="flex items-center gap-2 font-normal">
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
                            className="h-4 w-4"
                          >
                            <rect width="20" height="14" x="2" y="5" rx="2" />
                            <line x1="2" x2="22" y1="10" y2="10" />
                          </svg>
                          Bank Transfer
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fiat-allocation">Allocation</Label>
                    <Select>
                      <SelectTrigger id="fiat-allocation">
                        <SelectValue placeholder="Select allocation" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="main">Main Treasury</SelectItem>
                        <SelectItem value="operations">Operations</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="community">Community</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </TabsContent>
                <TabsContent value="token" className="space-y-6 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="token-amount">Amount</Label>
                    <div className="flex gap-2">
                      <Input id="token-amount" type="number" placeholder="0.00" />
                      <Select defaultValue="acme">
                        <SelectTrigger className="w-[100px]">
                          <SelectValue placeholder="ACME" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="acme">ACME</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="token-source">Source</Label>
                    <Select>
                      <SelectTrigger id="token-source">
                        <SelectValue placeholder="Select source" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mint">Mint New Tokens</SelectItem>
                        <SelectItem value="transfer">Transfer Existing Tokens</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="token-wallet">Destination Wallet</Label>
                    <Select>
                      <SelectTrigger id="token-wallet">
                        <SelectValue placeholder="Select wallet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="main">Main Treasury (0x1a2b...3c4d)</SelectItem>
                        <SelectItem value="operations">Operations (0x4d3c...2b1a)</SelectItem>
                        <SelectItem value="development">Development (Acme5...Xz9)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="rounded-md bg-muted p-3">
                    <div className="flex items-start gap-2">
                      <Info className="mt-0.5 h-4 w-4 text-blue-500" />
                      <div className="text-sm">
                        <p className="font-medium">Token Information</p>
                        <p className="text-muted-foreground">
                          ACME is your organization's governance token. Minting new tokens requires a governance
                          proposal approval. Transferring existing tokens can be done directly.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button disabled={method === "crypto"}>
                {method === "crypto" ? "Waiting for Transfer" : "Add Funds"}
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
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
                    <p className="text-xs text-muted-foreground">Acme5...Xz9</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full gap-1">
                <Wallet className="h-4 w-4" />
                Connect New Wallet
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Funding Guidelines</CardTitle>
              <CardDescription>Best practices for treasury management</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-md bg-muted p-3">
                <h3 className="mb-2 font-medium">Treasury Best Practices</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Diversify assets to reduce risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Maintain adequate operational reserves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Document all transactions for transparency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-green-600" />
                    <span>Use multi-sig wallets for security</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-2 rounded-md border p-3">
                <Info className="h-5 w-5 text-blue-500" />
                <div className="text-sm">
                  <p className="font-medium">Need Help?</p>
                  <p className="text-muted-foreground">
                    Contact our support team for assistance with treasury management.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

