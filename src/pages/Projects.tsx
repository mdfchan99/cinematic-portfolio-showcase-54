
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github, Database, BarChart3, Cloud } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Real-time Data Pipeline",
      description: "Built a scalable ETL pipeline using Apache Spark and Kafka for processing streaming data from multiple sources.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop",
      tech: ["Python", "Apache Spark", "Kafka", "AWS"],
      icon: <Database className="w-6 h-6" />,
      gradient: "from-purple-600 to-blue-600"
    },
    {
      id: 2,
      title: "Data Warehouse Architecture",
      description: "Designed and implemented a cloud-based data warehouse solution with automated data ingestion and transformation.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop",
      tech: ["SQL", "Snowflake", "dbt", "Airflow"],
      icon: <Cloud className="w-6 h-6" />,
      gradient: "from-blue-600 to-teal-600"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Created interactive dashboards for business intelligence with real-time data visualization and reporting capabilities.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=250&fit=crop",
      tech: ["Python", "Tableau", "PostgreSQL", "Docker"],
      icon: <BarChart3 className="w-6 h-6" />,
      gradient: "from-green-600 to-blue-600"
    }
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
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            My Projects
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore my data engineering projects showcasing ETL pipelines, data warehousing, and analytics solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className="absolute top-4 right-4">
                  <div className={`p-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white`}>
                    {project.icon}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-purple-800/30 text-purple-300 text-xs rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Link
                    to={`/projects/${project.id}`}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">View Details</span>
                  </Link>
                  <button className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors duration-300">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link 
            to="/photography"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-lg font-medium">View Photography</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
