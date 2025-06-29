
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Code2, Database, TrendingUp, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: 'Python', level: 85, color: 'from-green-400 to-blue-500' },
    { name: 'SQL', level: 90, color: 'from-blue-400 to-purple-500' },
    { name: 'Apache Spark', level: 75, color: 'from-orange-400 to-red-500' },
    { name: 'ETL Pipelines', level: 80, color: 'from-purple-400 to-pink-500' },
    { name: 'Data Modeling', level: 85, color: 'from-cyan-400 to-blue-500' },
    { name: 'Cloud Platforms', level: 70, color: 'from-teal-400 to-green-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="p-6">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-800/30 rounded-full border border-purple-500/30 hover:bg-purple-700/40 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </nav>

      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Content */}
          <div className={`lg:w-1/2 space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                About Me
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Hello! I'm Chandru MDF, a passionate Data Engineering fresher with a strong foundation in 
                data processing, analytics, and building scalable data solutions. My journey into data 
                engineering began with a fascination for how raw data can be transformed into actionable insights.
              </p>
              
              <p className="text-lg leading-relaxed">
                I specialize in designing and implementing ETL pipelines, data warehousing solutions, 
                and cloud-based data architectures. My goal is to help organizations make data-driven 
                decisions by ensuring data quality, accessibility, and scalability.
              </p>

              <p className="text-lg leading-relaxed">
                When I'm not working with data, I enjoy photography, exploring new technologies, 
                and contributing to open-source projects. I believe in continuous learning and 
                staying updated with the latest trends in data engineering and analytics.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-purple-800/20 rounded-lg border border-purple-500/20">
                <Code2 className="w-8 h-8 text-purple-400" />
                <div>
                  <h3 className="font-semibold">Clean Code</h3>
                  <p className="text-sm text-gray-400">Maintainable Solutions</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-blue-800/20 rounded-lg border border-blue-500/20">
                <Database className="w-8 h-8 text-blue-400" />
                <div>
                  <h3 className="font-semibold">Data Pipelines</h3>
                  <p className="text-sm text-gray-400">Scalable Architecture</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-green-800/20 rounded-lg border border-green-500/20">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="font-semibold">Analytics</h3>
                  <p className="text-sm text-gray-400">Data-Driven Insights</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-orange-800/20 rounded-lg border border-orange-500/20">
                <Award className="w-8 h-8 text-orange-400" />
                <div>
                  <h3 className="font-semibold">Best Practices</h3>
                  <p className="text-sm text-gray-400">Industry Standards</p>
                </div>
              </div>
            </div>

            <Link 
              to="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-lg font-medium">View My Projects</span>
            </Link>
          </div>

          {/* Right Image and Skills */}
          <div className={`lg:w-1/2 space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur-2xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop&crop=face"
                alt="Chandru MDF working"
                className="relative w-full max-w-md mx-auto h-80 object-cover rounded-2xl shadow-2xl border-2 border-purple-500/30"
              />
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center">Technical Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 delay-${500 + index * 100}`}
                        style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
