"use client";

import { motion } from "motion/react";
import { MessageSquare, FileSpreadsheet, BellOff } from "lucide-react";

export default function PainPoints() {
  const painPoints = [
    {
      icon: <MessageSquare className="w-8 h-8 text-accent" />,
      title: "Your CRM is a text thread",
      description: "Orders live in iMessage. Visit notes live in your head. When a rep leaves, everything walks out the door with them."
    },
    {
      icon: <FileSpreadsheet className="w-8 h-8 text-accent" />,
      title: "Your pipeline is a spreadsheet",
      description: "You built a Google Sheet to track accounts. It was outdated the moment you shared it. Your manager has no idea what your team did today."
    },
    {
      icon: <BellOff className="w-8 h-8 text-accent" />,
      title: "You're missing reorders",
      description: "Your best accounts haven't heard from you in 3 weeks. That dispensary that loved your samples? You forgot to follow up. Revenue is slipping through the cracks."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-[40px] font-bold mb-4">Sound familiar?</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="mb-6 bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{point.title}</h3>
              <p className="text-slate-300 leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xl lg:text-2xl font-medium text-accent">
            Trova replaces the chaos with clarity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
