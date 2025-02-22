import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const SocialLink = ({ platform }) => (
  <a
    href="#"
    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all"
  >
    <div className="w-5 h-5 flex items-center justify-center">
      <i className={`fab fa-${platform}`}></i>
    </div>
  </a>
);

SocialLink.propTypes = {
  platform: PropTypes.string.isRequired,
};

const AnimatedText = ({ text, className }) => {
  const letters = Array.from(text);
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1
      className={className}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={child}
          className={letter === " " ? "mr-2" : ""}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

AnimatedText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const Hero = () => {
  const socialPlatforms = ['github', 'linkedin', 'twitter'];
  const roles = ['Software Developer', 'Mobile App Developer', 'UI/UX Designer'];
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    let timeout;
    const currentRole = roles[currentRoleIndex];
    
    const updateText = () => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
          timeout = setTimeout(updateText, 100); // Typing speed
        } else {
          // Wait before starting to delete
          timeout = setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          timeout = setTimeout(updateText, 50); // Deleting speed
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    timeout = setTimeout(updateText, 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="lg:w-1/2 space-y-8"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <AnimatedText
              text="Hello! I'm"
              className="text-[64px] leading-[1.1] font-bold text-secondary"
            />
            <AnimatedText
              text="Abdirahman"
              className="text-[64px] leading-[1.1] font-bold text-primary"
            />
          </div>
          <div className="h-12 mt-4">
            <p className="text-xl font-medium text-gray-600">
              I am a <span className="text-primary inline-block min-w-[280px]">{displayText}</span>
              <span className="animate-blink">|</span>
            </p>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-500 text-lg max-w-lg"
          >
            I am passionate about creating beautiful and functional digital experiences that solve real-world problems.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-4 pt-4"
        >
          <Link to="/contact"> <Button>Let&apos;s Talk</Button></Link>
         
          <Button variant="outline">View Projects</Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="pt-12"
        >
          <p className="text-gray-500 text-sm mb-4">Check Out My</p>
          <div className="flex gap-3">
            {socialPlatforms.map((platform) => (
              <SocialLink key={platform} platform={platform} />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Right Content - Image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:w-1/2 relative"
      >
        <div className="relative">
          <motion.img
            src="/abdirahman.jpg"
            alt="Profile"
            className="w-full max-w-lg mx-auto object-cover rounded-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          {/* Background Shapes */}
          <motion.div
            className="absolute -right-8 -top-8 w-72 h-72 bg-primary opacity-10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute -left-8 -bottom-8 w-72 h-72 bg-primary opacity-10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero; 