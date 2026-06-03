/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Truck, Layers, HardHat, Factory, ChevronRight } from "lucide-react";
import { SERVICES } from "../data";

export default function Services() {
  
  // Custom Icon Selector based on ID
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "ftl":
        return <Truck className="text-[#E8620A]" size={36} />;
      case "ptl":
        return <Layers className="text-[#E8620A]" size={36} />;
      case "mining-ore":
        return <HardHat className="text-[#E8620A]" size={36} />;
      case "factory-runs":
        return <Factory className="text-[#E8620A]" size={36} />;
      default:
        return <Truck className="text-[#E8620A]" size={36} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-[#111318] border-b border-gray-950 relative">
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#1E3A5F]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E8620A] text-xs font-bold tracking-widest uppercase block mb-3">
            LOGISTICS CAPABILITIES
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-wide uppercase">
            INDUSTRIAL B2B SHIPPING SERVICES
          </h2>
          <div className="w-24 h-1 bg-[#E8620A] mx-auto mt-4 mb-4" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Hospet's mining and smelting giants demand robust transport. We provide high-payload lorries fully equipped for heavy cargo runs directly to Bangalore's industrial corridors.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id}
              className="group p-6 sm:p-8 bg-gray-900/40 border-2 border-gray-800 rounded hover:border-[#E8620A] transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              {/* Corner accent background highlight */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-tr from-[#E8620A]/10 to-transparent rounded-full group-hover:scale-150 transition-transform duration-500" />
              
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-gray-900 rounded-lg border border-[#1E3A5F]/50 group-hover:border-[#E8620A] transition-colors">
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-[#E8620A] bg-[#E8620A]/10 px-3 py-1 rounded border border-[#E8620A]/20 tracking-wider uppercase font-sans">
                    {service.badge}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-heading text-2xl sm:text-3xl text-white tracking-wider mb-3 group-hover:text-[#E8620A] transition-colors uppercase">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Specific loads chips */}
                {service.loads && (
                  <div className="mb-8">
                    <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase block mb-2 font-sans">
                      Common Freight Items:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {service.loads.map((load, index) => (
                        <span 
                          key={index} 
                          className="text-[11px] font-sans font-medium text-gray-300 bg-gray-900 px-2.5 py-1 rounded border border-gray-800"
                        >
                          {load}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <a 
                href="#quote"
                className="mt-4 text-[#E8620A] hover:text-white flex items-center space-x-1.5 text-xs font-bold tracking-wider uppercase transition-colors group/btn"
              >
                <span>INITIATE BOOKING ENQUIRY</span>
                <ChevronRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
              </a>

            </div>
          ))}
        </div>

        {/* GST Notice Box */}
        <div className="mt-12 bg-gray-900/80 p-6 rounded border border-dashed border-[#1E3A5F] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-xs text-[#E8620A] font-bold tracking-widest block uppercase mb-1">
              CORPORATE LOGISTICS ASSURANCE
            </span>
            <p className="text-gray-300 text-xs sm:text-sm">
              We provide formal physical & digital lorry receipts (LR), e-way documentation support, and commercial invoice compliance ready for your industrial taxation needs.
            </p>
          </div>
          <a
            href="https://wa.me/919393185621?text=Hi%20Shaik%20Javeed,%20I'm%20looking%20for%20a%20GST-ready%20lorry%20quote."
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 px-5 py-3 bg-gray-950 hover:bg-[#1E3A5F] text-white border border-[#1E3A5F] transition-all text-xs font-bold tracking-widest rounded"
          >
            DISCUSS GST CONTRACTS
          </a>
        </div>

      </div>
    </section>
  );
}
