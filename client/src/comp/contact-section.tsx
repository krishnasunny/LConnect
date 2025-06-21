"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section className="relative py-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&h=1000"
          alt="Marble background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold tracking-wider text-center mb-16">CONTACT US</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-wider mb-2">
                    NAME:
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-none h-12"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-wider mb-2">
                    EMAIL ADDRESS:
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-none h-12"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm uppercase tracking-wider mb-2">
                    SUBJECT:
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-none h-12"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-wider mb-2">
                    MESSAGE:
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-none min-h-[120px]"
                    required
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="border border-black px-8 py-3 uppercase tracking-wider text-sm hover:bg-black hover:text-white transition-colors"
                  >
                    Submit Message
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-end text-right">
            <div className="mb-8">
              <p className="text-[#75B59C] italic text-xl mb-4">Fee Free to get in touch with us.</p>
              <p className="text-gray-600">
                Please provide all necessary details so that we may get in touch with you faster.
              </p>
            </div>

            <div className="space-y-6 mt-8">
              <div>
                <h3 className="font-bold mb-2">OUR ADDRESS</h3>
                <p>Parel Street, The Grand Central Building 12/345</p>
                <p>Mumbai, 400001</p>
              </div>

              <div>
                <h3 className="font-bold mb-2">PHONE & EMAIL</h3>
                <p>Call us: +91- 9004534958</p>
                <p className="mt-2">paralegal@pm.me</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

