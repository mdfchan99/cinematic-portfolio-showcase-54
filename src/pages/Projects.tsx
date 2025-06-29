import { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "Real-time Data Pipeline",
      description: "Built a comprehensive ETL pipeline using Apache Kafka and Spark for processing real-time streaming data from multiple sources.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop",
      technologies: ["Apache Kafka", "Apache Spark", "PostgreSQL", "Python", "Docker"],
      github: "https://github.com/chandru/realtime-pipeline",
      demo: "https://demo.chandru-pipeline.com"
    },
    {
      id: 2,
      title: "Data Warehouse Analytics",
      description: "Designed and implemented a cloud-based data warehouse solution using AWS Redshift for business intelligence and analytics.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      technologies: ["AWS Redshift", "Airflow", "dbt", "SQL", "Tableau"],
      github: "https://github.com/chandru/data-warehouse",
      demo: "https://analytics-demo.chandru.com"
    },
    {
      id: 3,
      title: "Machine Learning Data Pipeline",
      description: "Created an automated ML pipeline for feature engineering and model training using Python and MLflow.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      technologies: ["Python", "MLflow", "Scikit-learn", "Docker", "Kubernetes"],
      github: "https://github.com/chandru/ml-pipeline",
      demo: "https://ml-demo.chandru.com"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />
      
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 pt-24">
        <div className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project) => (
            <div 
              key={project.id}
              className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-2xl mb-4 shadow-md"
              />
              <h2 className="text-2xl font-semibold text-purple-300 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies && project.technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-blue-800/30 rounded-full border border-blue-500/30 text-blue-200 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <Link 
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex gap-2">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
                  >
                    <Github className="w-5 h-5 text-gray-400" />
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 rounded-full hover:bg-gray-700/50 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
