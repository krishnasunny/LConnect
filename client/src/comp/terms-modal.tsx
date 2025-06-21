'use client'

import { useState } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

export function TermsModal() {
  const [accepted, setAccepted] = useState(false)
  const [open, setOpen] = useState(true)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-3xl bg-[#2A2424] text-white">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Legal Disclaimer</DialogTitle>
          <DialogDescription className="text-gray-300">
            The Bar Council of India does not permit solicitation of work and advertising by legal practitioners and advocates, either personally or through an agent. By accessing LetsPart.Org (our website) or any of its subdomains, the user acknowledges that:
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 text-sm text-gray-300">
          <p>• The user seeks information from LetsPart.Org and/or its subdomains, referred to as the 'website' hereinafter, for personal knowledge and use.</p>
          <p>• The website is not an agent of any advocate.</p>
          <p>• The user acknowledges that there has been no attempt by us to advertise or solicit work for any advocate.</p>
          <p>• Obtaining or downloading information from our website does not establish a client-attorney or client-practitioner relationship between the user and any advocate. Doing so also does not, by itself, establish a client-professional relationship between the user and the website.</p>
          <p>• None of the information on our website constitutes legal opinion or advice unless explicitly specified by the author and authorised by the website.</p>
          <p>• Our website utilizes cookies to enhance your user experience. By using our site, you agree to our cookie usage.</p>
          <p>• All information on our website is the intellectual property of LetsPart.Org or of the author, as the case may be.</p>
          <p>• Certain content on this website is AI-generated and intended solely for placeholder purposes during development. Please contact us for confirmation before relying on any information provided herein during this period.</p>
        </div>
        <div className="flex items-center space-x-2 pt-4">
          <Checkbox 
            id="terms" 
            checked={accepted} 
            onCheckedChange={(checked) => setAccepted(checked as boolean)}
          />
          <label htmlFor="terms" className="text-sm font-medium leading-none text-white">
            I accept the above.
          </label>
        </div>
        <Button 
          onClick={() => setOpen(false)} 
          disabled={!accepted}
          className="w-24 bg-gray-600 hover:bg-gray-700 text-white"
        >
          Agree
        </Button>
      </DialogContent>
    </Dialog>
  )
}

