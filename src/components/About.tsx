import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="w-full h-80 md:h-96 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-800 rounded-lg shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <h3 className="text-2xl font-bold mb-2">Uday Ponnaganti</h3>
                  <p className="text-lg mb-4">B.Tech Computer Science Student</p>
                  <div className="flex flex-col space-y-3 text-left max-w-xs mx-auto">
                    <div className="flex items-center">
                      <User size={18} className="mr-3" />
                      <span>3rd Year Student</span>
                    </div>
                    <div className="flex items-center">
                      <Mail size={18} className="mr-3" />
                      <span>ponnagantiuday8@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone size={18} className="mr-3" />
                      <span>9177971960</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={18} className="mr-3" />
                      <span>Kadapa, Andhra Pradesh</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-blue-200 dark:bg-blue-900 rounded-lg z-[-1]"></div>
            <div className="absolute -top-5 -left-5 w-16 h-16 bg-indigo-200 dark:bg-indigo-900 rounded-lg z-[-1]"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">Who I Am</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              I'm a passionate Computer Science student with a strong interest in web development, data structures, and algorithms. 
              Currently in my 3rd year at Lovely Professional University, I'm dedicated to expanding my knowledge and skills in the field of technology.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              My journey in computer science has equipped me with a solid foundation in programming languages like C++, Java, and JavaScript. 
              I enjoy solving complex problems and creating innovative solutions that make a difference.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Web Development</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Building responsive and user-friendly web applications</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Problem Solving</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Analytical thinking and algorithmic approach</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Team Collaboration</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Working effectively in diverse team environments</p>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Continuous Learning</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Always eager to learn new technologies</p>
              </div>
            </div>
            
            <a 
              href="/assets/udaysepicalCv.pdf" 
              download="Uday_Ponnaganti_CV.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              Download Full Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;