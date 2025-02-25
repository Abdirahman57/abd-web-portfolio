import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const downloadCV = () => {
  // Get the user agent to check if it's a mobile device
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // For mobile devices, open the CV in a new tab
    window.open('/abdirahman-cv.pdf', '_blank');
  } else {
    // For desktop devices, trigger download
    const link = document.createElement('a');
    link.href = '/abdirahman-cv.pdf';
    link.download = 'Abdirahman-Abdishakur-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

const Button = ({ children, variant = 'primary', className = '', onClick, ...props }) => {
  const baseStyles = "px-8 py-3 text-sm font-medium tracking-wider rounded-full transition-all uppercase";
  const variants = {
    primary: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    outline: "border-2 border-gray-200 text-gray-600 hover:border-primary hover:text-primary"
  };

  const handleClick = (e) => {
    if (children === 'Download CV') {
      downloadCV();
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button; 