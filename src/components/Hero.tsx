'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Background Gradient Blobs for "Techie" Look */}
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6 text-center md:text-left order-2 md:order-1"
          >
            <div>
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-purple-300 uppercase bg-purple-500/10 rounded-full border border-purple-500/20"
              >
                Version 2.0 is live
              </motion.span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                Build faster with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Modern Tools
                </span>
              </h1>
              <p className="mt-6 text-lg text-slate-400 max-w-lg mx-auto md:mx-0">
                Create stunning interfaces in minutes, not weeks. Deploy your next big idea instantly with our state-of-the-art infrastructure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all"
              >
                Get Started
              </motion.button>
              
              {/* Optional Secondary Button (Commented out per 1 CTA requirement, but kept structure if needed) */}
              {/* <button className="px-8 py-4 border border-slate-700 text-slate-300 font-semibold rounded-xl hover:bg-slate-800 transition-colors">
                Learn More
              </button> */}
            </div>
          </motion.div>

          {/* Right Illustration Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex items-center justify-center order-1 md:order-2"
          >
            <div className="relative w-full max-w-lg aspect-square">
              {/* Decorative Glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              
              {/* Placeholder Card / Illustration */}
              <div className="relative w-full h-full bg-slate-900/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl flex items-center justify-center overflow-hidden">
                 {/* Replace this SVG with your actual Illustration */}
                 <div className="absolute inset-0 grid grid-cols-6 gap-2 opacity-20 transform rotate-12 scale-150">
                    {[...Array(24)].map((_, i) => (
                      <div key={i} className="bg-purple-500/30 rounded-lg aspect-square" />
                    ))}
                 </div>
                 
                 <div className="relative z-10 text-center">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 className="text-white text-xl font-semibold">Lightning Fast</h3>
                    <p className="text-slate-400 text-sm mt-2">Optimized for performance</p>
                 </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}