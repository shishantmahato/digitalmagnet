import React from 'react';
import { CheckCircle, Users, Rocket, Shield, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '500+', label: 'Businesses Transformed' },
    { icon: TrendingUp, value: '300%', label: 'Average ROI Increase' },
    { icon: Rocket, value: '5x', label: 'Productivity Boost' },
    { icon: Shield, value: '99.9%', label: 'Uptime Guarantee' }
  ];

  const features = [
    'Custom AI solutions tailored to your business',
    'Seamless integration with existing systems',
    '24/7 monitoring and support',
    'Scalable architecture that grows with you',
    'ROI-focused implementation strategy',
    'Expert team with 50+ years combined experience'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 mb-6">
              <Award className="h-4 w-4 text-blue-600 mr-2" />
              <span className="text-blue-700 font-medium text-sm">Award-Winning AI Agency</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Your Partner in{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Transformation
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Digital Magnet, we believe every business deserves to harness the power of AI. 
              Our mission is to make advanced AI automation accessible, affordable, and incredibly effective.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We've helped over 500 businesses cut costs by 70%, increase productivity by 5x, and scale 
              operations without the traditional limitations. From startups to enterprises, our AI solutions 
              drive real, measurable results.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200">
              Start Your AI Journey
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            To democratize AI automation and help businesses worldwide achieve unprecedented growth, 
            efficiency, and competitive advantage through intelligent technology solutions.
          </p>
        </div>
      </div>
    </section>
  );
}