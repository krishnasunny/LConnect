"use client"

import type React from "react"

import { useState } from "react"
import { MessageSquare, Phone, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function LawyerActions() {
  const [openDialog, setOpenDialog] = useState<string | null>(null)

  const closeDialog = () => setOpenDialog(null)

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Opinion Card */}
          <ActionCard
            icon={<MessageSquare className="h-8 w-8" />}
            title="Request an Opinion"
            description="Get expert legal advice on your specific situation"
            buttonText="Submit Request"
            onClick={() => setOpenDialog("opinion")}
          />

          {/* Call Card */}
          <ActionCard
            icon={<Phone className="h-8 w-8" />}
            title="Schedule a Call"
            description="Speak directly with the lawyer about your case"
            buttonText="Book Now"
            onClick={() => setOpenDialog("call")}
          />

          {/* Quote Card */}
          <ActionCard
            icon={<FileText className="h-8 w-8" />}
            title="Request a Quote"
            description="Get a free consultation and fee estimate"
            buttonText="Get Quote"
            onClick={() => setOpenDialog("quote")}
          />
        </div>
      </div>

      {/* Opinion Dialog */}
      <Dialog open={openDialog === "opinion"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Request a Legal Opinion</DialogTitle>
            <DialogDescription>Provide details about your case to receive an expert opinion.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="case-details">Case Details</Label>
              <Textarea
                id="case-details"
                placeholder="Please describe your legal situation in detail..."
                className="min-h-[120px]"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-[#75B59C] hover:bg-[#5a9a81]">
              Submit Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Call Dialog */}
      <Dialog open={openDialog === "call"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Schedule a Call</DialogTitle>
            <DialogDescription>Book a phone consultation with the lawyer.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="call-name">Your Name</Label>
              <Input id="call-name" placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="call-phone">Phone Number</Label>
              <Input id="call-phone" placeholder="Enter your phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="call-date">Preferred Date</Label>
              <Input id="call-date" type="date" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="call-time">Preferred Time</Label>
              <Input id="call-time" type="time" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="call-notes">Additional Notes</Label>
              <Textarea id="call-notes" placeholder="Brief description of your case..." className="min-h-[80px]" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-[#75B59C] hover:bg-[#5a9a81]">
              Book Call
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Quote Dialog */}
      <Dialog open={openDialog === "quote"} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Request a Quote</DialogTitle>
            <DialogDescription>Get a free consultation and fee estimate for your case.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="quote-name">Your Name</Label>
              <Input id="quote-name" placeholder="Enter your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quote-email">Email Address</Label>
              <Input id="quote-email" type="email" placeholder="Enter your email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quote-phone">Phone Number</Label>
              <Input id="quote-phone" placeholder="Enter your phone number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="case-type">Case Type</Label>
              <select
                id="case-type"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Select case type</option>
                <option value="divorce">Divorce</option>
                <option value="custody">Child Custody</option>
                <option value="property">Property Dispute</option>
                <option value="corporate">Corporate Matter</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quote-details">Case Details</Label>
              <Textarea
                id="quote-details"
                placeholder="Please provide details about your case..."
                className="min-h-[100px]"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-[#75B59C] hover:bg-[#5a9a81]">
              Request Quote
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  )
}

function ActionCard({
  icon,
  title,
  description,
  buttonText,
  onClick,
}: {
  icon: React.ReactNode
  title: string
  description: string
  buttonText: string
  onClick: () => void
}) {
  return (
    <div className="bg-white border border-gray-200 rounded-md p-6 shadow-sm hover:shadow-md transition-shadow group">
      <div className="flex flex-col h-full">
        <div className="text-[#75B59C] mb-4">{icon}</div>

        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-6 flex-grow">{description}</p>

        <Button
          onClick={onClick}
          className="w-full bg-[#1A2E35] hover:bg-[#2a3f47] text-white mt-auto group-hover:bg-[#75B59C] group-hover:text-white transition-colors"
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}

