
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Users, Code } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock project data - in a real app, this would come from an API or database
  const projectDetails = {
    1: {
      title: "Real-time Data Pipeline",
      description: "A comprehensive ETL pipeline solution built to handle streaming data from multiple sources with real-time processing capabilities.",
      longDescription: "This project demonstrates the implementation of a scalable, real-time data pipeline using modern data engineering tools. The pipeline ingests data from various sources including APIs, databases, and message queues, processes it using Apache Spark, and delivers clean, transformed data to downstream systems.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
      tech: ["Python", "Apache Spark", "Apache Kafka", "AWS S3", "Docker", "PostgreSQL"],
      features: [
        "Real-time data ingestion from multiple sources",
        "Fault-tolerant processing with Apache Spark",
        "Automated data quality checks and validation",
        "Scalable architecture supporting millions of records",
        "Monitoring and alerting system integration",
        "CI/CD pipeline for automated deployments"
      ],
      challenges: [
        "Handling data schema evolution and backward compatibility",
        "Implementing exactly-once processing semantics",
        "Optimizing performance for high-throughput scenarios",
        "Managing resource allocation and auto-scaling"
      ],
      duration: "3 months",
      team: "Solo Project",
      status: "Completed"
    },
    2: {
      title: "Data Warehouse Architecture",
      description: "A modern cloud-based data warehouse solution with automated ETL processes and dimensional modeling.",
      longDescription: "This project involved designing and implementing a comprehensive data warehouse solution from scratch. The architecture follows modern data warehousing principles with a focus on scalability, maintainability, and performance.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
      tech: ["SQL", "Snowflake", "dbt", "Apache Airflow", "Python", "Terraform"],
      features: [
        "Dimensional modeling with star schema design",
        "Automated daily ETL processes",
        "Data lineage tracking and documentation",
        "Performance optimization with clustering and partitioning",
        "Role-based access control and security",
        "Cost optimization and resource management"
      ],
      challenges: [
        "Migrating legacy data with complex transformations",
        "Ensuring data consistency across multiple sources",
        "Implementing efficient incremental loading strategies",
        "Managing compute costs while maintaining performance"
      ],
      duration: "4 months",
      team: "2 developers",
      status: "In Production"
    },
    3: {
      title: "Analytics Dashboard",
      description: "Interactive business intelligence dashboards with real-time data visualization and reporting capabilities.",
      longDescription: "A comprehensive analytics platform that provides business stakeholders with real-time insights through interactive dashboards and automated reporting systems.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      tech: ["Python", "Tableau", "PostgreSQL", "Docker", "Flask", "Redis"],
      features: [
        "Interactive dashboards with drill-down capabilities",
        "Real-time data refresh and streaming updates",
        "Automated report generation and distribution",
        "Mobile-responsive design for accessibility",
        "Custom KPI tracking and alerting",
        "Export functionality for various formats"
      ],
      challenges: [
        "Optimizing query performance for complex aggregations",
        "Handling concurrent user sessions efficiently",
        "Implementing responsive design for mobile devices",
        "Managing data refresh rates and caching strategies"
      ],
      duration: "2 months",
      team: "Solo Project",
      status: "Completed"
    }
  };

  const project = projectDetails[id as keyof typeof projectDetails];

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-purple-400 hover:text-purple-300">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="p-6">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-800/30 rounded-full border border-purple-500/30 hover:bg-purple-700/40 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Projects</span>
        </Link>
      </nav>

      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-lg text-gray-300 max-w-2xl">{project.description}</p>
            </div>
          </div>

          {/* Project Meta Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-gray-800/40 rounded-lg border border-gray-700/50">
              <Calendar className="w-6 h-6 text-purple-400" />
              <div>
                <h3 className="font-semibold">Duration</h3>
                <p className="text-gray-300">{project.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-800/40 rounded-lg border border-gray-700/50">
              <Users className="w-6 h-6 text-blue-400" />
              <div>
                <h3 className="font-semibold">Team</h3>
                <p className="text-gray-300">{project.team}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-gray-800/40 rounded-lg border border-gray-700/50">
              <Code className="w-6 h-6 text-green-400" />
              <div>
                <h3 className="font-semibold">Status</h3>
                <p className="text-gray-300">{project.status}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              <Github className="w-5 h-5" />
              <span>View Code</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-3 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-all duration-300">
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-300 leading-relaxed text-lg">{project.longDescription}</p>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <div className="grid gap-3">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-800/20 rounded-lg">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges */}
            <section>
              <h2 className="text-2xl font-bold mb-4">Technical Challenges</h2>
              <div className="grid gap-3">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-red-900/10 border border-red-500/20 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-300">{challenge}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className={`space-y-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Tech Stack */}
            <div className="p-6 bg-gray-800/40 rounded-lg border border-gray-700/50">
              <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-purple-800/30 text-purple-300 text-sm rounded-full border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="p-6 bg-gradient-to-br from-purple-800/20 to-blue-800/20 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-bold mb-4">Interested in this project?</h3>
              <p className="text-gray-300 mb-4">
                Let's discuss how we can implement similar solutions for your organization.
              </p>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                <span>Get In Touch</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
