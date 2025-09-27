import React from 'react';
import { Clock, ArrowRight, TrendingUp } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "5 Ways AI Automation Can Cut Your Business Costs by 70%",
    excerpt: "Discover the proven strategies successful companies use to dramatically reduce operational expenses through intelligent automation.",
    category: "Cost Reduction",
    readTime: "5 min read",
    image: "https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    trending: true
  },
  {
    id: 2,
    title: "Case Study: How TechFlow Increased Leads by 500% with AI",
    excerpt: "A detailed breakdown of our AI lead generation implementation that transformed a struggling startup into a market leader.",
    category: "Case Study",
    readTime: "8 min read",
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    trending: false
  },
  {
    id: 3,
    title: "The Future of E-commerce: AI-Powered Personalization",
    excerpt: "Why businesses using AI personalization are seeing 3x higher conversion rates and how you can implement it today.",
    category: "E-commerce",
    readTime: "6 min read",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    trending: true
  },
  {
    id: 4,
    title: "Voice AI Revolution: Beyond Chatbots to Intelligent Agents",
    excerpt: "How AI voice agents are replacing human customer service teams and driving 24/7 sales growth for smart businesses.",
    category: "Voice AI",
    readTime: "7 min read",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    trending: false
  },
  {
    id: 5,
    title: "ROI Calculator: Measuring the Impact of AI Process Automation",
    excerpt: "Use our proven framework to calculate exactly how much money AI automation will save your business in the first year.",
    category: "ROI Analysis",
    readTime: "4 min read",
    image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    trending: true
  },
  {
    id: 6,
    title: "Small Business Guide: AI Tools That Actually Matter",
    excerpt: "Skip the hype. Here are the only AI tools small businesses need to compete with enterprise companies on automation.",
    category: "Small Business",
    readTime: "9 min read",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    trending: false
  }
];

export default function Blog() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            AI Insights &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay ahead with the latest AI automation trends, case studies, and actionable insights
          </p>
        </div>

        {/* Featured/Trending Posts */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <TrendingUp className="h-5 w-5 text-orange-500 mr-2" />
            <h3 className="text-lg font-semibold text-gray-900">Trending Now</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => post.trending).map((post) => (
              <article key={post.id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Trending
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-600 font-medium text-sm">{post.category}</span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* All Posts */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Latest Articles</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.trending).map((post) => (
              <article key={post.id} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-blue-600 font-medium text-sm">{post.category}</span>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Stay Ahead of the AI Revolution
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Get weekly insights on AI automation, exclusive case studies, and early access to new tools that can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
          <p className="text-xs opacity-75 mt-3">No spam. Unsubscribe anytime.</p>
        </div>

        {/* Ready to Start CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Ready to implement AI automation in your business?</p>
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Book Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}