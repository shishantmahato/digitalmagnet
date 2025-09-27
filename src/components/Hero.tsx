import React from 'react';
import { ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in AI automation services for my business. Can we schedule a consultation?");
    window.open(`https://wa.me/919766613391?text=${message}`, '_blank');
  };

  return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-900 via-green-800 to-teal-900 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-transparent to-teal-900/50">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Transform Your Business with{' '}
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              AI Automation
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Scale faster, cut costs, and win more customers with Digital Magnet's AI-powered solutions.
          </p>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white">
              <Zap className="h-4 w-4 mr-2 text-yellow-400" />
              <span className="text-sm font-medium">Instant ROI</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white">
              <TrendingUp className="h-4 w-4 mr-2 text-teal-400" />
              <span className="text-sm font-medium">5x Growth</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white">
              <Shield className="h-4 w-4 mr-2 text-green-400" />
              <span className="text-sm font-medium">Trusted by 500+ Businesses</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl hover:shadow-green-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={openWhatsApp}
              className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-green-500/25 transform hover:-translate-y-1 transition-all duration-300 flex items-center border-2 border-transparent hover:border-green-400"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.520-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.687"/>
              </svg>
              Chat on WhatsApp
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-green-200 text-sm mb-4">Trusted by leading businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-white/80 font-semibold">TechCorp</div>
              <div className="text-white/80 font-semibold">InnovateHub</div>
              <div className="text-white/80 font-semibold">FutureScale</div>
              <div className="text-white/80 font-semibold">AI Ventures</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}