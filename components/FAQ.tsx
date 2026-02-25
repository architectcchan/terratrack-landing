"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "Is this legal? Can I use software for cannabis sales?",
      a: "Absolutely. TerraTrack is a CRM for tracking business relationships and sales activities. We don't touch the plant, handle payments, or interact with METRC. If your business operates legally in your state, TerraTrack is a standard business tool — just like using Salesforce or HubSpot."
    },
    {
      q: "Do my reps need to download an app?",
      a: "No. TerraTrack is a web app that works in any mobile browser — Safari, Chrome, Firefox. No app store download needed. Reps bookmark it to their home screen and it works like a native app."
    },
    {
      q: "What if a rep leaves? Do we lose their data?",
      a: "Never. That's literally why TerraTrack exists. Every visit note, buyer preference, pricing agreement, and sample record stays with the account. When you reassign a territory to a new rep, they see the complete history from day one."
    },
    {
      q: "Can I import my existing accounts from a spreadsheet?",
      a: "Yes. You can import accounts via CSV or add them one at a time. We're also building integrations with LeafLink and Distru for automatic sync."
    },
    {
      q: "How is this different from LeafLink?",
      a: "LeafLink is an ordering marketplace — it handles the transaction. TerraTrack is a field sales CRM — it handles everything BEFORE and AFTER the transaction. The visits, the sample drops, the follow-ups, the relationship management. They're complementary, not competing."
    },
    {
      q: "What if I only have 1-2 reps?",
      a: "The Starter plan at $99/month covers a manager plus 2 reps — perfect for small brands. Most brands start here and upgrade as they grow."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-32 bg-light-slate">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-[40px] font-bold text-dark">Questions</h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-border-light rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
              >
                <span className="font-bold text-dark pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-gray transition-transform duration-300 shrink-0 ${openIndex === index ? "rotate-180" : ""}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-gray leading-relaxed border-t border-border-light pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
