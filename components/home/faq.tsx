"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "@/lib/faqdata";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="bg-white p-8 md:p-24">
        <h1 className="text-2xl md:text-4xl font-bold mb-8 text-gray-800">FAQ</h1>
        
        <div className="space-y-4 max-w-8xl mx-auto p-2">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-lg"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex justify-between items-center p-4 text-left"
              >
                <span className="text-lg font-medium text-gray-700">
                  {index + 1}. {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="h-6 w-6 text-teal-500" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-gray-400" />
                )}
              </button>
              
              {openIndex === index && faq.answer && (
                <div className="p-4 pt-0 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
  );
}
