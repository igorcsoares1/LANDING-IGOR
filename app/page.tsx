'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FocusAreas } from '@/components/FocusAreas';
import { Professional } from '@/components/Professional';
import { Benefits } from '@/components/Benefits';
import { StepByStep } from '@/components/StepByStep';
import { Approaches } from '@/components/Approaches';
import { EthicalCommitment } from '@/components/EthicalCommitment';
import { Quiz } from '@/components/Quiz';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppChat } from '@/components/WhatsAppChat';
import { ExitPopup } from '@/components/ExitPopup';

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <FocusAreas />
      <Professional />
      <Benefits />
      <StepByStep />
      <Approaches />
      <EthicalCommitment />
      <Quiz />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppChat />
      <ExitPopup />
    </main>
  );
}
