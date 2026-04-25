'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Static imports for critical above-the-fold content
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { UrgencyBanner } from '@/components/UrgencyBanner';

// Dynamic imports for below-the-fold content
const FocusAreas = dynamic(() => import('@/components/FocusAreas').then(mod => mod.FocusAreas));
const Professional = dynamic(() => import('@/components/Professional').then(mod => mod.Professional));
const Benefits = dynamic(() => import('@/components/Benefits').then(mod => mod.Benefits));
const StepByStep = dynamic(() => import('@/components/StepByStep').then(mod => mod.StepByStep));
const Approaches = dynamic(() => import('@/components/Approaches').then(mod => mod.Approaches));
const Testimonials = dynamic(() => import('@/components/Testimonials').then(mod => mod.Testimonials));
const Quiz = dynamic(() => import('@/components/Quiz').then(mod => mod.Quiz));
const FAQ = dynamic(() => import('@/components/FAQ').then(mod => mod.FAQ));
const Contact = dynamic(() => import('@/components/Contact').then(mod => mod.Contact));
const Footer = dynamic(() => import('@/components/Footer').then(mod => mod.Footer));
const WhatsAppChat = dynamic(() => import('@/components/WhatsAppChat').then(mod => mod.WhatsAppChat), { ssr: false });
const ExitPopup = dynamic(() => import('@/components/ExitPopup').then(mod => mod.ExitPopup), { ssr: false });

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <UrgencyBanner />
      <Navbar />
      <Hero />
      <FocusAreas />
      <Professional />
      <Benefits />
      <StepByStep />
      <Approaches />
      <Testimonials />
      <Quiz />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppChat />
      <ExitPopup />
    </main>
  );
}
