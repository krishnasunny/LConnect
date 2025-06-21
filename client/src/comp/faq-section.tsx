'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: "How does LetsPart select its lawyers?",
    answer: "At LetsPart, we personally meet and verify each lawyer multiple times. We have a rigorous selection process that ensures only the most qualified and dedicated lawyers are part of our network."
  },
  {
    question: "What types of legal cases does LetsPart handle?",
    answer: "LetsPart specializes in family law cases. Our lawyers are experts in areas such as divorce, child custody, alimony, and other family-related legal matters."
  },
  {
    question: "How much does it cost to use LetsPart's services?",
    answer: "The cost varies depending on the complexity of your case and the lawyer you choose. We strive to provide transparent pricing and help negotiate fair fees with our lawyers."
  },
  {
    question: "Can I change my lawyer if I'm not satisfied?",
    answer: "Yes, we understand that sometimes the client-lawyer fit isn't perfect. If you're not satisfied, we'll work with you to find a more suitable lawyer from our network."
  },
  {
    question: "How long does the process usually take?",
    answer: "The duration of legal processes can vary greatly depending on the nature and complexity of your case. Our litigation managers will provide you with a realistic timeline based on your specific situation."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="subtitle">GET ANSWERS</span>
          <h2 className="heading-xl mt-4">FREQUENTLY ASKED QUESTIONS</h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-6 bg-white hover:bg-gray-50 transition-colors duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <span className="heading-md">{item.question}</span>
                <ChevronDown
                  className={cn(
                    "w-6 h-6 transition-transform duration-300",
                    openIndex === index ? "transform rotate-180" : ""
                  )}
                />
              </button>
              <div
                className={cn(
                  "bg-white overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96 p-6" : "max-h-0"
                )}
              >
                <p className="text-gray-600 tracking-wide">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

