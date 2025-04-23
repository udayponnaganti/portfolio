import React from 'react';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Uday Ponnaganti</h3>
            <p className="text-gray-400 mb-4">
              B.Tech Computer Science Student passionate about web development and problem-solving.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/udayponnaganti" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/udayponnaganti2004" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:ponnagantiuday8@gmail.com" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="hero" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="about" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="skills" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link 
                  to="projects" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="education" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link 
                  to="contact" 
                  smooth={true} 
                  duration={500} 
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Kadapa, Andhra Pradesh, India</li>
              <li>ponnagantiuday8@gmail.com</li>
              <li>+91 9177971960</li>
            </ul>
            <div className="mt-4">
              <a 
                href="/assets/udaysepicalCv.pdf" 
                download
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Uday Ponnaganti. All rights reserved.
          </p>
          <Link
            to="hero"
            smooth={true}
            duration={800}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;