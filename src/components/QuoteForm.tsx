/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Send, FileCheck, PhoneCall, CheckCircle, ShieldCheck } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    cargoType: "Sponge Iron & Ore Pellets",
    weight: "15 - 25 Tons (Heavy Lorry)",
    remarks: ""
  });
  
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Field validations
    if (!formData.name.trim()) {
      setErrorMessage("Please specify your name or enterprise company name.");
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit primary phone number.");
      return;
    }

    // Compose formatted WhatsApp payload message
    const lineBreak = "%0A";
    const header = `Hi Shaik Javeed, I need a lorry from Hospet to Bangalore.${lineBreak}${lineBreak}`;
    const divider = `-----------------------------${lineBreak}`;
    const nameSection = `👤 Client Name: ${encodeURIComponent(formData.name)}${lineBreak}`;
    const phoneSection = `📞 Phone/GSM: ${encodeURIComponent(formData.phone)}${lineBreak}`;
    const cargoSection = `📦 Cargo Profile: ${encodeURIComponent(formData.cargoType)}${lineBreak}`;
    const wtSection = `⚖️ Approximate Weight: ${encodeURIComponent(formData.weight)}${lineBreak}`;
    const remarksSection = formData.remarks.trim() 
      ? `📝 Additional Remarks: ${encodeURIComponent(formData.remarks)}${lineBreak}` 
      : "";
    const footer = `${divider}⚡ Sent from Hospet-Bangalore B2B portal`;

    const fullMessage = `${header}${divider}${nameSection}${phoneSection}${cargoSection}${wtSection}${remarksSection}${footer}`;
    
    // Launch secure WhatsApp API redirect
    const targetUrl = `https://wa.me/919393185621?text=${fullMessage}`;
    
    setShowConfirmation(true);
    setErrorMessage("");

    // Trigger window location after brief interactive feedback
    setTimeout(() => {
      window.open(targetUrl, "_blank");
    }, 1200);
  };

  const cargoOptions = [
    "Sponge Iron & Ore Pellets",
    "Reinforced Construction Rebars / Slabs",
    "Heavy Cast/Forged Machinery Blocks",
    "Bulk Agricultural Feed / Grains",
    "Cement & Building Materials",
    "Scrap Metals & Turning Slag",
    "Custom Manufacturing Spares / Tooling",
    "Consolidated Box Cargo"
  ];

  const weightOptions = [
    "1 - 3 Tons (Mini Pickup)",
    "5 - 10 Tons (Medium Lorry)",
    "15 - 20 Tons (Multi-axle)",
    "20 - 25 Tons (Heavy Flatbed)",
    "25+ Tons (Super Heavy Loading)"
  ];

  return (
    <section id="quote" className="py-24 bg-[#111318] border-b border-gray-950 relative">
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-[#E8620A]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E8620A] text-xs font-bold tracking-widest uppercase block mb-3">
            LOGISTICS PRICING
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl text-white tracking-wide uppercase">
            REQUEST A DIRECT TRANSPORT QUOTE
          </h2>
          <div className="w-24 h-1 bg-[#E8620A] mx-auto mt-4 mb-4" />
          <p className="text-gray-400 text-sm sm:text-base">
            No broker commissions. Fill in your cargo weight metrics below to initiate a structured B2B dispatch proposal straight to dispatch coordinator Shaik Javeed on WhatsApp.
          </p>
        </div>

        {/* Dual Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Direct Form Panel */}
          <div className="lg:col-span-7 bg-gray-950 border border-gray-800 p-6 sm:p-8 rounded-lg relative">
            
            {showConfirmation ? (
              <div id="quote-success-panel" className="text-center py-12 flex flex-col items-center justify-center">
                <div className="h-16 w-16 bg-[#E8620A]/10 border border-[#E8620A] rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={36} className="text-emerald-400 animate-bounce" />
                </div>
                <h3 className="font-heading text-3xl text-white tracking-widest uppercase mb-2">
                  GENERATING QUOTE LOG
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm max-w-sm mb-6">
                  Your transport parameters are compiled. Redirecting to Shaik Javeed's direct line on WhatsApp...
                </p>
                <button
                  type="button"
                  onClick={() => setShowConfirmation(false)}
                  className="text-xs text-gray-500 underline hover:text-[#E8620A]"
                >
                  Adjust values & try again
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form Warning/Instruction Panel */}
                <div className="flex items-center space-x-2.5 bg-gray-900/60 p-3 rounded border border-[#1E3A5F]/40">
                  <ShieldCheck size={18} className="text-[#E8620A] flex-shrink-0" />
                  <span className="text-[11px] font-sans font-bold tracking-wider text-gray-300 uppercase">
                    DIRECT DISPATCH & DISCOUNT FOR DAILY BOOKINGS
                  </span>
                </div>

                {errorMessage && (
                  <div className="p-3.5 bg-red-950/50 border border-red-900 rounded text-xs text-red-400 font-medium font-sans">
                    ⚠️ {errorMessage}
                  </div>
                )}

                {/* Name / Enterprise field */}
                <div>
                  <label htmlFor="quote-name" className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest block mb-2">
                    Enterprise / Caller Name <span className="text-[#E8620A]">*</span>
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., Mohan Kumar / Hospet Alloys Ltd"
                    className="w-full bg-[#111318] border border-gray-800 focus:border-[#E8620A] focus:ring-0 text-white p-3 rounded text-sm placeholder-gray-600 transition-colors"
                    required
                  />
                </div>

                {/* Phone number */}
                <div>
                  <label htmlFor="quote-phone" className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest block mb-2">
                    Contact Phone Number <span className="text-[#E8620A]">*</span>
                  </label>
                  <input
                    id="quote-phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g., 93931 85621"
                    className="w-full bg-[#111318] border border-gray-800 focus:border-[#E8620A] focus:ring-0 text-white p-3 rounded text-sm placeholder-gray-600 transition-colors"
                    maxLength={15}
                    required
                  />
                </div>

                {/* Cargo Select Option */}
                <div>
                  <label htmlFor="quote-cargo-select" className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest block mb-2">
                    Cargo Commodity Type <span className="text-[#E8620A]">*</span>
                  </label>
                  <select
                    id="quote-cargo-select"
                    name="cargoType"
                    value={formData.cargoType}
                    onChange={handleInputChange}
                    className="w-full bg-[#111318] border border-gray-800 focus:border-[#E8620A] focus:ring-0 text-white p-3 rounded text-sm transition-colors"
                  >
                    {cargoOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-gray-950 text-gray-300">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Cargo Weight field */}
                <div>
                  <label htmlFor="quote-weight-select" className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest block mb-2">
                    Estimated Cargo Weight <span className="text-[#E8620A]">*</span>
                  </label>
                  <select
                    id="quote-weight-select"
                    name="weight"
                    value={formData.weight}
                    onChange={handleInputChange}
                    className="w-full bg-[#111318] border border-gray-800 focus:border-[#E8620A] focus:ring-0 text-white p-3 rounded text-sm transition-colors"
                  >
                    {weightOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-gray-950 text-gray-300">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Special Remarks / Logistics notes */}
                <div>
                  <label htmlFor="quote-remarks" className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest block mb-2 font-sans">
                    Loading Points / Target Dispatch Schedule (Optional)
                  </label>
                  <textarea
                    id="quote-remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleInputChange}
                    placeholder="e.g., Daily regular contract need. Loading bypass yard Hospet, unloading Peenya Industrial Area Bangalore."
                    rows={3}
                    className="w-full bg-[#111318] border border-gray-800 focus:border-[#E8620A] focus:ring-0 text-white p-3 rounded text-xs placeholder-gray-600 transition-colors resize-none font-sans"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  id="quote-submit-btn"
                  className="w-full py-4 bg-[#E8620A] hover:bg-[#ff7722] text-white font-heading tracking-widest text-2xl uppercase rounded transition-all flex items-center justify-center space-x-2"
                >
                  <Send size={18} />
                  <span>SUBMIT QUOTE VIA WHATSAPP</span>
                </button>

              </form>
            )}

          </div>

          {/* Prompt Sidebar Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Owner Helpline Card */}
            <div className="bg-gray-900/60 border border-[#1E3A5F] p-6 rounded-lg">
              <h3 className="font-heading text-2xl text-white tracking-widest uppercase mb-4">
                TELEPHONE COORDINATION
              </h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6 font-sans">
                Prefer human interaction? Discuss immediate heavy-haul contract rates or bulk cargo movements on phone. Line is active 24/7 for Hospet ⇌ Bangalore industrial cargo.
              </p>

              <div className="space-y-4">
                <a
                  href={`tel:${CONTACT_INFO.primaryPhone}`}
                  className="p-4 bg-gray-950 border border-gray-800 hover:border-[#E8620A] rounded flex items-center justify-between group transition-colors"
                >
                  <div>
                    <span className="text-[10px] text-[#E8620A] font-extrabold block tracking-wide">DIRECT PHONE BOOKING</span>
                    <span className="text-white text-base font-bold font-mono tracking-widest">{CONTACT_INFO.primaryPhone}</span>
                  </div>
                  <div className="p-2.5 bg-gray-900 border border-gray-800 rounded group-hover:border-[#E8620A]">
                    <PhoneCall size={16} className="text-emerald-400" />
                  </div>
                </a>

                {/* Owner info */}
                <div className="bg-gray-950/60 p-4 rounded border border-gray-800/80">
                  <div className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">OWNER & GENERAL MANAGER</div>
                  <div className="text-sm font-semibold text-white tracking-wider mt-0.5">{CONTACT_INFO.ownerName}</div>
                  <div className="text-[11px] text-gray-400 mt-1 font-sans">
                    Specialist, National-Highway transport logistics since 15+ years.
                  </div>
                </div>
              </div>
            </div>

            {/* Quote security guarantees */}
            <div className="bg-gray-950 p-6 rounded border border-gray-900 space-y-4 text-xs font-sans">
              <div className="flex items-start space-x-3">
                <div className="bg-emerald-950 px-2 py-0.5 text-emerald-400 border border-emerald-900 rounded font-semibold text-[10px]">FIXED</div>
                <div>
                  <h4 className="text-white font-black tracking-wide uppercase">No Hidden Freight Fees</h4>
                  <p className="text-gray-400 leading-relaxed mt-0.5">Toll fees, loading advice, and driver allowances are locked inside our transparent custom invoices.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-emerald-950 px-2 py-0.5 text-emerald-400 border border-emerald-900 rounded font-semibold text-[10px]">E-WAY</div>
                <div>
                  <h4 className="text-white font-black tracking-wide uppercase">E-Way Bill Authentication</h4>
                  <p className="text-gray-400 leading-relaxed mt-0.5">We fully match pre-scheduled state e-way compliance before releasing trucks from our depot lines.</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
