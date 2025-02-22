import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const ExperienceItem = ({ experience, index }) => (
  <motion.div
    key={experience.period}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: index * 0.1 }}
    className="border-l-4 border-primary pl-4"
  >
    <h4 className="text-lg font-medium text-gray-900">{experience.title}</h4>
    <p className="text-gray-600">{experience.company}</p>
    <div className="flex justify-between text-sm text-gray-500">
      <span>{experience.period}</span>
      <span>{experience.location}</span>
    </div>
  </motion.div>
);

ExperienceItem.propTypes = {
  experience: PropTypes.shape({
    period: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const ExperienceSection = ({ experience }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-semibold text-gray-900">
        Experience
      </h3>
      <div className="space-y-4">
        {experience.map((exp, index) => (
          <ExperienceItem key={exp.period} experience={exp} index={index} />
        ))}
      </div>
    </div>
  );
};

ExperienceSection.propTypes = {
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      period: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ExperienceSection; 