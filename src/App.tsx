import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ServicePage from './pages/ServicePage';

const services = [
  {
    id: 'ai-business-automation',
    title: 'AI Business Process Automation',
    description: 'End-to-end automation with AI agents, RPA, and integrations',
    problem: 'Manual processes are slowing down your business and eating into profits',
    solution: 'Our AI-powered automation eliminates repetitive tasks and streamlines workflows',
    benefits: ['Reduce operational costs by up to 70%', 'Increase productivity by 5x', '24/7 automated operations', 'Zero human errors'],
    keywords: 'AI business automation, process automation, RPA, workflow automation'
  },
  {
    id: 'geo-ai-optimization',
    title: 'Geo-AI Optimization Suite',
    description: 'Smart geo-targeting for ads, logistics, and segmentation',
    problem: 'Generic targeting wastes ad spend and misses local opportunities',
    solution: 'AI-powered geo-intelligence optimizes targeting for maximum ROI',
    benefits: ['Increase ad ROI by 200%', 'Perfect local targeting', 'Logistics optimization', 'Real-time geo analytics'],
    keywords: 'geo-targeting AI, location-based marketing, geo-optimization, local SEO AI'
  },
  {
    id: 'ai-lead-generation',
    title: 'AI-Driven Lead Generation Engine',
    description: 'AI prospecting, qualification, and nurturing',
    problem: 'Traditional lead generation is time-consuming and low-quality',
    solution: 'AI identifies, qualifies, and nurtures leads automatically',
    benefits: ['10x more qualified leads', 'Automated lead scoring', 'Personalized nurturing', 'Higher conversion rates'],
    keywords: 'AI lead generation, automated prospecting, lead qualification, lead nurturing AI'
  },
  {
    id: 'ai-sales-system',
    title: 'AI Automatic Sales System',
    description: 'Funnels, chatbots, CRM automation, predictive deal closing',
    problem: 'Sales teams spend too much time on admin and miss opportunities',
    solution: 'End-to-end AI sales automation from lead to close',
    benefits: ['Increase sales by 300%', 'Predictive deal insights', 'Automated follow-ups', 'Smart pipeline management'],
    keywords: 'AI sales automation, automated sales funnel, AI CRM, predictive sales'
  },
  {
    id: 'ai-ecommerce-booster',
    title: 'AI Ecommerce Growth Booster',
    description: 'Smart recommendations, upsells, abandoned cart recovery',
    problem: 'Ecommerce stores struggle with conversion and customer retention',
    solution: 'AI-powered personalization and automation boost sales',
    benefits: ['Increase conversion by 150%', 'Smart product recommendations', 'Automated cart recovery', 'Dynamic pricing'],
    keywords: 'AI ecommerce automation, smart recommendations, cart abandonment AI, ecommerce optimization'
  },
  {
    id: 'ai-cold-email',
    title: 'AI Cold Email Domination',
    description: 'Hyper-personalized AI email campaigns with automation',
    problem: 'Cold emails get ignored or marked as spam',
    solution: 'AI creates personalized emails that get responses',
    benefits: ['50%+ open rates', 'Hyper-personalization', 'Automated sequences', 'Compliance guaranteed'],
    keywords: 'AI cold email, automated email marketing, personalized email AI, email automation'
  },
  {
    id: 'ai-voice-calling',
    title: 'AI Voice Calling Agent',
    description: 'Scalable AI-powered sales & support voice agents',
    problem: 'Phone sales and support are expensive and limited by human availability',
    solution: 'AI voice agents handle calls 24/7 with human-like conversation',
    benefits: ['24/7 availability', 'Consistent quality', 'Infinite scalability', 'Multilingual support'],
    keywords: 'AI voice agent, automated calling, AI phone system, voice automation'
  },
  {
    id: 'ai-social-media',
    title: 'AI Social Media Automation Hub',
    description: 'AI content creation, scheduling, engagement, analytics',
    problem: 'Social media management is time-consuming and inconsistent',
    solution: 'AI handles all aspects of social media automatically',
    benefits: ['10x content output', 'Consistent engagement', 'Automated scheduling', 'Data-driven optimization'],
    keywords: 'AI social media automation, automated content creation, social media AI, engagement automation'
  }
];

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentService, setCurrentService] = useState(null);

  const navigateToService = (serviceId) => {
    const service = services.find(s => s.id === serviceId);
    setCurrentService(service);
    setCurrentPage('service');
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setCurrentService(null);
  };

  if (currentPage === 'service' && currentService) {
    return (
      <>
        <Header onNavigateHome={navigateToHome} />
        <ServicePage service={currentService} />
        <Footer />
        <WhatsAppButton />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onNavigateHome={navigateToHome} />
      <Hero />
      <Services onServiceClick={navigateToService} services={services} />
      <About />
      <Testimonials />
      <Contact />
      <Blog />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;