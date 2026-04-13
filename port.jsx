import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Code, 
  Cpu, 
  Briefcase,
  Calendar,
  ChevronRight,
  Menu,
  X,
  Phone,
  Terminal,
  Database,
  Cloud,
  Layers
} from 'lucide-react';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-indigo-200">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
                Nayna.dev
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Profile</a>
              <a href="#experience" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Experience</a>
              <a href="#projects" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Projects</a>
              <a href="#skills" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Skills</a>
              <a href="#contact" className="text-slate-600 hover:text-indigo-600 font-medium transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-slate-600 hover:text-indigo-600 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
              <a href="#about" onClick={toggleMenu} className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 hover:text-indigo-600 rounded-md">Profile</a>
              <a href="#experience" onClick={toggleMenu} className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 hover:text-indigo-600 rounded-md">Experience</a>
              <a href="#projects" onClick={toggleMenu} className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 hover:text-indigo-600 rounded-md">Projects</a>
              <a href="#skills" onClick={toggleMenu} className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 hover:text-indigo-600 rounded-md">Skills</a>
              <a href="#contact" onClick={toggleMenu} className="block px-3 py-2 text-slate-600 font-medium hover:bg-slate-50 hover:text-indigo-600 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-20 right-0 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-40 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="md:w-2/3 md:pr-12 relative z-10">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-6 border border-indigo-100 shadow-sm">
            <Terminal size={14} className="mr-2" /> B.Tech Information Technology
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
            Hi, I'm Nayna Patil.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-500">
              Full-Stack & AI Engineer.
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
            Building scalable applications and AI-powered SaaS platforms. Proficient in Generative AI, LLMs, and Enterprise Automation, with a deep-rooted vision to leverage tech for national progress.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-8 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center hover:-translate-y-0.5">
              View My Work <ChevronRight size={18} className="ml-2" />
            </a>
            <a href="#contact" className="px-8 py-3 rounded-lg bg-white text-slate-700 border border-slate-200 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center shadow-sm hover:-translate-y-0.5">
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Right side abstract graphic */}
        <div className="md:w-1/3 mt-16 md:mt-0 relative hidden md:block">
          <div className="relative w-full aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-100 to-violet-50 rounded-3xl transform rotate-6 shadow-xl border border-white/50"></div>
            <div className="absolute inset-0 bg-white rounded-3xl transform -rotate-3 shadow-lg flex flex-col items-center justify-center border border-slate-100 p-8">
               <Cpu size={80} className="text-indigo-500 mb-6" strokeWidth={1.5} />
               <div className="text-center">
                 <p className="font-mono text-sm text-slate-500 mb-1">&lt;code&gt;</p>
                 <p className="font-bold text-slate-800 text-lg">System.optimize();</p>
                 <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600 text-lg">AI.generate();</p>
                 <p className="font-mono text-sm text-slate-500 mt-1">&lt;/code&gt;</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile & Education Section */}
      <section id="about" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900 flex items-center">
                 Profile & Vision
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                I am an innovative Software Engineer with a strong foundation in Data Structures and Algorithms (DSA) and the Software Development Life Cycle (SDLC). 
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                My expertise lies in designing robust backend systems, intuitive React interfaces, and integrating cutting-edge Generative AI models. Beyond writing clean code, my ultimate goal is to build solutions that scale and contribute meaningfully to the nation's technological advancement.
              </p>
            </div>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold mb-6 text-slate-800 flex items-center">
                <GraduationCap className="mr-3 text-indigo-600" size={28} /> Education
              </h3>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l-2 border-indigo-200">
                  <div className="absolute w-3 h-3 bg-indigo-600 rounded-full -left-[7px] top-1.5"></div>
                  <h4 className="text-lg font-bold text-slate-800">Bachelor of Technology (IT)</h4>
                  <p className="text-slate-600 font-medium">Jabalpur Engineering College, MP</p>
                  <p className="text-slate-500 text-sm mt-1">Graduated 2025 • CGPA: 7.65</p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-slate-200">
                  <div className="absolute w-3 h-3 bg-slate-400 rounded-full -left-[7px] top-1.5"></div>
                  <h4 className="text-md font-bold text-slate-800">Class 12th (Mathematics)</h4>
                  <p className="text-slate-600">Govt. Model School Jaithari, MP</p>
                  <p className="text-slate-500 text-sm mt-1">Score: 75.81%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Professional Experience</h2>
            <div className="w-20 h-1 bg-indigo-600 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-12">
            {/* Experience 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
              <div className="absolute top-0 right-0 bg-indigo-50 text-indigo-700 font-semibold px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-sm flex items-center">
                <Calendar size={14} className="mr-2" /> Aug 2024 - July 2025
              </div>
              <h3 className="text-2xl font-bold text-slate-900 flex items-center mb-2">
                <Briefcase size={24} className="mr-3 text-indigo-600" />
                Software Engineer
              </h3>
              <h4 className="text-lg text-indigo-600 font-medium mb-6">Hosho Digital Pvt. Ltd.</h4>
              
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  <span>Developed custom business applications using <strong>Microsoft Power Apps</strong> to improve operational efficiency.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  <span>Automated complex workflows by integrating Power Apps with <strong>Microsoft 365</strong> and external APIs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2 mt-1">•</span>
                  <span>Leveraged <strong>Power BI</strong> for robust data visualization to support enterprise data-driven decision-making.</span>
                </li>
              </ul>
            </div>

            {/* Experience 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative">
              <div className="absolute top-0 right-0 bg-violet-50 text-violet-700 font-semibold px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-sm flex items-center">
                <Calendar size={14} className="mr-2" /> Jan 2024 - June 2024
              </div>
              <h3 className="text-2xl font-bold text-slate-900 flex items-center mb-2">
                <Cpu size={24} className="mr-3 text-violet-600" />
                Research & Development Intern (AI/ML)
              </h3>
              <h4 className="text-lg text-violet-600 font-medium mb-6">IIT Delhi</h4>
              
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2 mt-1">•</span>
                  <span>Engineered predictive models using <strong>Python and TensorFlow</strong>, successfully optimizing processing speed by 15%.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2 mt-1">•</span>
                  <span>Implemented <strong>Generative AI scripts</strong> to fully automate data labeling and documentation tasks.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-violet-500 mr-2 mt-1">•</span>
                  <span>Collaborated on the core system architecture for high-performance, scalable AI modules.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Featured Projects</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Showcasing my capability to build end-to-end full-stack applications and integrate advanced AI models.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-indigo-50 rounded-xl text-indigo-600">
                    <Layers size={32} />
                  </div>
                  <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-3 py-1 rounded-full">2025 - Present</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">Creovera</h3>
                <p className="font-medium text-indigo-600 mb-4 text-sm tracking-wide uppercase">Full-Stack AI SaaS Platform</p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Architected an all-in-one platform integrating AI tools for interview preparation, content creation, and image generation. 
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-start"><ChevronRight size={16} className="text-indigo-400 mr-1 mt-0.5" /> Integrated OpenAI/Anthropic APIs for real-time generation.</li>
                  <li className="flex items-start"><ChevronRight size={16} className="text-indigo-400 mr-1 mt-0.5" /> Developed responsive UI/UX using React.js.</li>
                  <li className="flex items-start"><ChevronRight size={16} className="text-indigo-400 mr-1 mt-0.5" /> Managed secure data flow & backend with Node.js.</li>
                </ul>
              </div>
              <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-2">
                <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-full shadow-sm">React</span>
                <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-full shadow-sm">Node.js</span>
                <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-full shadow-sm">OpenAI API</span>
                <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-full shadow-sm">Generative AI</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 bg-white flex flex-col">
              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-violet-50 rounded-xl text-violet-600">
                    <Database size={32} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">E-Commerce Performance Engine</h3>
                <p className="font-medium text-violet-600 mb-4 text-sm tracking-wide uppercase">Web Platform Architecture</p>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Designed a highly secure and efficient e-commerce platform architecture focusing on speed and reliability for scalable user bases.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-6">
                  <li className="flex items-start"><ChevronRight size={16} className="text-violet-400 mr-1 mt-0.5" /> Optimized database queries for faster load times.</li>
                  <li className="flex items-start"><ChevronRight size={16} className="text-violet-400 mr-1 mt-0.5" /> Integrated secure payment gateways.</li>
                  <li className="flex items-start"><ChevronRight size={16} className="text-violet-400 mr-1 mt-0.5" /> Focused on secure system design and state management.</li>
                </ul>
              </div>
              <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex flex-wrap gap-2">
                <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-full shadow-sm">Full-Stack</span>
                <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-full shadow-sm">SQL/NoSQL</span>
                <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-full shadow-sm">Payment APIs</span>
                <span className="text-xs font-semibold bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-full shadow-sm">System Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-slate-900 text-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpIi8+PC9zdmc+')]"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technical Arsenal</h2>
             <p className="text-slate-400 max-w-2xl mx-auto">A comprehensive toolkit spanning AI models to cloud deployment.</p>
           </div>
           
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {/* AI & Tech */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
               <div className="flex items-center mb-4">
                 <Cpu className="text-indigo-400 mr-3" size={24} />
                 <h3 className="text-lg font-bold text-white">AI & Modern Tech</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                 {['Generative AI', 'Prompt Engineering', 'TensorFlow', 'PyTorch', 'CNN', 'LLMs'].map(skill => (
                   <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 rounded-md text-sm border border-slate-700">{skill}</span>
                 ))}
               </div>
             </div>

             {/* Full Stack */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
               <div className="flex items-center mb-4">
                 <Code className="text-indigo-400 mr-3" size={24} />
                 <h3 className="text-lg font-bold text-white">Full-Stack & Core</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                 {['React.js', 'Node.js', 'Express.js', 'Python', 'Java', 'C/C++', 'JavaScript (ES6+)', 'HTML5/CSS3'].map(skill => (
                   <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 rounded-md text-sm border border-slate-700">{skill}</span>
                 ))}
               </div>
             </div>

             {/* Cloud & DevOps */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
               <div className="flex items-center mb-4">
                 <Cloud className="text-indigo-400 mr-3" size={24} />
                 <h3 className="text-lg font-bold text-white">Cloud & DevOps</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                 {['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Firebase'].map(skill => (
                   <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 rounded-md text-sm border border-slate-700">{skill}</span>
                 ))}
               </div>
             </div>

             {/* Data & Automation */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
               <div className="flex items-center mb-4">
                 <Database className="text-indigo-400 mr-3" size={24} />
                 <h3 className="text-lg font-bold text-white">Data & DB</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                 {['MySQL', 'NoSQL', 'Power BI', 'GraphQL', 'RESTful APIs', 'DBMS Modeling'].map(skill => (
                   <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 rounded-md text-sm border border-slate-700">{skill}</span>
                 ))}
               </div>
             </div>

             {/* Microsoft Platform */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
               <div className="flex items-center mb-4">
                 <Layers className="text-indigo-400 mr-3" size={24} />
                 <h3 className="text-lg font-bold text-white">Enterprise Automation</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                 {['Microsoft Power Apps', 'Power Automate', 'Microsoft 365'].map(skill => (
                   <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 rounded-md text-sm border border-slate-700">{skill}</span>
                 ))}
               </div>
             </div>

             {/* Foundations */}
             <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-indigo-500 transition-colors">
               <div className="flex items-center mb-4">
                 <Terminal className="text-indigo-400 mr-3" size={24} />
                 <h3 className="text-lg font-bold text-white">Engineering Core</h3>
               </div>
               <div className="flex flex-wrap gap-2">
                 {['DSA', 'System Design', 'OOPs', 'SDLC', 'Agile/Scrum', 'Git/GitHub'].map(skill => (
                   <span key={skill} className="px-3 py-1 bg-slate-900 text-slate-300 rounded-md text-sm border border-slate-700">{skill}</span>
                 ))}
               </div>
             </div>

           </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">Let's Connect</h2>
          <p className="text-slate-600 text-lg mb-12 max-w-2xl mx-auto">
            I'm always open to discussing tech innovations, software engineering opportunities, or collaborating on projects that make an impact.
          </p>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <a href="mailto:naynapatil2207@gmail.com" className="flex flex-col items-center p-6 bg-slate-50 rounded-xl hover:bg-indigo-50 hover:text-indigo-600 transition-colors border border-slate-100 group">
              <Mail size={32} className="text-slate-400 group-hover:text-indigo-600 mb-4" />
              <span className="font-medium text-sm">Email Me</span>
              <span className="text-xs text-slate-500 mt-1 truncate w-full text-center">naynapatil2207@...</span>
            </a>
            
            <a href="https://linkedin.com/in/naynapatil06" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center p-6 bg-slate-50 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-colors border border-slate-100 group">
              <Linkedin size={32} className="text-slate-400 group-hover:text-blue-600 mb-4" />
              <span className="font-medium text-sm">LinkedIn</span>
              <span className="text-xs text-slate-500 mt-1 truncate w-full text-center">/in/naynapatil06</span>
            </a>

            <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-100">
              <Phone size={32} className="text-slate-400 mb-4" />
              <span className="font-medium text-sm text-slate-800">Phone</span>
              <span className="text-xs text-slate-500 mt-1">+91 7974327384</span>
            </div>

            <div className="flex flex-col items-center p-6 bg-slate-50 rounded-xl border border-slate-100">
              <MapPin size={32} className="text-slate-400 mb-4" />
              <span className="font-medium text-sm text-slate-800">Location</span>
              <span className="text-xs text-slate-500 mt-1">Jaithari, MP</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 text-slate-500 py-8 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Nayna Patil. All rights reserved.</p>
          <div className="flex items-center mt-4 md:mt-0 space-x-4">
             <a href="https://github.com" className="hover:text-indigo-600 transition-colors"><Github size={20}/></a>
             <a href="https://linkedin.com/in/naynapatil06" className="hover:text-indigo-600 transition-colors"><Linkedin size={20}/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}