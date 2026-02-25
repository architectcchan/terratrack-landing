"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";

export default function Comparison() {
  const features = [
    { name: "Cannabis-specific data (strains, THC, samples)", tt: true, sf: false, sheet: false, ll: "Partial" },
    { name: "30-second mobile visit logging", tt: true, sf: false, sheet: false, ll: false },
    { name: "Sample lifecycle tracking (5-8 week aging)", tt: true, sf: false, sheet: false, ll: false },
    { name: "Buyer feedback (look, smell, pricing fit)", tt: true, sf: false, sheet: "Manual", ll: false },
    { name: "AI voice-to-CRM", tt: true, sf: false, sheet: false, ll: false },
    { name: "Reorder prediction", tt: true, sf: false, sheet: false, ll: false },
    { name: "Setup time", tt: "10 min", sf: "3+ months", sheet: "Ongoing", ll: "1 week" },
    { name: "Price", tt: "$99/mo", sf: "$800+/mo", sheet: "Free", ll: "$200+/mo" }
  ];

  const renderValue = (val: any) => {
    if (val === true) return <Check className="w-6 h-6 text-success mx-auto" />;
    if (val === false) return <X className="w-5 h-5 text-slate-300 mx-auto" />;
    return <span className="font-medium text-slate-600">{val}</span>;
  };

  return (
    <section className="py-20 lg:py-32 bg-light-slate overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-[40px] font-bold text-dark">Why not just use Salesforce?</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="overflow-x-auto pb-8"
        >
          <div className="min-w-[900px] bg-white rounded-2xl shadow-sm border border-border-light overflow-hidden">
            <div className="grid grid-cols-6 border-b border-border-light bg-slate-50">
              <div className="col-span-2 p-6 font-bold text-dark text-lg">Feature</div>
              <div className="p-6 font-bold text-primary text-center bg-light-green/50 border-x border-success/20">TerraTrack</div>
              <div className="p-6 font-bold text-dark text-center">Salesforce / HubSpot</div>
              <div className="p-6 font-bold text-dark text-center">Spreadsheets</div>
              <div className="p-6 font-bold text-dark text-center">LeafLink</div>
            </div>
            
            <div className="divide-y divide-border-light">
              {features.map((row, i) => (
                <div key={i} className="grid grid-cols-6 hover:bg-slate-50 transition-colors">
                  <div className="col-span-2 p-4 px-6 text-dark font-medium flex items-center">{row.name}</div>
                  <div className="p-4 flex items-center justify-center bg-light-green/30 border-x border-success/10">
                    {row.tt === true ? <Check className="w-6 h-6 text-success mx-auto" /> : <span className="font-bold text-primary">{row.tt}</span>}
                  </div>
                  <div className="p-4 flex items-center justify-center">{renderValue(row.sf)}</div>
                  <div className="p-4 flex items-center justify-center">{renderValue(row.sheet)}</div>
                  <div className="p-4 flex items-center justify-center">{renderValue(row.ll)}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
