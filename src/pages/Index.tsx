
import { useState, useEffect } from 'react';
import { ArrowRight, Code, Database, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left Content */}
          <div className={`lg:w-1/2 space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
                Chandru MDF
              </h1>
              <h2 className="text-2xl lg:text-3xl font-light text-purple-200 animate-fade-in animation-delay-500">
                Data Engineering Fresher
              </h2>
            </div>

            <p className={`text-lg lg:text-xl text-gray-300 leading-relaxed max-w-lg transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              Passionate about transforming raw data into meaningful insights. Specialized in building robust data pipelines, 
              implementing ETL processes, and creating scalable data solutions that drive business decisions.
            </p>

            <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-800/30 rounded-full border border-purple-500/30">
                <Database className="w-5 h-5 text-purple-400" />
                <span className="text-sm">Data Engineering</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-800/30 rounded-full border border-blue-500/30">
                <Code className="w-5 h-5 text-blue-400" />
                <span className="text-sm">ETL Pipelines</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-800/30 rounded-full border border-green-500/30">
                <BarChart3 className="w-5 h-5 text-green-400" />
                <span className="text-sm">Data Analytics</span>
              </div>
            </div>

            <Link 
              to="/about"
              className={`inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
              style={{ transitionDelay: '1200ms' }}
            >
              <span className="text-lg font-medium">Discover My Journey</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Right Image */}
          <div className={`lg:w-1/2 flex justify-center lg:justify-end mt-12 lg:mt-0 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop&crop=face"
                alt="Chandru MDF"
                className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl border-2 border-purple-500/30 hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full animate-bounce opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
