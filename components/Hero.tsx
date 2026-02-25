"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-white to-light-green/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-light-green border border-success/20 text-primary text-sm font-medium mb-6">
              <span className="text-base">🌿</span> Built exclusively for cannabis sales teams
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-dark leading-[1.1] tracking-tight mb-6">
              Stop losing sales to forgotten follow-ups
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-gray mb-8 max-w-2xl leading-relaxed">
              TerraTrack gives cannabis brand sales managers real-time visibility into every rep visit, sample drop, and pipeline deal — so no dispensary relationship falls through the cracks.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <Link 
                href="https://terratrack-66zj.vercel.app"
                className="inline-flex justify-center items-center h-12 px-8 rounded-lg bg-accent text-dark font-semibold hover:brightness-90 transition-all shadow-sm"
              >
                Start Free Trial
              </Link>
              <Link 
                href="#how-it-works"
                className="inline-flex justify-center items-center h-12 px-8 rounded-lg bg-transparent border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-all"
              >
                See It In Action
              </Link>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-slate-gray">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span>Built by a cannabis sales rep who scaled to 100+ retail locations</span>
            </div>
          </motion.div>

          {/* Right Column: CSS App Mockup */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative perspective-1000"
          >
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-full max-w-lg mx-auto transform rotate-y-[-5deg] rotate-x-[2deg]"
            >
              {/* Browser Frame */}
              <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-border-light overflow-hidden">
                {/* Top Bar */}
                <div className="bg-slate-100 h-10 flex items-center px-4 border-b border-border-light gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <div className="mx-auto bg-white px-24 py-1 rounded text-[10px] text-slate-400 font-mono">
                    terratrack.app/dashboard
                  </div>
                </div>
                
                {/* Dashboard Content */}
                <div className="p-6 bg-light-slate/50">
                  {/* KPI Row */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white p-4 rounded-xl border border-border-light shadow-sm">
                      <div className="text-xs text-slate-gray mb-1">Pipeline</div>
                      <div className="text-xl font-bold text-dark">$11.9K</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-border-light shadow-sm">
                      <div className="text-xs text-slate-gray mb-1">Visits Today</div>
                      <div className="text-xl font-bold text-dark">24</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-border-light shadow-sm">
                      <div className="text-xs text-slate-gray mb-1">Active Accounts</div>
                      <div className="text-xl font-bold text-dark">12</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-border-light shadow-sm border-l-4 border-l-red-500">
                      <div className="text-xs text-slate-gray mb-1">Overdue Tasks</div>
                      <div className="text-xl font-bold text-red-600">3</div>
                    </div>
                  </div>
                  
                  {/* Account List */}
                  <div className="bg-white rounded-xl border border-border-light shadow-sm overflow-hidden">
                    <div className="px-4 py-3 border-b border-border-light text-sm font-semibold text-dark">
                      Recent Activity
                    </div>
                    <div className="divide-y divide-border-light">
                      {[
                        { name: "Have a Heart", status: "Active", color: "bg-success/10 text-success" },
                        { name: "Kushmart South", status: "Sample Sent", color: "bg-amber-100 text-amber-700" },
                        { name: "Green Valley", status: "At Risk", color: "bg-red-100 text-red-700" }
                      ].map((item, i) => (
                        <div key={i} className="px-4 py-3 flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-600">
                              {item.name.charAt(0)}
                            </div>
                            <div className="text-sm font-medium text-dark">{item.name}</div>
                          </div>
                          <div className={`text-[10px] px-2 py-1 rounded-full font-medium ${item.color}`}>
                            {item.status}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
