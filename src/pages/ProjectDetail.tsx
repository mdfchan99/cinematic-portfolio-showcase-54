
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  // Mock project data
  const projects = {
    1: {
      id: 1,
      title: "Real-time Data Pipeline",
      description: "Built a comprehensive ETL pipeline using Apache Kafka and Spark for processing real-time streaming data from multiple sources.",
      fullDescription: "This project involved creating a robust data pipeline architecture that handles high-volume streaming data in real-time. The system processes over 1 million events per second, transforming and loading data into a data warehouse for analytics. Key technologies used include Apache Kafka for message streaming, Apache Spark for data processing, and PostgreSQL for data storage. The pipeline includes data validation, error handling, and monitoring capabilities to ensure data quality and reliability.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=400&fit=crop",
      technologies: ["Apache Kafka", "Apache Spark", "PostgreSQL", "Python", "Docker"],
      github: "https://github.com/chandru/realtime-pipeline",
      demo: "https://demo.chandru-pipeline.com",
      challenges: [
        "Handling high-volume streaming data with low latency",
        "Ensuring data consistency across distributed systems",
        "Implementing fault-tolerant error handling"
      ],
      outcomes: [
        "Reduced data processing time by 60%",
        "Improved data accuracy to 99.9%",
        "Scalable architecture supporting 10x growth"
      ]
    },
    2: {
      id: 2,
      title: "Data Warehouse Analytics",
      description: "Designed and implemented a cloud-based data warehouse solution using AWS Redshift for business intelligence and analytics.",
      fullDescription: "Developed a comprehensive data warehouse solution that centralizes data from multiple business systems. The project involved designing star schema models, implementing ETL processes, and creating automated data quality checks. The solution supports real-time dashboards and ad-hoc analytics queries for business users.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      technologies: ["AWS Redshift", "Airflow", "dbt", "SQL", "Tableau"],
      github: "https://github.com/chandru/data-warehouse",
      demo: "https://analytics-demo.chandru.com",
      challenges: [
        "Designing optimal schema for complex business data",
        "Implementing incremental data loading strategies",
        "Optimizing query performance for large datasets"
      ],
      outcomes: [
        "Centralized data from 15+ source systems",
        "Enabled self-service analytics for business users",
        "Reduced report generation time from hours to minutes"
      ]
    },
    3: {
      id: 3,
      title: "Machine Learning Data Pipeline",
      description: "Created an automated ML pipeline for feature engineering and model training using Python and MLflow.",
      fullDescription: "Built an end-to-end machine learning pipeline that automates the entire ML workflow from data ingestion to model deployment. The pipeline includes automated feature engineering, model training, validation, and deployment capabilities. It supports multiple ML frameworks and includes comprehensive monitoring and logging.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      technologies: ["Python", "MLflow", "Scikit-learn", "Docker", "Kubernetes"],
      github: "https://github.com/chandru/ml-pipeline",
      demo: "https://ml-demo.chandru.com",
      challenges: [
        "Automating complex feature engineering processes",
        "Managing model versioning and deployment",
        "Ensuring reproducible ML experiments"
      ],
      outcomes: [
        "Reduced model development time by 70%",
        "Improved model accuracy through automated feature selection",
        "Streamlined deployment process with zero-downtime updates"
      ]
    }
  };

  useEffect(() => {
    if (id) {
      const projectId = parseInt(id) as 1 | 2 | 3;
      if (projects[projectId]) {
        setProject(projects[projectId]);
      }
    }
    setIsVisible(true);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Project not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Back Button */}
          <Link 
            to="/projects"
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-purple-800/30 rounded-full border border-purple-500/30 hover:bg-purple-700/30 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
            <span>Back to Projects</span>
          </Link>

          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Project Image */}
          <div className="mb-12">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl border border-purple-500/30"
            />
          </div>

          {/* Project Links */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 rounded-full border border-gray-500/30 hover:bg-gray-700/50 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View Code</span>
            </a>
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          </div>

          {/* Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-purple-300">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-blue-800/30 rounded-full border border-blue-500/30 text-blue-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Full Description */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-purple-300">Project Overview</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {project.fullDescription}
            </p>
          </div>

          {/* Challenges & Outcomes Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Challenges */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
              <h3 className="text-xl font-semibold mb-6 text-red-300">Key Challenges</h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcomes */}
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
              <h3 className="text-xl font-semibold mb-6 text-green-300">Key Outcomes</h3>
              <ul className="space-y-3">
                {project.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
