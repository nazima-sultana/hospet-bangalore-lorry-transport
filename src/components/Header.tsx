/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Phone, MessageSquare, Menu, X, Landmark, ShieldCheck } from "lucide-react";
import { CONTACT_INFO } from "../data";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "SERVICES", href: "#services" },
    { label: "ROUTE INFO", href: "#route" },
    { label: "WHY US", href: "#why-us" },
    { label: "FLEET", href: "#fleet" },
    { label: "TESTIMONIALS", href: "#testimonials" },
    { label: "QUICK QUOTE", href: "#quote" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header id="header" className="sticky top-0 z-50 bg-[#111318]/95 backdrop-blur-md border-b-2 border-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand Name */}
          <a href="#hero" className="flex flex-col select-none group">
            <span className="font-heading text-2xl sm:text-3xl tracking-wider text-white leading-none group-hover:text-[#E8620A] transition-colors">
              HOSPET BANGALORE
            </span>
            <div className="flex items-center space-x-2">
              <span className="font-sans text-xs font-semibold tracking-widest text-[#E8620A]">
                LORRY TRANSPORT
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#E8620A]" />
              <span className="font-sans text-[10px] text-gray-400 font-semibold tracking-wider">
                B2B CARGO
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-gray-300 hover:text-[#E8620A] text-xs font-semibold tracking-widest transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Urgent Hotline Options */}
          <div className="hidden sm:flex items-center space-x-4">
            <div className="hidden xl:flex flex-col text-right">
              <div className="flex items-center text-xs text-green-400 font-semibold space-x-1.5 justify-end">
                <ShieldCheck size={14} />
                <span>GST-READY BILLING</span>
              </div>
              <span className="text-[10px] text-gray-400">Daily Industrial Departures</span>
            </div>
            
            <a
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="p-2 sm:px-4 sm:py-2.5 bg-gray-900 border border-[#1E3A5F] hover:border-[#E8620A] rounded flex items-center space-x-2 text-white transition-all text-xs font-semibold tracking-wider"
              title="Call Transport Coordinator"
            >
              <Phone size={14} className="text-[#E8620A]" />
              <span className="hidden sm:inline">CALL: {CONTACT_INFO.primaryPhone}</span>
            </a>
            
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-[#E8620A] hover:bg-[#ff7722] text-white rounded flex items-center space-x-2 transition-all text-xs font-semibold tracking-wider"
            >
              <MessageSquare size={14} />
              <span>QUICK CHAT</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="p-2 bg-gray-900 border border-[#1E3A5F] rounded text-emerald-400 sm:hidden"
            >
              <Phone size={18} />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 bg-gray-900 border border-[#1E3A5F] rounded text-gray-400 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#111318] border-b-2 border-[#1E3A5F] px-4 pt-2 pb-6 space-y-2">
          <div className="flex flex-col space-y-1 my-3 bg-gray-900/60 p-3 rounded border border-gray-800">
            <div className="flex items-center space-x-2 text-xs text-white font-bold">
              <Landmark size={14} className="text-[#E8620A]" />
              <span>SHAIK JAVEED (OWNER)</span>
            </div>
            <div className="text-gray-400 text-[11px] leading-tight mt-1">
              Hospet Iron-Ore Logistics & Bangalore Hub Dispatch.
            </div>
          </div>
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="block px-3 py-2.5 rounded text-gray-300 hover:bg-[#1E3A5F]/40 hover:text-[#E8620A] text-xs font-semibold tracking-widest transition-colors"
            >
              • {item.label}
            </a>
          ))}
          <div className="pt-4 grid grid-cols-2 gap-3">
            <a
              href={`tel:${CONTACT_INFO.primaryPhone}`}
              className="py-3 bg-gray-900 border border-[#1E3A5F] text-center rounded flex items-center justify-center space-x-2 text-white text-xs font-bold tracking-wider"
            >
              <Phone size={14} className="text-[#E8620A]" />
              <span>CALL NOW</span>
            </a>
            <a
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="py-3 bg-[#E8620A] text-center rounded flex items-center justify-center space-x-2 text-white text-xs font-bold tracking-wider"
            >
              <MessageSquare size={14} />
              <span>WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
