import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education: React.FC = () => {
  const educationData = [
    {
      id: 1,
      institution: "Lovely Professional University",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2022 - 2026",
      location: "Jalandhar, Punjab",
      gpa: "CGPA: 7.13",
      achievements: [
        "Active member of the Coding Club",
        "Participated in various hackathons and coding competitions",
        "Completed courses in Data Structures, Algorithms, and Web Development"
      ]
    },
    {
      id: 2,
      institution: "Narayana Junior College",
      degree: "12th with Science",
      period: "2020 - 2022",
      location: "Kadapa, Andhra Pradesh",
      gpa: "Percentage: 78%",
      achievements: [
        "Participated in Mathematics Olympiad",
        "Member of the Science Club",
        "Completed advanced courses in Physics and Mathematics"
      ]
    },
    {
      id: 3,
      institution: "Balavikas E.M High School",
      degree: "10th with Science",
      period: "2019 - 2020",
      location: "Kadapa, Andhra Pradesh",
      gpa: "CGPA: 10",
      achievements: [
        "School topper in Mathematics and Science",
        "Participated in district-level science exhibitions",
        "Active member of the school's cultural committee"
      ]
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Mastering Data Structures and Algorithms",
      issuer: "Udemy",
      date: "August 2024"
    },
    {
      id: 2,
      title: "Programming in C++: A Hands-On",
      issuer: "Coursera",
      date: "March 2023"
    },
    {
      id: 3,
      title: "Server-side JavaScript with Node.js",
      issuer: "Coursera",
      date: "December 2024"
    },
    {
      id: 4,
      title: "NPTEL Online Certification (Cloud Computing)",
      issuer: "NPTEL",
      date: "November 2024"
    },
    {
      id: 5,
      title: "AI and Machine Learning",
      issuer: "LinkedIn Learning",
      date: "December 2022"
    },
    {
      id: 6,
      title: "Digital Marketing Certification",
      issuer: "Vestige",
      date: "December 2023"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic journey and professional certifications that have shaped my knowledge and skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <GraduationCap size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>
            
            <div className="relative border-l-2 border-blue-600 dark:border-blue-400 pl-8 ml-3 space-y-10">
              {educationData.map((item, index) => (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative"
                >
                  <div className="absolute -left-10 top-0 w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full border-4 border-white dark:border-gray-900"></div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                    <div className="flex items-center text-gray-500 dark:text-gray-400 mb-2">
                      <Calendar size={16} className="mr-2" />
                      <span>{item.period}</span>
                    </div>
                    
                    <h4 className="text-xl font-bold mb-1">{item.institution}</h4>
                    <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{item.degree}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-1">{item.location}</p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-3">{item.gpa}</p>
                    
                    <h5 className="font-semibold mb-2">Key Achievements:</h5>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <Award size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={cert.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-5 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-lg mb-1">{cert.title}</h4>
                      <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true, amount: 0.2 }}
              className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6"
            >
              <h4 className="text-xl font-bold mb-4">Achievements</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1 mr-3"></div>
                  <div>
                    <p className="font-medium">Digital Marketing Certification from Vestige</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Gained expertise in social media marketing, SEO, and brand promotion</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1 mr-3"></div>
                  <div>
                    <p className="font-medium">Participated in National Level Hackathon</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Developed innovative solutions for real-world problems</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-600 dark:bg-blue-400 mt-1 mr-3"></div>
                  <div>
                    <p className="font-medium">Top Performer in Data Structures Course</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Recognized for exceptional problem-solving skills</p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;