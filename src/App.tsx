/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import RouteHighlight from "./components/RouteHighlight";
import WhyUs from "./components/WhyUs";
import Fleet from "./components/Fleet";
import QuoteForm from "./components/QuoteForm";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#111318] text-gray-200 font-sans selection:bg-[#E8620A] selection:text-white scroll-smooth antialiased">
      
      {/* Sticky Navigation Hub */}
      <Header />

      {/* Main Sections */}
      <main>
        {/* Section 1: Hero Container */}
        <Hero />

        {/* Section 2: Logistics Services Grid */}
        <Services />

        {/* Section 3: Hospet to Bangalore Route Tracker */}
        <RouteHighlight />

        {/* Section 4: Why Choose Us (B2B Value Cards) */}
        <WhyUs />

        {/* Section 5: Heavy Lorry Fleets Specification */}
        <Fleet />

        {/* Section 6: Dynamic Interactive Quote Request Tool */}
        <QuoteForm />

        {/* Section 7: Industrial Client Trust Reviews */}
        <Testimonials />

        {/* Section 8: Direct Contact & Depot Addresses */}
        <Contact />
      </main>

      {/* Section 9: Root Industry Footer */}
      <Footer />

    </div>
  );
}

