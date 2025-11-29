'use client';

import React from 'react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/mo",
    description: "Perfect for hobbyists and side projects.",
    features: ["5 Projects", "Community Support", "1GB Storage", "Basic Analytics"],
    cta: "Start for Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/mo",
    description: "For professional developers and small teams.",
    features: ["Unlimited Projects", "Priority Support", "50GB Storage", "Advanced Analytics", "Custom Domains"],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large-scale organizations with specific needs.",
    features: ["Unlimited Everything", "24/7 Dedicated Support", "SSO & Security", "SLA Guarantee", "On-premise Deployment"],
    cta: "Contact Sales",
    popular: false,
  },
];

const CheckIcon = () => (
  <svg className="w-5 h-5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function PricingOrContact() {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden" id="pricing">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Pricing</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Choose the plan that fits your growth. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className={`relative p-8 rounded-2xl backdrop-blur-xl border flex flex-col h-full transition-all duration-300
                ${plan.popular 
                  ? 'bg-slate-900/80 border-purple-500 shadow-2xl shadow-purple-500/20 z-10 scale-105 md:-mt-4' 
                  : 'bg-slate-900/40 border-slate-800 hover:border-slate-600 hover:shadow-xl'
                }
              `}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-500">{plan.period}</span>
                </div>
                <p className="text-slate-400 text-sm mt-4">{plan.description}</p>
              </div>

              <div className="flex-grow mb-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                      <CheckIcon />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-200
                  ${plan.popular
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-purple-500/40'
                    : 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700'
                  }
                `}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}