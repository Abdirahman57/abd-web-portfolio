import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import SectionTitle from '../common/SectionTitle';

const SkillBar = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="flex justify-between mb-1">
      <span className="text-gray-700">{skill.name}</span>
      <span className="text-primary">{skill.progress}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${skill.progress}%` }}
        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
        className="bg-primary h-2 rounded-full"
      ></motion.div>
    </div>
  </motion.div>
);

SkillBar.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

const ExperienceItem = ({ experience, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex gap-4 items-start"
  >
    <div className="w-24 text-sm text-gray-500">{experience.period}</div>
    <div className="flex-1">
      <h4 className="text-lg font-medium text-secondary">{experience.title}</h4>
      <p className="text-gray-500">{experience.company} - {experience.location}</p>
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

const Skills = ({ skills, experience }) => {
  return (
    <div className="py-20">
      <SectionTitle
        subtitle="SKILLS / EXPERIENCES"
        title="Check My Skills And Work Experiences"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Work Experience */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Work Experiences</h3>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <ExperienceItem key={exp.period} experience={exp} index={index} />
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-xl font-semibold mb-6">My Skills & Advantage</h3>
          <div className="space-y-4">
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Skills.propTypes = {
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

export default Skills; 