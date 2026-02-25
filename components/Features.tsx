"use client";

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl lg:text-[40px] font-bold text-dark mb-6">
            Three features. One mission: never miss a sale.
          </h2>
          <p className="text-lg lg:text-xl text-slate-gray">
            Built around the actual workflow of cannabis field sales reps — not a generic CRM shoved into your industry.
          </p>
        </div>

        {/* Feature 1 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-dark mb-4">Every dispensary. Every detail. One click away.</h3>
            <p className="text-slate-gray text-lg mb-8 leading-relaxed">
              See every account&apos;s complete history — visits, orders, samples, buyer preferences, competitor intel, and contact details. When a rep transitions, zero knowledge is lost. Your new rep sees the full story from day one.
            </p>
            <ul className="space-y-4">
              {[
                "Full visit history with buyer feedback (look, smell, packaging, pricing fit)",
                "Sample tracking with 5-8 week aging alerts",
                "Buyer preferences (best days to visit, preferred contact method, ordering platform)",
                "Competitive intelligence from every shelf check"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                  <span className="text-dark">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* CSS Mockup: Account Detail */}
            <div className="bg-white rounded-2xl shadow-xl border border-border-light overflow-hidden max-w-md mx-auto">
              <div className="p-6 border-b border-border-light bg-light-slate">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-xl text-dark">Have a Heart — Capitol Hill</h4>
                    <p className="text-sm text-slate-gray">115 15th Ave E, Seattle, WA</p>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <span className="px-2 py-1 bg-success/10 text-success text-xs font-bold rounded-md">Active</span>
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded-md">Tier A</span>
                  </div>
                </div>
                <div className="flex gap-4 text-sm font-medium text-slate-gray border-b border-border-light pb-2">
                  <span className="text-primary border-b-2 border-primary pb-2 -mb-[9px]">Overview</span>
                  <span>Contacts</span>
                  <span>Orders</span>
                  <span>Visits</span>
                </div>
              </div>
              <div className="p-6 space-y-4 bg-white">
                <div className="text-sm font-semibold text-dark mb-2">Recent Activity</div>
                <div className="relative pl-4 border-l-2 border-border-light space-y-6">
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-accent border-2 border-white"></div>
                    <div className="text-sm font-medium text-dark">Sample Dropped: Blue Dream 1/8s</div>
                    <div className="text-xs text-slate-gray">Today, 10:30 AM by Sarah</div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-success border-2 border-white"></div>
                    <div className="text-sm font-medium text-dark">Order Placed: $2,450</div>
                    <div className="text-xs text-slate-gray">Oct 12, 2:15 PM by Sarah</div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[21px] top-1 w-3 h-3 rounded-full bg-slate-300 border-2 border-white"></div>
                    <div className="text-sm font-medium text-dark">Store Visit: Met with Buyer (John)</div>
                    <div className="text-xs text-slate-gray">Oct 5, 11:00 AM by Sarah</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature 2 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-2 lg:order-1 relative"
          >
            {/* CSS Mockup: Mobile App */}
            <div className="w-[300px] h-[600px] mx-auto bg-dark rounded-[40px] p-3 shadow-2xl relative">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-dark rounded-b-2xl z-20"></div>
              
              <div className="bg-light-slate w-full h-full rounded-[32px] overflow-hidden flex flex-col relative">
                <div className="pt-12 pb-4 px-6 bg-white border-b border-border-light">
                  <div className="text-xs text-slate-gray font-medium mb-1">Step 4 of 4</div>
                  <h4 className="font-bold text-lg text-dark">Visit Outcome</h4>
                </div>
                
                <div className="p-4 flex-1 space-y-3">
                  <div className="bg-white p-4 rounded-xl border-2 border-success shadow-sm flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-success flex items-center justify-center text-white text-xs">✓</div>
                    <span className="font-semibold text-dark">Order Placed</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-border-light shadow-sm flex items-center gap-3 opacity-70">
                    <div className="text-xl">🧪</div>
                    <span className="font-semibold text-dark">Sample Left</span>
                  </div>
                  <div className="bg-white p-4 rounded-xl border border-border-light shadow-sm flex items-center gap-3 opacity-70">
                    <div className="text-xl">📞</div>
                    <span className="font-semibold text-dark">Follow-up Needed</span>
                  </div>
                  
                  <div className="mt-6">
                    <div className="text-xs font-semibold text-slate-gray mb-2 uppercase tracking-wider">Voice Note</div>
                    <div className="bg-white p-4 rounded-xl border border-border-light flex items-center justify-center gap-2 text-primary font-medium">
                      <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></div>
                      Recording... 0:14
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-white border-t border-border-light">
                  <div className="w-full py-3 bg-primary text-white text-center font-semibold rounded-lg">
                    Save Visit
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-dark mb-4">Log a visit before you&apos;re back in the car.</h3>
            <p className="text-slate-gray text-lg mb-8 leading-relaxed">
              Six quick taps. That&apos;s it. Select the store, tap who you saw, tap the outcome, add a voice note if you want. AI extracts the details. Your manager sees it instantly. No more end-of-day CRM punishment.
            </p>
            <ul className="space-y-4">
              {[
                "GPS-verified check-ins (optional)",
                "AI voice notes — talk for 30 seconds, CRM auto-populates",
                "Automatic task creation for follow-ups",
                "Buyer feedback captured in structured data, not buried in notes"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                  <span className="text-dark">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Feature 3 */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-dark mb-4">The app that tells you what to do today.</h3>
            <p className="text-slate-gray text-lg mb-8 leading-relaxed">
              TerraTrack monitors your sample aging, visit frequency, and ordering patterns. It surfaces the 5 things you need to do today — before you even check your phone. No more &quot;I forgot to call them back.&quot;
            </p>
            <ul className="space-y-4">
              {[
                "Sample aging alerts (never forget a 5-8 week follow-up window)",
                "Reorder predictions based on each account's ordering cadence",
                "Daily priority list — what matters most, surfaced automatically",
                "Manager dashboard showing team activity in real-time"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                  <span className="text-dark">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* CSS Mockup: Task List */}
            <div className="bg-white rounded-2xl shadow-xl border border-border-light overflow-hidden max-w-md mx-auto">
              <div className="p-4 bg-primary text-white flex justify-between items-center">
                <h4 className="font-bold text-lg">My Priorities</h4>
                <span className="text-sm opacity-80">Tuesday, Oct 24</span>
              </div>
              <div className="p-2 bg-light-slate">
                
                <div className="mb-4">
                  <div className="px-3 py-2 text-xs font-bold text-slate-gray uppercase tracking-wider">Overdue</div>
                  <div className="bg-white m-2 p-4 rounded-xl border border-red-200 shadow-sm border-l-4 border-l-red-500">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-dark text-sm">Follow up on samples</span>
                      <span className="text-xs font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded">6 days late</span>
                    </div>
                    <div className="text-xs text-slate-gray">Kushmart South • Dropped 6 weeks ago</div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="px-3 py-2 text-xs font-bold text-slate-gray uppercase tracking-wider">Today</div>
                  <div className="bg-white m-2 p-4 rounded-xl border border-amber-200 shadow-sm border-l-4 border-l-amber-500">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-dark text-sm">Check reorder status</span>
                      <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded">High Priority</span>
                    </div>
                    <div className="text-xs text-slate-gray">Green Valley • Usually orders every 14 days</div>
                  </div>
                </div>

                <div>
                  <div className="px-3 py-2 text-xs font-bold text-slate-gray uppercase tracking-wider">This Week</div>
                  <div className="bg-white m-2 p-4 rounded-xl border border-border-light shadow-sm border-l-4 border-l-primary">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-semibold text-dark text-sm">Store Visit</span>
                    </div>
                    <div className="text-xs text-slate-gray">Have a Heart — Ballard • Last visited 30 days ago</div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
