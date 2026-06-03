/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Truck, Scale } from "lucide-react";
import { FLEET } from "../data";

export default function Fleet() {
  
  return (
    <section id="fleet" className="py-24 bg-gradient-to-b from-slate-950/60 to-[#111318] border-b border-gray-950 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E8620A] text-xs font-bold tracking-widest uppercase block mb-3">
            LOGISTICS ARMORY
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-wide uppercase">
            HEAVY INDUSTRIAL LORRY FLEET
          </h2>
          <div className="w-24 h-1 bg-[#E8620A] mx-auto mt-4 mb-4" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            From agile express mini picks up to massive 10-wheeler heavy steel haulers. Browse optimized payloads to select vehicles matching your factory orders.
          </p>
        </div>

        {/* Fleet Fleet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {FLEET.map((lorry) => (
            <div 
              key={lorry.id}
              className="bg-gray-950 border-2 border-gray-900 hover:border-[#E8620A] rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-300 transform hover:-translate-y-1"
            >
              <div>
                
                {/* Lorry Header Title Card */}
                <div className="bg-gray-900 p-6 border-b border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <span className="p-2.5 bg-gray-950 rounded border border-[#1E3A5F]/50 text-[#E8620A] block">
                      <Truck size={24} />
                    </span>
                    <span className="text-xs font-bold text-gray-400 font-mono tracking-widest uppercase bg-gray-950 px-2 py-1 rounded">
                      {lorry.tyreCount} WHEELS
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl tracking-widest text-white uppercase leading-tight">
                    {lorry.name}
                  </h3>
                </div>

                {/* Fleet Specs List */}
                <div className="p-6 space-y-4">
                  {/* Capacity Spec */}
                  <div className="flex items-center space-x-3 bg-gray-900/40 p-3 rounded border border-gray-900">
                    <Scale size={18} className="text-[#E8620A] flex-shrink-0" />
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-sans">Payload Capacity</div>
                      <div className="text-sm font-bold text-white uppercase tracking-wider">{lorry.capacity}</div>
                    </div>
                  </div>

                  {/* Dimensions Spec */}
                  <div className="flex items-center space-x-3 bg-gray-900/40 p-3 rounded border border-gray-900">
                    <svg className="w-4 h-4 text-[#E8620A] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                      <line x1="2" y1="20" x2="22" y2="20" />
                    </svg>
                    <div>
                      <div className="text-[10px] text-gray-500 uppercase tracking-widest font-sans">Gross Bed Dimensions</div>
                      <div className="text-xs font-bold text-gray-300 uppercase tracking-wider">{lorry.dimensions}</div>
                    </div>
                  </div>

                  {/* Suitability/Description */}
                  <div className="pt-3">
                    <span className="text-[10px] text-gray-500 font-extrabold uppercase tracking-widest block mb-1">
                      FREIGHT COMPATIBILITY
                    </span>
                    <p className="text-gray-400 text-xs leading-relaxed font-sans">
                      {lorry.suitableFor}
                    </p>
                  </div>
                </div>

              </div>

              {/* Lorry action button */}
              <div className="p-6 pt-0">
                <a 
                  href={`#quote?lorry_type=${encodeURIComponent(lorry.name)}`}
                  onClick={(e) => {
                    const el = document.getElementById("quote");
                    if (el) {
                      e.preventDefault();
                      el.scrollIntoView({ behavior: "smooth" });
                      // Set select option dynamically if available
                      const select = document.getElementById("quote-cargo-select") as HTMLSelectElement;
                      if (select) {
                        // Find match or select typical type
                      }
                    }
                  }}
                  className="w-full py-3 bg-[#1E3A5F] hover:bg-[#E8620A] text-white text-center rounded transition-colors text-xs font-bold tracking-widest block uppercase"
                >
                  SELECT FOR QUOTE FORM
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Custom safety payload disclosure */}
        <div className="mt-12 text-center text-xs text-gray-500 max-w-xl mx-auto font-sans">
          *All commercial transport dispatches adhere strictly to National Highway payload limits. Certified weighbridge slips from approved Hospet smelting yards are collected at dispatch points prior to departure.
        </div>

      </div>
    </section>
  );
}
