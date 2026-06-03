/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Phone, MessageSquare, ArrowRight, Shield, ShieldCheck, MapPin } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-[#111318] bg-grid-pattern bg-road-texture px-4 py-16 border-b-4 border-gray-950"
    >
      {/* Visual industrial overlay accents */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#1E3A5F]/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#E8620A]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#1E3A5F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        
        {/* Hub Connection Badge */}
        <div className="inline-flex items-center space-x-3 bg-gray-900/90 border-2 border-[#1E3A5F] px-4 py-2 rounded-full mb-8 text-xs font-semibold tracking-wider text-gray-300">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-[#E8620A] tracking-widest font-heading text-lg">DAILY HEAVY FREIGHT</span>
          <span className="text-gray-500">|</span>
          <span className="flex items-center text-white">
            HOSPET <ArrowRight size={12} className="mx-1 text-[#E8620A]" /> BANGALORE
          </span>
        </div>

        {/* Heavy Bold Display Headline */}
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl text-white tracking-wide leading-none text-center select-none uppercase">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-400">
            Hospet to Bangalore
          </span>
          <span className="block text-[#E8620A] filter drop-shadow-[0_2px_10px_rgba(232,98,10,0.3)] mt-2">
            Every Load. On Time.
          </span>
        </h1>

        {/* Supporting Hook with strong industrial tone */}
        <p className="mt-8 text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-sans">
          Reliable B2B logistics powering Karnataka's heavy manufacturing industry. Direct full-truck (FTL) and ore transports between the steel hub of <span className="text-white font-semibold">Hospet</span> and corporate warehouses in <span className="text-white font-semibold">Bangalore</span>. Custom freight logistics managed directly by <span className="text-white font-semibold">Shaik Javeed</span>.
        </p>

        {/* Primary Call to Actions */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-lg">
          <a
            href="https://wa.me/919393185621?text=Hi%20Shaik%20Javeed%2C%20I%20need%20a%20lorry%20from%20Hospet%20to%20Bangalore."
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#E8620A] hover:bg-[#ff7722] text-white font-heading font-normal text-2xl tracking-widest rounded shadow-lg shadow-[#E8620A]/20 hover:shadow-[#E8620A]/30 transition-all flex items-center justify-center space-x-3 group"
          >
            <MessageSquare size={20} className="fill-white/10 group-hover:scale-110 transition-transform" />
            <span>GET A QUOTE</span>
          </a>

          <a
            href={`tel:${CONTACT_INFO.primaryPhone}`}
            className="w-full sm:w-auto px-8 py-4 bg-gray-900 hover:bg-gray-800 border-2 border-[#1E3A5F] hover:border-[#E8620A] text-white font-heading font-normal text-2xl tracking-widest rounded transition-all flex items-center justify-center space-x-3"
          >
            <Phone size={20} className="text-[#E8620A]" />
            <span>CALL: {CONTACT_INFO.primaryPhone}</span>
          </a>
        </div>

        {/* Quick Highlights Info */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 w-full bg-gray-900/60 p-4 rounded border border-[#1E3A5F] max-w-4xl backdrop-blur-sm">
          <div className="flex items-center space-x-2 text-left p-2 border-r border-[#1E3A5F]/50 last:border-r-0">
            <ShieldCheck className="text-[#E8620A] flex-shrink-0" size={24} />
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">BILLING</div>
              <div className="text-xs font-bold text-white tracking-wider">GST REGISTERED</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-left p-2 border-r border-[#1E3A5F]/50 last:border-r-0">
            <MapPin className="text-[#E8620A] flex-shrink-0" size={24} />
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">DISTANCE</div>
              <div className="text-xs font-bold text-white tracking-wider">~340 KM DIRECT</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-left p-2 border-r border-[#1E3A5F]/50 last:border-r-0">
            <Shield className="text-[#E8620A] flex-shrink-0" size={24} />
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest">TRACKING</div>
              <div className="text-xs font-bold text-white tracking-wider">GPS SECURED</div>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-left p-2 last:border-none">
            <div className="text-emerald-500 font-heading text-xl font-bold tracking-widest px-2 py-0.5 bg-emerald-950/50 border border-emerald-900 rounded">FAST</div>
            <div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest font-sans">TRANSIT</div>
              <div className="text-xs font-bold text-white tracking-wider">8-10 HRS DOOR DELIVERY</div>
            </div>
          </div>
        </div>

      </div>

      {/* Heavy Animated Highway Lane with Truck Silhouette */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gray-900/80 border-t border-[#1E3A5F] overflow-hidden select-none">
        
        {/* Animated Dashed Lane Line Center */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent flex justify-around pointer-events-none">
          {Array.from({ length: 15 }).map((_, i) => (
            <div key={i} className="h-1 w-6 bg-yellow-500/30 rounded" />
          ))}
        </div>

        {/* Animated Lorry Silhouette */}
        <motion.div 
          className="absolute bottom-1.5 flex items-center space-x-2 bg-[#1E3A5F] px-4 py-1.5 rounded-l-md rounded-r-xl border border-[#E8620A]/40 text-white font-sans text-[10px] font-bold tracking-widest"
          initial={{ x: "-220px" }}
          animate={{ x: "100%", transition: { repeat: Infinity, duration: 25, ease: "linear" } }}
        >
          <span className="inline-block h-2.5 w-4 bg-[#E8620A] rounded-sm transform -translate-y-[1px]" />
          <span className="text-white uppercase font-heading text-xs">HOSPET ⇌ BANGALORE TRANSPORT</span>
          <div className="flex space-x-1 pl-1">
            <span className="h-2.5 w-2.5 rounded-full bg-gray-950 border border-gray-600 block animate-spin" />
            <span className="h-2.5 w-2.5 rounded-full bg-gray-950 border border-gray-600 block animate-spin" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
