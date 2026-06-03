/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, FleetLorry, TestimonialItem } from "./types";

export const SERVICES: ServiceItem[] = [
  {
    id: "ftl",
    title: "Full Truck Load (FTL)",
    description: "Dedicated long-haul lorries from factory doors in Hospet straight to Bangalore warehouses. Zero intermediate handling, maximum velocity, and absolute cargo security.",
    badge: "Enterprise Standard",
    iconName: "Truck",
    loads: ["Raw Steel & Pellets", "Heavy Corporate Shipments", "Custom Manufactured Batches", "Cement & Building Materials"]
  },
  {
    id: "ptl",
    title: "Part Truck Load (PTL)",
    description: "Industrial consolidation network for weight-optimized shipments. Pay ONLY for the space you rent, with systematic hub tracking and swift regional transit times.",
    badge: "Cost-Optimized",
    iconName: "Layers",
    loads: ["Industrial Spares", "Palletized Engineering Cargo", "Medium Machinery Pieces", "Retail Consolidated Bags"]
  },
  {
    id: "mining-ore",
    title: "Iron Ore & Mining Specialty",
    description: "High-strength open-bed tippers, heavy-duty flatbeds, and dumpers fitted for rough terrains. Tailored specifically for Hospet's mining yards, stone crushing clusters, and granite quarries.",
    badge: "Hospet Specialty",
    iconName: "HardHat",
    loads: ["Sponge Iron & Slag", "Iron Ore Pellets", "Heavy Granite Blocks", "Crushed Gravel & Mineral Sands"]
  },
  {
    id: "factory-runs",
    title: "Factory-To-Factory Runs",
    description: "Scheduled daily runs connecting production corridors. Completely GST-ready with automated e-way bill verification, prompt delivery receipts, and absolute contract reliability.",
    badge: "GST-Compliant",
    iconName: "Factory",
    loads: ["Machinery Tooling Parts", "Automotive Sub-assemblies", "Chemical & Slag Drums", "Finished Warehouse Stocks"]
  }
];

export const FLEET: FleetLorry[] = [
  {
    id: "mini-truck",
    name: "Mini Truck",
    capacity: "1 - 3 Tons",
    suitableFor: "Urgent engineering spares, high-value small machinery components, inner-city Bangalore distribution.",
    dimensions: "10 x 5 x 6 Feet Open/Closed",
    tyreCount: 4,
    iconName: "TruckThin"
  },
  {
    id: "medium-lorry",
    name: "Medium Rigid Lorry",
    capacity: "5 - 10 Tons",
    suitableFor: "Machinery components, electrical transformers, industrial raw materials, fabrication sheets.",
    dimensions: "17 x 7 x 7 Feet Open Semi-Bed",
    tyreCount: 6,
    iconName: "TruckMedium"
  },
  {
    id: "heavy-truck",
    name: "Heavy-Duty Multi-Axle Lorry",
    capacity: "15 - 25 Tons",
    suitableFor: "Hospet iron ore bags, hot-rolled steel sheets, bulk mining loads, cement foundations, heavy factory machinery.",
    dimensions: "22 x 8 x 8 Feet Heavy Flatbed / High-Side",
    tyreCount: 10,
    iconName: "TruckHeavy"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "test-1",
    clientName: "Mohan Kumar",
    companyName: "Hospet Alloys Ltd",
    industry: "Sponge Iron & Steel Pellets",
    feedback: "We ship over 45 metric tons of heavy iron billets every day to Bangalore distributors. Shaik Javeed's lorry dispatch is incredibly punctual. The drivers are professional, route-hardened, and understand the NH-50 terrain perfectly.",
    rating: 5
  },
  {
    id: "test-2",
    clientName: "Ramesh Chandran",
    companyName: "Bangalore Power Transmissions",
    industry: "Heavy Electrical Machinery",
    feedback: "Excellent factory-to-factory container coordination. Handled our heavy custom transformers from Yeshwanthpur Industrial Area straight to core mining operations in Sandur with strict GPS oversight. GST billing and paperwork are flawless.",
    rating: 5
  },
  {
    id: "test-3",
    clientName: "Sharnappa Gowda",
    companyName: "Gowda Ore & Minerals",
    industry: "Extractive Mining & Trading",
    feedback: "For ore logistics from the Hospet yards, Shaik's heavy multi-axle trucks are our default standard. Extremely dependable rates, straightforward billing, and Shaik Javeed is reachable day or night on direct line.",
    rating: 5
  }
];

export const CONTACT_INFO = {
  ownerName: "Shaik Javeed",
  primaryPhone: "9393185621",
  whatsappNumber: "919393185621",
  whatsappUrl: "https://wa.me/919393185621",
  gstNumber: "GST-READY ENTERPRISE SERVICE",
  hospetAddress: "NH-50 Bypass Cargo Road, Opp. Extractive Mining Yards, Hospet, Karnataka - 583201",
  bangaloreAddress: "Logistics Terminal Hub, Near Ring Road Access, Yeshwanthpur Industrial Area, Bangalore, Karnataka - 560022",
  commuteStats: {
    distance: "~340 KM",
    duration: "8 - 10 Hours Transit",
    frequency: "Daily Departures (Hospet ⇌ Bangalore)",
    security: "En-Route GPS Tracking Enabled"
  }
};
