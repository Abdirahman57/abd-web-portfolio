import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import ProfileSection from './sections/ProfileSection';
import ExperienceSection from './sections/ExperienceSection';
import SectionTitle from './common/SectionTitle';

const About = ({ skills, experience }) => {
  // Current skills with high proficiency
  const currentSkills = {
    'Frontend Development': [
      { name: 'HTML', progress: 95 },
      { name: 'CSS', progress: 90 },
      { name: 'JavaScript', progress: 85 },
      { name: 'React', progress: 80 },
      { name: 'Tailwind CSS', progress: 85 },
      { name: 'Bootstrap', progress: 80 },
    ],
    'Mobile Development': [
      { name: 'React Native', progress: 85 },
      { name: 'Flutter', progress: 80 },
      { name: 'Mobile UI Design', progress: 75 },
    ],
    'Backend Development': [
      { name: 'Node.js', progress: 85 },
      { name: 'PHP', progress: 85 },
      { name: 'ASP.NET', progress: 75 },
      { name: 'Java', progress: 70 },
      { name: 'Express.js', progress: 80 },
    ],
    'Database': [
      { name: 'MongoDB', progress: 85 },
      { name: 'MySQL', progress: 80 },
      { name: 'SQL Server', progress: 75 },
      { name: 'PostgreSQL', progress: 70 },
    ],
  };

  // Skills in progress or planning to learn
  const learningSkills = {
    'Currently Learning': [
      { name: 'TypeScript', progress: 60 },
      { name: 'Next.js', progress: 55 },
      { name: 'GraphQL', progress: 50 },
    ],
    'Planning to Learn': [
      { name: 'AWS', progress: 30 },
      { name: 'Docker', progress: 25 },
      { name: 'Kubernetes', progress: 20 },
    ]
  };

  const getSkillIcon = (skillName) => {
    const icons = {
      // Frontend
      'HTML': 'fab fa-html5',
      'CSS': 'fab fa-css3-alt',
      'JavaScript': 'fab fa-js',
      'React': 'fab fa-react',
      'Tailwind CSS': 'fab fa-css3',
      'Bootstrap': 'fab fa-bootstrap',
      'TypeScript': 'fas fa-code',
      'Next.js': 'fab fa-react',
      
      // Mobile
      'React Native': 'fab fa-react',
      'Flutter': 'fas fa-mobile-alt',
      'Mobile UI Design': 'fas fa-mobile',
      
      // Backend
      'Node.js': 'fab fa-node-js',
      'PHP': 'fab fa-php',
      'ASP.NET': 'fab fa-microsoft',
      'Java': 'fab fa-java',
      'Express.js': 'fab fa-node-js',
      'GraphQL': 'fas fa-project-diagram',
      
      // Database & Cloud
      'MongoDB': 'fas fa-database',
      'MySQL': 'fas fa-database',
      'SQL Server': 'fas fa-database',
      'PostgreSQL': 'fas fa-database',
      'AWS': 'fab fa-aws',
      'Docker': 'fab fa-docker',
      'Kubernetes': 'fas fa-dharmachakra',
    };

    const getIconStyle = (name) => {
      const styles = {
        'HTML': 'text-orange-500',
        'CSS': 'text-blue-500',
        'JavaScript': 'text-yellow-400',
        'TypeScript': 'text-blue-600',
        'React': 'text-blue-400',
        'Next.js': 'text-black',
        'Tailwind CSS': 'text-teal-500',
        'Bootstrap': 'text-purple-600',
        'Flutter': 'text-blue-500',
        'React Native': 'text-blue-400',
        'Mobile UI Design': 'text-purple-500',
        'Node.js': 'text-green-500',
        'Express.js': 'text-gray-600',
        'PHP': 'text-purple-500',
        'ASP.NET': 'text-blue-600',
        'Java': 'text-red-500',
        'GraphQL': 'text-pink-600',
        'MongoDB': 'text-green-600',
        'MySQL': 'text-blue-600',
        'PostgreSQL': 'text-blue-400',
        'SQL Server': 'text-red-600',
        'AWS': 'text-orange-400',
        'Docker': 'text-blue-500',
        'Kubernetes': 'text-blue-600',
      };
      return styles[name] || 'text-gray-600';
    };

    return {
      icon: icons[skillName] || 'fas fa-code',
      customStyle: getIconStyle(skillName)
    };
  };

  const SkillCard = ({ skill, index }) => {
    const { icon, customStyle } = getSkillIcon(skill.name);
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{ y: -5, transition: { duration: 0.2 } }}
        className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all relative overflow-hidden"
      >
        <div className="flex justify-between items-center mb-4">
          <div className={`w-10 h-10 flex items-center justify-center bg-gray-50 rounded-lg text-xl ${customStyle}`}>
            <i className={icon}></i>
          </div>
          <span className={`text-sm font-semibold ${skill.progress >= 80 ? customStyle : 'text-gray-600'}`}>
            {skill.progress}%
          </span>
        </div>
        <h4 className="text-base font-medium text-gray-900 mb-2">{skill.name}</h4>
        <div className="w-full bg-gray-100 rounded-full h-1.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${skill.progress}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            className={`h-full rounded-full ${skill.progress >= 80 ? customStyle.replace('text', 'bg') : 'bg-gray-400'}`}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <SectionTitle
            subtitle="ABOUT ME"
            title="Who Am I?"
            description="Get to know me better and my journey in technology"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <ProfileSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ExperienceSection experience={experience} />
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-20 bg-gray-50 rounded-2xl"
        >
          <div className="text-center mb-12">
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase block mb-3">
              MY SKILLS
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A showcase of my technical proficiencies and the technologies I work with
            </p>
          </div>

          {/* Current Skills */}
          {Object.entries(currentSkills).map(([category, skills], categoryIndex) => (
            <div key={category} className="mb-12 last:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="mb-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2 px-4">
                  {category}
                </h3>
                <div className="h-px bg-gradient-to-r from-primary/20 to-transparent" />
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                {skills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </div>
          ))}

          {/* Learning Journey */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase block mb-3">
                LEARNING JOURNEY
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Skills in Progress
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Technologies I'm currently exploring and planning to master
              </p>
            </div>
            
            {Object.entries(learningSkills).map(([category, skills], categoryIndex) => (
              <div key={category} className="mb-12 last:mb-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="mb-6"
                >
                  <h3 className="text-xl font-semibold text-gray-700 mb-2 px-4">
                    {category}
                  </h3>
                  <div className="h-px bg-gradient-to-r from-gray-200 to-transparent" />
                </motion.div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
                  {skills.map((skill, index) => (
                    <SkillCard key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

About.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
    })
  ).isRequired,
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      period: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default About; 