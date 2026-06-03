/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation, ShieldCheck, Clock, Layers, Flame, Award } from "lucide-react";

export default function WhyUs() {
  const benefitCards = [
    {
      title: "GPS Tracked Lorries",
      description: "Real-time satellite coordinates shared directly with your dispatcher. Monitor transit logs and keep warehouse receiving crews accurately prepared for offloading.",
      iconName: "Navigation",
      highlight: "SATELLITE SYNC"
    },
    {
      title: "Route-Veterans Only",
      description: "All drivers carry a minimum of 10 years of heavy multi-axle driving experience. They are highly skilled at navigating weight checkpoints, ghat roads, and highways safely.",
      iconName: "Award",
      highlight: "VERIFIED CREW"
    },
    {
      title: "On-Time Guarantee",
      description: "B2B operations depend on timely feedstock. We back our delivery promises with an absolute on-time transit window or provide responsive billing adjustments.",
      iconName: "Clock",
      highlight: "ZERO LATENCY"
    },
    {
      title: "All Cargo Types Welcomed",
      description: "From bulk industrial powder, heavy steel slabs, stone aggregates, to highly fragile machine tools, our vehicles are loaded with modular securing hooks, tensioners, and rain tarps.",
      iconName: "Layers",
      highlight: "UNIVERSAL SECURING"
    },
    {
      title: "Competitive Direct Rates",
      description: "Direct-to-owner coordination without third-party logistics brokers. Get actual fleet rates tailored to your freight profile and load frequency.",
      iconName: "Flame",
      highlight: "NO BROKER FEES"
    }
  ];

  // Dynamic Icon selector
  const getBenefitIcon = (name: string) => {
    switch (name) {
      case "Navigation":
        return <Navigation size={24} className="text-[#E8620A]" />;
      case "Award":
        return <Award size={24} className="text-[#E8620A]" />;
      case "Clock":
        return <Clock size={24} className="text-[#E8620A]" />;
      case "Layers":
        return <Layers size={24} className="text-[#E8620A]" />;
      case "Flame":
        return <Flame size={24} className="text-[#E8620A]" />;
      default:
        return <ShieldCheck size={24} className="text-[#E8620A]" />;
    }
  };

  return (
    <section id="why-us" className="py-24 bg-[#111318] border-b border-gray-950 relative">
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#E8620A]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E8620A] text-xs font-bold tracking-widest uppercase block mb-3 animate-pulse">
            OPERATING ASSURANCE
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-wide uppercase">
            WHY ENTRUST US WITH YOUR CARGO
          </h2>
          <div className="w-24 h-1 bg-[#E8620A] mx-auto mt-4 mb-4" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            We reject standard sub-leasing shortcuts. Hospet Bangalore Lorry Transport coordinates only top-tier logistics assets with certified compliance protocols.
          </p>
        </div>

        {/* Benefits Cards Custom Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefitCards.map((benefit, i) => (
            <div 
              key={i}
              className={`p-6 sm:p-8 bg-gray-900/30 border border-[#1E3A5F]/40 rounded hover:border-[#E8620A] transition-all group ${
                i === 3 ? "lg:col-span-2" : i === 4 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-gray-950 rounded border border-gray-800 group-hover:border-[#E8620A] transition-colors">
                  {getBenefitIcon(benefit.iconName)}
                </div>
                <span className="text-[10px] text-gray-400 font-extrabold tracking-widest uppercase font-mono">
                  {benefit.highlight}
                </span>
              </div>

              <h3 className="font-heading text-xl sm:text-2xl text-white tracking-widest uppercase mb-3 group-hover:text-[#E8620A] transition-colors">
                {benefit.title}
              </h3>
              
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-sans">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call Now Banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-gray-950 to-gray-900 rounded border border-gray-800 text-center flex flex-col items-center max-w-3xl mx-auto">
          <h4 className="font-heading text-2xl text-white tracking-widest uppercase mb-3">
            NEED TO CUSTOMIZE FREIGHT PARAMETERS?
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl leading-relaxed mb-6 font-sans">
            Whether your loaders require flatbed side walls, heavy anchor chains, multi-point strap locks, or customized high-tension covers, speak directly with owner Shaik Javeed to customize details.
          </p>
          <a
            href="tel:9393185621"
            className="px-8 py-3 bg-[#E8620A] hover:bg-[#ff7722] text-white font-heading font-normal text-xl tracking-widest rounded transition-all inline-flex items-center space-x-2"
          >
            <span>CALL DIRECT: 9393185621</span>
          </a>
        </div>

      </div>
    </section>
  );
}
