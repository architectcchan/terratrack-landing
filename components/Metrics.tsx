"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

function Counter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const updateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        
        if (progress < duration) {
          setCount(Math.min(end, Math.floor((progress / duration) * end)));
          animationFrame = requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };

      animationFrame = requestAnimationFrame(updateCount);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Metrics() {
  const stats = [
    {
      value: "$2B",
      label: "in annual cannabis stockouts from missed reorders"
    },
    {
      value: "15-20 hrs",
      label: "per week lost to manual wholesale coordination"
    },
    {
      value: "60%",
      label: "of budtenders leave within 2 months — taking brand training with them"
    },
    {
      value: "27",
      label: "average touches needed to land a new dispensary account"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-[40px] font-bold text-dark">The numbers behind the problem</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-light-green/30 border border-success/10"
            >
              <div className="text-4xl lg:text-5xl font-extrabold text-primary mb-4 font-mono tabular-nums">
                {stat.value}
              </div>
              <p className="text-slate-gray font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <p className="text-lg text-slate-gray italic">
            &quot;Trova was built by a cannabis sales rep who scaled a brand to 100+ retail locations. Every feature exists because we lived the pain.&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
}
