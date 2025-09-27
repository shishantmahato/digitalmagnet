import React from 'react';
import { CheckCircle, ArrowRight, Zap, TrendingUp, Shield, Star } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  benefits: string[];
  keywords: string;
}

interface ServicePageProps {
  service: Service;
}

export default function ServicePage({ service }: ServicePageProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(`Hi! I'm interested in ${service.title} for my business. Can we schedule a consultation to discuss this?`);
    window.open(`https://wa.me/919766613391?text=${message}`, '_blank');
  };

  // Mock case study data based on service
  const getCaseStudy = () => {
    const caseStudies = {
      'ai-business-automation': {
        company: 'TechFlow Solutions',
        industry: 'Software Services',
        challenge: 'Manual invoice processing taking 40+ hours weekly',
        result: '80% time reduction, $50K annual savings',
        metric: '5x faster processing'
      },
      'geo-ai-optimization': {
        company: 'LogiCorp Delivery',
        industry: 'Logistics',
        challenge: 'Inefficient delivery routes costing $200K annually',
        result: '40% cost reduction, 99% route accuracy',
        metric: '$80K saved per quarter'
      },
      'ai-lead-generation': {
        company: 'Growth Dynamics',
        industry: 'B2B Services',
        challenge: 'Only 50 qualified leads per month',
        result: '500+ qualified leads monthly',
        metric: '10x lead increase'
      },
      'ai-sales-system': {
        company: 'SalesMax Pro',
        industry: 'Real Estate',
        challenge: 'Low conversion rates and missed follow-ups',
        result: '300% increase in sales, 95% follow-up rate',
        metric: '$2M additional revenue'
      },
      'ai-ecommerce-booster': {
        company: 'RetailMax',
        industry: 'E-commerce',
        challenge: '2% conversion rate and high cart abandonment',
        result: '180% conversion increase, 60% cart recovery',
        metric: '$500K revenue boost'
      },
      'ai-cold-email': {
        company: 'ServicePro',
        industry: 'Professional Services',
        challenge: '5% email open rates, poor response',
        result: '65% open rates, 25% response rates',
        metric: '300% more meetings booked'
      },
      'ai-voice-calling': {
        company: 'CallCenter Plus',
        industry: 'Customer Service',
        challenge: '24/7 support costs and inconsistent quality',
        result: '70% cost reduction, 99.5% uptime',
        metric: '24/7 AI availability'
      },
      'ai-social-media': {
        company: 'BrandBoost',
        industry: 'Marketing Agency',
        challenge: 'Time-consuming content creation and scheduling',
        result: '10x content output, 400% engagement increase',
        metric: '90% time savings'
      }
    };

    return caseStudies[service.id] || caseStudies['ai-business-automation'];
  };

  const caseStudy = getCaseStudy();

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              {service.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openWhatsApp}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-green-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
                </svg>
                WhatsApp Now
              </button>
              
              <button
                onClick={scrollToContact}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
              >
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Problem */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Zap className="h-6 w-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-red-800 ml-4">The Problem</h2>
              </div>
              <p className="text-red-700 text-lg leading-relaxed">
                {service.problem}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-green-800 ml-4">Our Solution</h2>
              </div>
              <p className="text-green-700 text-lg leading-relaxed">
                {service.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Proven Results
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of businesses that have already transformed their operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:border-blue-200 transition-colors">
                <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1 flex-shrink-0" />
                <span className="text-gray-800 font-medium text-lg">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Get These Results for Your Business
            </button>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium text-sm">Success Story</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Real Results from{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Real Businesses
              </span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Company Info */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{caseStudy.company}</h3>
                <p className="text-blue-600 font-medium">{caseStudy.industry}</p>
              </div>

              {/* Challenge & Result */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-700">{caseStudy.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Result:</h4>
                  <p className="text-gray-700">{caseStudy.result}</p>
                </div>

                {/* Key Metric */}
                <div className="bg-white rounded-lg p-6 text-center border border-blue-200">
                  <div className="text-3xl font-bold text-blue-600 mb-2">{caseStudy.metric}</div>
                  <div className="text-gray-600">Key Achievement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join the hundreds of businesses already transforming with {service.title}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              Book Free Consultation
            </button>
            
            <button
              onClick={openWhatsApp}
              className="bg-green-600 hover:bg-green-700 border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-lg font-semibold text-lg shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
              </svg>
              Get Instant Help
            </button>
          </div>

          <p className="text-sm opacity-75 mt-6">
            Free consultation • No obligations • Expert advice in 24 hours
          </p>
        </div>
      </section>

      {/* Add Contact Section at bottom for scroll functionality */}
      <div id="contact" className="h-1"></div>
    </div>
  );
}