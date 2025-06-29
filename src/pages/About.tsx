import { useState, useEffect } from 'react';
import { Code, Database, BarChart3, Award, BookOpen, Users } from 'lucide-react';
import Navigation from '../components/Navigation';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />
      
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 pt-24">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6 animate-fade-in">
              About Me
            </h1>
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl animate-fade-in animation-delay-500">
              A dedicated data engineer passionate about leveraging data to drive informed decisions. With a strong foundation in data warehousing, ETL processes, and data analytics, I strive to create scalable and efficient data solutions.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-purple-200 mb-8">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
                <div className="flex items-center gap-4 mb-4">
                  <Database className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Data Engineering</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Proficient in designing and implementing data warehouses, data lakes, and real-time data processing systems.
                </p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
                <div className="flex items-center gap-4 mb-4">
                  <Code className="w-6 h-6 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">ETL Pipelines</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Experienced in building robust ETL pipelines using tools like Apache Spark, Airflow, and dbt.
                </p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
                <div className="flex items-center gap-4 mb-4">
                  <BarChart3 className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">Data Analytics</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Skilled in data analysis, visualization, and reporting using tools like Tableau, Power BI, and Python.
                </p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-purple-200 mb-8">Education</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
                <div className="flex items-center gap-4 mb-4">
                  <BookOpen className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">Master of Science in Data Science</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  University of Example, 2020 - 2022
                </p>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
                <div className="flex items-center gap-4 mb-4">
                  <BookOpen className="w-6 h-6 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">Bachelor of Engineering in Computer Science</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Institute of Technology, 2016 - 2020
                </p>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h2 className="text-3xl font-semibold text-purple-200 mb-8">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-semibold text-white">Data Engineer Intern</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Tech Solutions Inc, Summer 2021
                </p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Developed ETL pipelines using Apache Spark and Python</li>
                  <li>Designed data models for a cloud-based data warehouse</li>
                  <li>Automated data quality checks and monitoring</li>
                </ul>
              </div>

              <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30">
                <div className="flex items-center gap-4 mb-4">
                  <Users className="w-6 h-6 text-orange-400" />
                  <h3 className="text-xl font-semibold text-white">Freelance Data Analyst</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Self-Employed, 2022 - Present
                </p>
                <ul className="list-disc list-inside text-gray-300">
                  <li>Provided data analysis and visualization services to clients</li>
                  <li>Developed custom dashboards using Tableau and Power BI</li>
                  <li>Conducted statistical analysis and predictive modeling</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
