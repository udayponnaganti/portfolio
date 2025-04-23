import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  period: string;
  features: string[];
}

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Hospital Management System",
      description: "A comprehensive hospital management system with role-based access control for admins, doctors, and patients.",
      image: "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
      github: "https://github.com/udayponnaganti",
      period: "January 2024 - February 2024",
      features: [
        "Role-based access control (Admin, Doctor, Patient)",
        "Hospital creation, updating, deletion, and searching by city",
        "Secure data storage and retrieval with MongoDB",
        "RESTful APIs implemented with Node.js and Express.js",
        "Responsive frontend built with React"
      ]
    },
    {
      id: 2,
      title: "Sales Tracker Website",
      description: "A dynamic sales tracking application to monitor and manage sales records efficiently.",
      image: "https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg",
      technologies: ["React.js", "Tailwind CSS", "Chart.js", "Render"],
      github: "https://github.com/udayponnaganti",
      period: "September 2024 - December 2024",
      features: [
        "Interactive dashboard with sales metrics visualization",
        "Data filtering and sorting capabilities",
        "Responsive design for all device sizes",
        "Real-time data updates",
        "Deployed on Render for continuous availability"
      ]
    },
    {
      id: 3,
      title: "Real Estate Platform",
      description: "A modern real estate platform for property listings and management.",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Google Maps API"],
      github: "https://github.com/udayponnaganti",
      period: "March 2024 - June 2024",
      features: [
        "Property listing with detailed information",
        "Advanced search and filtering options",
        "Interactive maps integration with Google Maps API",
        "User authentication and profile management",
        "Responsive design for mobile and desktop"
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills and experience in different technologies.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <div className="flex items-center mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span className="text-sm">{project.period}</span>
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} className="mr-1" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={18} className="mr-1" />
                    <span>View Project</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/udayponnaganti" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            <Github size={20} />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;