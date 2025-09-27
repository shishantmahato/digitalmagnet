import React from 'react';
import { 
  Bot, 
  MapPin, 
  Target, 
  TrendingUp, 
  ShoppingCart, 
  Mail, 
  Phone, 
  Share2,
  ArrowRight,
  Zap
} from 'lucide-react';

const serviceIcons = {
  'ai-business-automation': Bot,
  'geo-ai-optimization': MapPin,
  'ai-lead-generation': Target,
  'ai-sales-system': TrendingUp,
  'ai-ecommerce-booster': ShoppingCart,
  'ai-cold-email': Mail,
  'ai-voice-calling': Phone,
  'ai-social-media': Share2
};

interface Service {
  id: string;
  title: string;
  description: string;
}

interface ServicesProps {
  onServiceClick: (serviceId: string) => void;
  services: Service[];
}

export default function Services({ onServiceClick, services }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            AI Solutions That{' '}
            <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From automation to optimization, our AI-powered services transform how you do business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = serviceIcons[service.id] || Bot;
            return (
              <div
                key={service.id}
                className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:border-blue-200 cursor-pointer"
                onClick={() => onServiceClick(service.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-gradient-to-r from-green-100 to-teal-100 rounded-lg group-hover:from-green-200 group-hover:to-teal-200 transition-colors">
                    <IconComponent className="h-6 w-6 text-green-600 group-hover:text-green-700 transition-colors" />
                  </div>
                  <Zap className="h-4 w-4 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {service.description}
                </p>

                <div className="flex items-center text-green-600 font-medium text-sm group-hover:text-green-700 transition-colors">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-gradient-to-r from-green-50 to-teal-50 rounded-full px-6 py-3 border border-green-200">
            <Zap className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-green-700 font-medium">Ready to transform your business? Choose a service above!</span>
          </div>
        </div>
      </div>
    </section>
  );
}