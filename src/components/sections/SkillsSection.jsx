import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const getSkillIcon = (skillName) => {
  const icons = {
    'HTML': 'fab fa-html5',
    'CSS': 'fab fa-css3-alt',
    'JavaScript': 'fab fa-js',
    'React': 'fab fa-react',
    'PHP': 'fab fa-php',
    'MySQL': 'fas fa-database',
    'SQL Server': 'fas fa-database',
    'Java': 'fab fa-java',
    'ASP.NET': 'fab fa-microsoft'
  };
  return icons[skillName] || 'fas fa-code';
};

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3, delay: index * 0.05 }}
    whileHover={{ scale: 1.05 }}
    className="group"
  >
    <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 flex items-center justify-center text-primary text-xl group-hover:scale-110 transition-transform">
          <i className={getSkillIcon(skill.name)}></i>
        </div>
        <div className="flex-1">
          <span className="font-medium text-gray-900">{skill.name}</span>
        </div>
        <span className="text-primary font-medium">{skill.progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-primary h-2 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${skill.progress}%` }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
        />
      </div>
    </div>
  </motion.div>
);

SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const SkillsSection = ({ skills }) => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Skills & Technologies
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
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