/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Navigation, Clock, CheckCircle2, ChevronRight, MapPin, Truck } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function RouteHighlight() {
  const [activeSegment, setActiveSegment] = useState<number | null>(null);

  const routeCheckpoints = [
    {
      city: "Hospet Origin Hub",
      distance: "0 KM",
      details: "Loading point near bypass mining yards & steel mills. Exit to National Highway 50.",
      type: "Origin",
      role: "Ore & Industrial Cargo Loading"
    },
    {
      city: "Chitradurga Interchange",
      distance: "135 KM",
      details: "NH-50 joins four-lane National Highway 48. Driver checkpoint and tyre check.",
      type: "En-Route",
      role: "Route Merger Axis"
    },
    {
      city: "Tumakuru Industrial Belt",
      distance: "270 KM",
      details: "Heavy toll station and bypass access. Clearance verification for Bengaluru rural entry.",
      type: "En-Route",
      role: "Sub-Industrial Corridor"
    },
    {
      city: "Bangalore Logistics Terminal",
      distance: "340 KM",
      details: "Direct arrival at Peenya / Yeshwanthpur industrial hubs, warehouses, or factory gates.",
      type: "Destination",
      role: "B2B Unloading Hub"
    }
  ];

  return (
    <section id="route" className="py-24 bg-gradient-to-b from-[#111318] to-slate-950/60 border-b border-gray-950 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E8620A] text-xs font-bold tracking-widest uppercase block mb-3">
            LOGISTICS CORRIDOR
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-wide uppercase">
            HOSPET ↔ BANGALORE VISUAL ROUTE
          </h2>
          <div className="w-24 h-1 bg-[#E8620A] mx-auto mt-4 mb-4" />
          <p className="text-gray-400 text-sm sm:text-base">
            Powering direct non-stop logistics along the NH-50 and NH-48 express corridor. Check the checkpoints below to view specific transit times.
          </p>
        </div>

        {/* Route Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Visual Interactive Map Representation */}
          <div className="lg:col-span-7 bg-gray-900/60 border border-[#1E3A5F] rounded p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-800">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-[#E8620A]/10 border border-[#E8620A] rounded">
                    <Navigation size={18} className="text-[#E8620A]" />
                  </div>
                  <div>
                    <h3 className="text-white text-xs font-bold tracking-wider uppercase font-sans">Route Stats: National Highway</h3>
                    <p className="text-gray-400 text-[11px]">Direct Express Link (NH-50 / NH-48)</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[#E8620A] font-heading text-2xl font-bold block">{CONTACT_INFO.commuteStats.distance}</span>
                  <span className="text-gray-500 text-[10px] tracking-widest">ESTIMATED RUN</span>
                </div>
              </div>

              {/* Graphic Timeline Track */}
              <div className="relative pl-8 sm:pl-10 space-y-8 py-4">
                {/* Horizontal / Vertical Line Element */}
                <div className="absolute top-6 bottom-6 left-3 sm:left-4.5 w-1 bg-gradient-to-b from-[#E8620A] via-[#1E3A5F] to-emerald-500 rounded" />

                {routeCheckpoints.map((checkpoint, index) => {
                  const isActive = activeSegment === index;
                  return (
                    <div 
                      key={index}
                      className="relative cursor-pointer group"
                      onMouseEnter={() => setActiveSegment(index)}
                      onMouseLeave={() => setActiveSegment(null)}
                      onClick={() => setActiveSegment(index === activeSegment ? null : index)}
                    >
                      {/* Interactive Pin Circle Indicator */}
                      <div className={`absolute -left-8 sm:-left-9.5 top-1.5 h-4 w-4 sm:h-5 sm:w-5 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                        index === 0 ? "bg-[#E8620A] border-[#E8620A] scale-110" : 
                        index === 3 ? "bg-emerald-500 border-emerald-500 scale-110" : 
                        isActive ? "bg-[#1E3A5F] border-[#E8620A] scale-125" : "bg-gray-950 border-[#1E3A5F]"
                      }`}>
                        {index === 0 && <span className="h-1.5 w-1.5 bg-white rounded-full" />}
                        {index === 3 && <span className="h-1.5 w-1.5 bg-white rounded-full" />}
                        {index > 0 && index < 3 && <span className="h-1 w-1 bg-orange-400 rounded-full" />}
                      </div>

                      <div className={`p-4 transition-all duration-200 rounded border ${
                        isActive ? "bg-gray-900 border-[#E8620A] pl-5" : "bg-gray-950/20 border-transparent hover:border-gray-800"
                      }`}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                          <h4 className={`text-sm tracking-wider font-bold uppercase font-sans ${
                            index === 0 ? "text-[#E8620A]" : index === 3 ? "text-emerald-400" : "text-white"
                          }`}>
                            {checkpoint.city}
                          </h4>
                          <span className="text-[10px] uppercase font-sans font-extrabold text-[#E8620A] tracking-wider">
                            {checkpoint.distance}
                          </span>
                        </div>
                        <div className="text-[11px] text-gray-500 tracking-wider font-semibold uppercase mt-0.5">
                          {checkpoint.role}
                        </div>
                        {checkpoint.details && (
                          <p className="text-gray-400 text-xs mt-2 leading-relaxed font-sans max-w-xl">
                            {checkpoint.details}
                          </p>
                        )}
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interactive hint */}
            <div className="text-[11px] text-gray-400 font-sans mt-4 italic border-t border-gray-800 pt-4 flex items-center space-x-1 justify-center sm:justify-start">
              <Truck size={12} className="text-[#E8620A]" />
              <span>Hover or tap individual stops to view logistics clearance details.</span>
            </div>
          </div>

          {/* Quick Stats Sidebar (Transit guarantees) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            
            {/* Speed & Availability Card */}
            <div className="bg-gray-900/40 border border-[#1E3A5F] p-6 rounded relative overflow-hidden flex-1">
              <div className="absolute top-0 right-0 p-3 text-[#E8620A]/10 select-none font-heading text-8xl leading-none">
                8H
              </div>
              
              <span className="text-[10px] font-sans font-bold text-[#E8620A] bg-[#E8620A]/10 border border-[#E8620A]/30 px-2 py-0.5 rounded tracking-widest uppercase mb-4 inline-block">
                Transit Velocity
              </span>
              <h3 className="font-heading text-3xl text-white tracking-wider uppercase mb-3">
                {CONTACT_INFO.commuteStats.duration}
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-4">
                Our heavy fleet maintains fixed scheduled targets. Multiple regional drivers ensure shifts are executed securely without unscheduled stops, securing your raw or finished cargo door-to-door in under 10 hours.
              </p>

              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                  <span>Dual Driver operations for non-stop hauling</span>
                </div>
                <div className="flex items-center space-x-2 text-xs text-slate-300">
                  <CheckCircle2 size={14} className="text-emerald-500 flex-shrink-0" />
                  <span>Avoids city peak hours via optimized outer bypass runs</span>
                </div>
              </div>
            </div>

            {/* Departures Alert */}
            <div className="bg-gray-950 p-6 rounded border border-gray-800 flex-1 flex flex-col justify-between">
              <div>
                <h4 className="font-heading text-xl text-white tracking-widest uppercase mb-2">
                  {CONTACT_INFO.commuteStats.frequency}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Daily morning and night-shift dispatches. Whether loading is processed in Hospet's mining bypass yards at 6:00 AM or 9:00 PM, a lorry is always pre-positioned ready for you.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-900 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-500 block uppercase tracking-widest font-sans">COORDINATOR</span>
                  <span className="text-xs font-bold text-white tracking-widest">{CONTACT_INFO.ownerName}</span>
                </div>
                <a 
                  href={`tel:${CONTACT_INFO.primaryPhone}`}
                  className="px-4 py-2 bg-[#1E3A5F] hover:bg-[#E8620A] text-white transition-colors text-[11px] font-extrabold tracking-widest rounded flex items-center space-x-1"
                >
                  <span>CHECK INSTANT TIMINGS</span>
                  <ChevronRight size={12} />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
