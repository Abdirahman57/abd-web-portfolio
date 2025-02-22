import { motion } from 'framer-motion';

const SectionTitle = ({ subtitle, title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
        {subtitle}
      </span>
      <h2 className="text-3xl font-bold text-secondary mt-4 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-500 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle; 