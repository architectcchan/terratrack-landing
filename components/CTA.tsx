"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            Your competitors are following up.<br className="hidden md:block" /> Are you?
          </h2>
          <p className="text-xl text-light-green mb-10 max-w-2xl mx-auto">
            Start your free trial today. Set up takes under 10 minutes. No credit card required.
          </p>
          <div className="flex flex-col items-center">
            <Link 
              href="https://terratrack-66zj.vercel.app"
              className="inline-flex justify-center items-center h-14 px-10 rounded-lg bg-accent text-dark font-bold text-lg hover:brightness-90 transition-all shadow-lg mb-4"
            >
              Start Your Free Trial →
            </Link>
            <p className="text-light-green/80 text-sm">
              or email us at <a href="mailto:hello@terratrack.app" className="underline hover:text-white transition-colors">hello@terratrack.app</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
