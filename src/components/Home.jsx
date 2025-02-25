import { motion } from 'framer-motion';
import Hero from './sections/Hero';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import FeaturedBlogs from './sections/FeaturedBlogs';
import SectionTitle from './common/SectionTitle';
import { Link } from 'react-router-dom';

const Home = () => {
  const skills = [
    // Frontend
    { name: 'HTML', progress: 95 },
    { name: 'CSS', progress: 90 },
    { name: 'JavaScript', progress: 85 },
    { name: 'React', progress: 80 },
    
    // Mobile Development
    { name: 'React Native', progress: 85 },
    { name: 'Flutter', progress: 80 },
    
    // Backend
    { name: 'Node.js', progress: 85 },
    { name: 'PHP', progress: 85 },
    { name: 'ASP.NET', progress: 75 },
    { name: 'Java', progress: 70 },
    
    // Databases
    { name: 'MongoDB', progress: 85 },
    { name: 'MySQL', progress: 80 },
    { name: 'SQL Server', progress: 75 },
  ];

  const experience = [
    {
      period: '2021 - Present',
      title: 'Web Designer',
      company: 'Kobciye Innovate Solutions',
      location: 'Somalia',
    },
    {
      period: '2022 - 2025',
      title: 'UI/UX Designer',
      company: 'Kobciye Innovate Solutions',
      location: 'Somalia',
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Hero />
      </section>
                
      {/* About Me Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <SectionTitle
          subtitle="ABOUT ME"
          title="Who Am I?"
          description="Get to know me better"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src="/abdirahman.jpg"
              alt="Abdirahman"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-600">
              I am a passionate Software Developer with expertise in creating beautiful and functional digital experiences. 
              My journey in tech has equipped me with a diverse skill set in both front-end and back-end development.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-gray-900">Location</h4>
                <p className="text-gray-600">Somalia</p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Email</h4>
                <a href="mailto:abdirahmanabdishakur57@gmail.com" className="text-primary hover:text-primary/80">
                  abdirahmanabdishakur57@gmail.com
                </a>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Phone</h4>
                <a href="tel:+252906572198" className="text-primary hover:text-primary/80">
                  +252 906 572 198
                </a>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Follow Me</h4>
                <div className="flex gap-3 mt-2">
                  <a href="https://github.com/Abdirahman57" className="text-gray-600 hover:text-primary">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-primary">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-flex items-center text-primary hover:text-primary/80 font-medium"
            >
              Learn More About Me
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Skills & Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-gray-50"
      >
        <SectionTitle
          subtitle="SKILLS / EXPERIENCES"
          title="Check My Skills And Work Experiences"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <ExperienceSection experience={experience} />

          {/* Skills */}
          <div>
            <SkillsSection skills={skills} />
          </div>
        </div>
      </motion.section>

      {/* Featured Blogs Section */}
      <FeaturedBlogs />

      {/* Contact CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-primary/5 py-20"
      >
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 