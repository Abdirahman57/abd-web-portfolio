import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const getSkillIcon = (skillName) => {
  const icons = {
    // Frontend
    'HTML': 'fab fa-html5',
    'CSS': 'fab fa-css3-alt',
    'JavaScript': 'fab fa-js',
    'React': 'fab fa-react',
    
    // Mobile
    'React Native': 'fab fa-react',
    'Flutter': 'fas fa-mobile-alt',
    
    // Backend
    'Node.js': 'fab fa-node-js',
    'PHP': 'fab fa-php',
    'ASP.NET': 'fab fa-microsoft',
    'Java': 'fab fa-java',
    
    // Database
    'MongoDB': 'fas fa-database',
    'MySQL': 'fas fa-database',
    'SQL Server': 'fas fa-database',
  };

  const getIconStyle = (name) => {
    switch(name) {
      // Frontend
      case 'HTML':
        return 'text-orange-500';
      case 'CSS':
        return 'text-blue-500';
      case 'JavaScript':
        return 'text-yellow-400';
      case 'React':
        return 'text-blue-400';
      
      // Mobile
      case 'Flutter':
        return 'text-blue-500';
      case 'React Native':
        return 'text-blue-400';
      
      // Backend
      case 'Node.js':
        return 'text-green-500';
      case 'PHP':
        return 'text-purple-500';
      case 'ASP.NET':
        return 'text-blue-600';
      case 'Java':
        return 'text-red-500';
      
      // Database
      case 'MongoDB':
        return 'text-green-600';
      case 'MySQL':
        return 'text-blue-600';
      case 'SQL Server':
        return 'text-red-600';
      default:
        return '';
    }
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
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ scale: 1.05 }}
      className="group"
    >
      <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-10 h-10 flex items-center justify-center bg-primary/10 rounded-lg text-xl group-hover:scale-110 transition-transform ${customStyle}`}>
            <i className={icon}></i>
          </div>
          <div className="flex-1">
            <span className="font-medium text-gray-900">{skill.name}</span>
          </div>
          <span className="text-primary font-medium">{skill.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
          <motion.div
            className={`h-2 rounded-full ${customStyle.replace('text', 'bg')}`}
            initial={{ width: 0 }}
            animate={{ width: `${skill.progress}%` }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
          />
        </div>
      </div>
    </motion.div>
  );
};

SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const SkillsSection = ({ skills }) => {
  // Group skills by category
  const categories = {
    'Frontend Development': skills.filter(skill => 
      ['HTML', 'CSS', 'JavaScript', 'React'].includes(skill.name)
    ),
    'Mobile Development': skills.filter(skill => 
      ['React Native', 'Flutter'].includes(skill.name)
    ),
    'Backend Development': skills.filter(skill => 
      ['Node.js', 'PHP', 'ASP.NET', 'Java'].includes(skill.name)
    ),
    'Database': skills.filter(skill => 
      ['MongoDB', 'MySQL', 'SQL Server'].includes(skill.name)
    ),
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-8">
        Skills & Technologies
      </h3>
      <div className="space-y-8">
        {Object.entries(categories).map(([category, categorySkills], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <h4 className="text-lg font-medium text-primary mb-4 border-b border-primary/20 pb-2">
              {category}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {categorySkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

SkillsSection.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      progress: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default SkillsSection; 