import React from 'react';
import { Metadata } from 'next';
import HomePage from '@/components/HomePage';
import Services from '@/components/Services';
import Pricing from '@/components/Pricing';
import About from '@/components/About';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'Ignite Digital Marketing',
  description: 'Spark your digital success with Ignite Digital Marketing',
};

export default function Home() {
  return <HomePage />;
}