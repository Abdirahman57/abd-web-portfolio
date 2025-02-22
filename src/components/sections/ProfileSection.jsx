import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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

const ProfileSection = () => {
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
    <div className="space-y-6">
      <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
        <motion.img
          src="/abdirahman.jpg"
          alt="Abdirahman"
          className="w-full h-full object-cover"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <AnimatedText
            text="Hello! I'm"
            className="text-3xl font-bold text-gray-900"
          />
          <AnimatedText
            text="Abdirahman"
            className="text-3xl font-bold text-primary"
          />
        </div>
        <div className="h-12">
          <p className="text-xl font-medium text-gray-600">
            I am a <span className="text-primary inline-block min-w-[280px]">{displayText}</span>
            {/* <span className="animate-blink">|</span> */}
          </p>
        </div>
        <p className="text-gray-600 text-lg">
          I am passionate about creating beautiful and functional digital experiences that solve real-world problems. 
          With expertise in both front-end and back-end development, I strive to build applications that are not only 
          visually appealing but also performant and user-friendly.
        </p>
      </div>
    </div>
  );
};

export default ProfileSection; 