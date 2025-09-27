import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    company: "TechFlow Solutions",
    role: "CEO",
    content: "Digital Magnet transformed our entire operation. Their AI automation reduced our processing time by 80% and increased our profit margins significantly. The ROI was visible within the first month.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "Growth Dynamics",
    role: "Founder",
    content: "The AI lead generation system is incredible. We went from 50 leads per month to over 500 qualified leads. Our sales team can't keep up with the quality prospects coming in.",
    rating: 5,
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Emily Watson",
    company: "RetailMax",
    role: "Operations Director",
    content: "Their ecommerce AI boosted our conversion rate by 180%. The smart recommendations and automated cart recovery alone paid for the entire investment. Exceptional service and results.",
    rating: 5,
    image: "https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 4,
    name: "David Kim",
    company: "LogiCorp",
    role: "CTO",
    content: "The geo-AI optimization suite revolutionized our logistics. 40% reduction in delivery costs and 99% accuracy in route optimization. Digital Magnet's expertise is unmatched.",
    rating: 5,
    image: "https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    company: "ServicePro",
    role: "VP Marketing",
    content: "The AI cold email system is phenomenal. 65% open rates and 25% response rates on cold outreach. We've closed more deals in 3 months than we did in the entire previous year.",
    rating: 5,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Trusted by Businesses{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Growing with AI
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI solutions have transformed businesses across industries
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 h-8 w-8 text-blue-200" />
            
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-gray-700 text-center mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center justify-center">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-lg">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-gray-500">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-blue-200"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow border border-gray-200 hover:border-blue-200"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Join 500+ businesses that trust Digital Magnet</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <span className="font-semibold text-gray-700">TechCorp</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <span className="font-semibold text-gray-700">InnovateHub</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <span className="font-semibold text-gray-700">FutureScale</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <span className="font-semibold text-gray-700">AI Ventures</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-md">
              <span className="font-semibold text-gray-700">GrowthMax</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}