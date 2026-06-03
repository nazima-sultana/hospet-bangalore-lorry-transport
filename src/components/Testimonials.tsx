/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Star, Quote, ShieldCheck } from "lucide-react";
import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-[#111318] to-slate-950 border-b border-gray-950 relative">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#E8620A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E8620A] text-xs font-bold tracking-widest uppercase block mb-3">
            VERIFIED INDUSTRY TRUST
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-wide uppercase">
            HEAVY INDUSTRY PARTNER FEEDBACK
          </h2>
          <div className="w-24 h-1 bg-[#E8620A] mx-auto mt-4 mb-4" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Hospet's top manufacturing plants and trading agencies depend on our punctual dispatches to power their complex supply chains between Hospet and Bangalore.
          </p>
        </div>

        {/* Testimonials Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="p-6 sm:p-8 bg-gray-900/30 border border-gray-800 rounded-lg hover:border-[#1E3A5F] transition-all relative flex flex-col justify-between"
            >
              {/* Quotation mark icon watermarked */}
              <div className="absolute top-6 right-6 text-[#E8620A]/10 select-none pointer-events-none">
                <Quote size={40} className="stroke-2" />
              </div>

              <div>
                
                {/* 5 Star rating render */}
                <div className="flex space-x-1 mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star 
                      key={idx} 
                      size={14} 
                      className="text-[#E8620A] fill-[#E8620A]" 
                    />
                  ))}
                </div>

                {/* Feedback content */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-8 italic font-sans">
                  "{testimonial.feedback}"
                </p>

              </div>

              {/* Client Profile details */}
              <div className="pt-4 border-t border-gray-900 flex items-center justify-between">
                <div>
                  <h4 className="text-white text-sm font-extrabold tracking-wider uppercase font-sans">
                    {testimonial.clientName}
                  </h4>
                  <div className="text-[10px] text-gray-500 font-extrabold uppercase mt-0.5 tracking-wider font-mono">
                    {testimonial.companyName}
                  </div>
                  <div className="text-[9px] text-[#E8620A] uppercase mt-0.5 tracking-wider font-bold">
                    {testimonial.industry}
                  </div>
                </div>

                {/* Small security stamp */}
                <div className="text-emerald-500" title="Verified Commercial Client">
                  <ShieldCheck size={16} />
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Call Now Banner */}
        <div className="mt-16 text-center">
          <span className="text-xs text-gray-500 font-sans block mb-2">Powering corporate commerce since 2011</span>
          <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold bg-emerald-950/40 px-4 py-2 rounded-full border border-emerald-900/50">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="tracking-widest uppercase">98% ON-TIME DISPATCH CONFIRMATION SLIP RATE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
