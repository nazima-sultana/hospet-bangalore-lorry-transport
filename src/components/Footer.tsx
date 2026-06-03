/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { PhoneCall, MessageCircle, ArrowUp } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Footer() {
  
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer id="footer" className="bg-[#0b0c0f] border-t-2 border-gray-950 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-900">
          
          {/* Brand Info */}
          <div className="text-center md:text-left select-none">
            <h3 className="font-heading text-xl sm:text-2xl text-white tracking-widest leading-none">
              HOSPET BANGALORE LORRY TRANSPORT
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-2 mt-2 font-sans text-xs text-gray-500 font-medium">
              <span>OWNER: {CONTACT_INFO.ownerName}</span>
              <span>•</span>
              <span className="text-[#E8620A] font-semibold">{CONTACT_INFO.gstNumber}</span>
              <span>•</span>
              <span>ESTD: 2011</span>
            </div>
          </div>

          {/* Quick Navigation anchors */}
          <div className="flex flex-wrap justify-center gap-4 text-xs font-semibold tracking-widest text-gray-400">
            <a href="#services" className="hover:text-[#E8620A] transition-colors uppercase">Services</a>
            <a href="#route" className="hover:text-[#E8620A] transition-colors uppercase">Route Map</a>
            <a href="#fleet" className="hover:text-[#E8620A] transition-colors uppercase">Fleet Specs</a>
            <a href="#quote" className="hover:text-[#E8620A] transition-colors uppercase">Get Quote</a>
          </div>

        </div>

        {/* Legal Fineprint and Back to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-gray-500 leading-relaxed font-sans">
          
          <div className="text-center sm:text-left space-y-1">
            <p>
              © {new Date().getFullYear()} Hospet Bangalore Lorry Transport. All Rights Reserved.
            </p>
            <p className="max-w-xl text-gray-600">
              Disclaimers: Transit speeds may adjust occasionally based on NH-48 toll queues, peak-hour restriction timings around Bangalore outer ring roads, or extreme monsoon factors. GPS coordination is provided via external onboard devices.
            </p>
          </div>

          {/* Back to top Trigger button */}
          <button
            onClick={handleScrollToTop}
            className="flex-shrink-0 p-3 bg-gray-950 border border-gray-800 text-gray-400 hover:text-white hover:border-[#E8620A] rounded transition-all group"
            title="Scroll back to top"
            aria-label="Scroll to top of screen"
          >
            <ArrowUp size={16} className="transform group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

      </div>
    </footer>
  );
}
