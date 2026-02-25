"use client";

import { motion } from "motion/react";

export default function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Add your accounts",
      desc: "Import your dispensary list or add stores one by one. We auto-populate addresses and details."
    },
    {
      num: "2",
      title: "Hit the field",
      desc: "Visit stores, drop samples, log everything in seconds from your phone."
    },
    {
      num: "3",
      title: "Let Trova work",
      desc: "Smart alerts tell you when to follow up, when to reorder, and which accounts need attention."
    },
    {
      num: "4",
      title: "Close more deals",
      desc: "Your pipeline is visible. Your team is accountable. No sale falls through the cracks."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-32 bg-light-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-[40px] font-bold text-dark">Up and running in under 10 minutes</h2>
        </motion.div>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-slate-300 z-0"></div>
          
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center md:items-start md:text-left"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg border-4 border-light-slate">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{step.title}</h3>
                <p className="text-slate-gray leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
