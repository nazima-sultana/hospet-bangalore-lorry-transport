/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, MessageSquare, MapPin, Landmark, Clock, Mail, ShieldAlert } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Contact() {
  
  return (
    <section id="contact" className="py-24 bg-[#111318] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E8620A] text-xs font-bold tracking-widest uppercase block mb-3">
            LOGISTICS HIGHWAY DIRECT
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-wide uppercase">
            ESTABLISH CONTACT & DEPOT INFO
          </h2>
          <div className="w-24 h-1 bg-[#E8620A] mx-auto mt-4 mb-4" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Reach out directly to book our trucks, establish quarterly contracts, or verify transport schedules. Speak straight to Shaik Javeed.
          </p>
        </div>

        {/* Dual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-stretch">
          
          {/* Urgent Hotline Channels Grid */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Primary Dispatch Center block */}
            <div className="bg-gray-950 p-6 sm:p-8 rounded-lg border border-gray-900">
              <div className="inline-flex items-center space-x-2 bg-[#E8620A]/10 border border-[#E8620A]/30 px-3.5 py-1.5 rounded-full text-[#E8620A] text-xs font-bold tracking-wider mb-6 uppercase">
                <Clock size={12} className="animate-spin" />
                <span>24/7 HELPLINE CORRIDOR</span>
              </div>

              <h3 className="font-heading text-3xl text-white tracking-widest uppercase mb-4">
                DIRECT TO FLEET OWNER
              </h3>
              
              {/* Coordinator contact box */}
              <div className="bg-gray-900 border border-[#1E3A5F]/40 p-5 rounded mb-6">
                <div className="flex items-center space-x-3 mb-2.5">
                  <Landmark size={18} className="text-[#E8620A]" />
                  <span className="text-xs text-gray-500 font-extrabold tracking-widest uppercase font-mono">
                    PROPRIETOR CORRESPONDENCE
                  </span>
                </div>
                <div className="text-white text-xl font-bold uppercase tracking-wider font-sans">
                  {CONTACT_INFO.ownerName}
                </div>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  Direct transport management. Special discounts for weekly bulk industrial schedules and heavy ore transport contracts.
                </p>
              </div>

              {/* Instant Call Now / Text Now */}
              <div className="space-y-3">
                <a
                  href={`tel:${CONTACT_INFO.primaryPhone}`}
                  className="w-full py-4 px-6 bg-[#E8620A] hover:bg-[#ff7722] text-white font-heading font-normal text-2xl tracking-widest rounded transition-all flex items-center justify-center space-x-3"
                >
                  <Phone size={22} className="fill-white/10" />
                  <span>CALL: {CONTACT_INFO.primaryPhone}</span>
                </a>

                <a
                  href={CONTACT_INFO.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-4 px-6 bg-[#111318] hover:bg-[#1E3A5F] border border-[#1E3A5F] text-white font-heading font-normal text-2xl tracking-widest rounded transition-all flex items-center justify-center space-x-3"
                >
                  <MessageSquare size={22} />
                  <span>WHATSAPP COORDINATION</span>
                </a>
              </div>

            </div>

            {/* Verification Alert Info */}
            <div className="bg-[#111318] border border-[#1E3A5F]/20 p-5 rounded-lg flex items-start space-x-3">
              <Mail className="text-gray-500 mt-0.5 flex-shrink-0" size={18} />
              <div>
                <h4 className="text-gray-300 text-xs font-bold tracking-wider uppercase font-sans">E-Documents & Contracts Mail</h4>
                <p className="text-gray-400 text-xs mt-1">
                  For formal logistics RFPs, quotation files, or corporate contract proposals, please raise tickets directly to <span className="text-white font-semibold underline select-all">javeedhospettransport@gmail.com</span>.
                </p>
              </div>
            </div>

          </div>

          {/* Depot Addresses Panel */}
          <div className="lg:col-span-7 bg-gray-990 border border-gray-900 rounded-lg p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-8">
              <h3 className="font-heading text-3xl text-white tracking-widest uppercase pb-4 border-b border-gray-900">
                REGIONAL TERMINALS
              </h3>

              {/* Hospet Address Card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-950 rounded border border-[#E8620A]/30 text-[#E8620A] mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-[#E8620A] font-extrabold tracking-widest uppercase font-mono bg-[#E8620A]/10 border border-[#E8620A]/20 px-2 py-0.5 rounded">
                      HOSPET NODE
                    </span>
                    <span className="text-gray-500 font-sans text-xs">Origin Core Loading Terminal</span>
                  </div>
                  <h4 className="font-heading text-xl text-white tracking-widest uppercase mt-2 mb-1.5">
                    Hospet Loading Yard
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed select-all">
                    {CONTACT_INFO.hospetAddress}
                  </p>
                </div>
              </div>

              {/* Bangalore Address Card */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gray-950 rounded border border-[#1E3A5F]/40 text-[#1E3A5F] mt-1">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-blue-400 font-extrabold tracking-widest uppercase font-mono bg-blue-950/40 border border-blue-900/50 px-2 py-0.5 rounded">
                      BANGALORE HUB
                    </span>
                    <span className="text-gray-500 font-sans text-xs">Destination Discharge Node</span>
                  </div>
                  <h4 className="font-heading text-xl text-white tracking-widest uppercase mt-2 mb-1.5">
                    Bengaluru Industrial Transit Terminal
                  </h4>
                  <p className="text-gray-400 text-xs sm:text-sm font-sans leading-relaxed select-all">
                    {CONTACT_INFO.bangaloreAddress}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick map helper graphic info */}
            <div className="mt-8 pt-6 border-t border-gray-900">
              <span className="text-[11px] text-gray-500 uppercase tracking-widest font-sans font-bold block mb-1">
                GST REGISTRATION DETAILS
              </span>
              <p className="text-gray-400 text-[11px] leading-relaxed">
                Registered under Karnataka State tax thresholds. Daily physical dispatches are accompanied by dual-authorized driver delivery challans (DC), enabling direct and smooth inspection by national highway customs checking cells.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
