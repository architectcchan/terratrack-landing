"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$99",
      period: "/month",
      features: [
        "1 manager + 2 reps",
        "200 accounts",
        "Visit logging & sample tracking",
        "Task management",
        "Basic dashboard"
      ],
      buttonText: "Start Free Trial",
      buttonClass: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
      highlighted: false
    },
    {
      name: "Professional",
      badge: "Most Popular",
      price: "$149",
      period: "/month",
      features: [
        "1 manager + 5 reps",
        "Unlimited accounts",
        "Everything in Starter plus:",
        "AI voice-to-CRM",
        "Reorder intelligence",
        "Advanced reports",
        "Pipeline analytics"
      ],
      buttonText: "Start Free Trial",
      buttonClass: "bg-accent text-dark hover:brightness-90",
      highlighted: true
    },
    {
      name: "Team",
      price: "$249",
      period: "/month",
      features: [
        "2 managers + 10 reps",
        "Everything in Professional plus:",
        "Territory management",
        "Rep scorecards",
        "Team transitions",
        "Priority support"
      ],
      buttonText: "Start Free Trial",
      buttonClass: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-[40px] font-bold text-dark mb-4">Simple pricing. No per-seat surprises.</h2>
          <p className="text-lg lg:text-xl text-slate-gray">Start free. Upgrade when your team grows.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className={`relative bg-white rounded-2xl border ${
                plan.highlighted 
                  ? "border-accent shadow-xl md:scale-105 z-10" 
                  : "border-border-light shadow-sm hover:shadow-md"
              } p-8 flex flex-col h-full transition-shadow`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-dark text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  {plan.badge}
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-dark mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold text-dark">{plan.price}</span>
                  <span className="text-slate-gray font-medium">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success shrink-0" />
                    <span className="text-slate-gray">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="https://terratrack-66zj.vercel.app"
                className={`w-full h-12 flex items-center justify-center rounded-lg font-semibold transition-all ${plan.buttonClass}`}
              >
                {plan.buttonText}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center text-slate-gray font-medium">
          14-day free trial. No credit card required. Cancel anytime.
        </div>
      </div>
    </section>
  );
}
