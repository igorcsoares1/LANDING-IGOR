'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { UrgencyBanner } from '@/components/UrgencyBanner';
import { FocusAreas } from '@/components/FocusAreas';
import { Professional } from '@/components/Professional';
import { Benefits } from '@/components/Benefits';
import { StepByStep } from '@/components/StepByStep';
import { Approaches } from '@/components/Approaches';
import { Testimonials } from '@/components/Testimonials';
import { Quiz } from '@/components/Quiz';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppChat } from '@/components/WhatsAppChat';
import { ExitPopup } from '@/components/ExitPopup';

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
