/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string; // Used to dynamically map Lucide Icons
  loads?: string[];
}

export interface FleetLorry {
  id: string;
  name: string;
  capacity: string;
  suitableFor: string;
  dimensions: string;
  tyreCount: number;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  companyName: string;
  industry: string;
  feedback: string;
  rating: number;
}

export interface QuoteInput {
  name: string;
  phone: string;
  cargoType: string;
  weight: string;
  remarks?: string;
}
