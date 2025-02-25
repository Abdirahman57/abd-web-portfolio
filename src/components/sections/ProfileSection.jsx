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
  const roles = [
    'Software Developer',
    'Mobile App Developer',
    'React Native Developer',
    'Flutter Developer',
    'Database Engineer',
    'UI/UX Designer'
  ];
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
          </p>
        </div>
        <div className="space-y-4 text-gray-600">
          <p className="text-lg">
            I am passionate about creating beautiful and functional digital experiences that solve real-world problems. 
            With expertise in both front-end and back-end development, I strive to build applications that are not only 
            visually appealing but also performant and user-friendly.
          </p>
          <p className="text-lg">
            My focus includes mobile app development using React Native and Flutter, allowing me to create 
            cross-platform applications that provide native experiences. I also specialize in database design 
            and management, particularly with MongoDB for scalable and flexible data solutions.
          </p>
          <div className="flex flex-wrap gap-3 pt-4">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React Native</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">Flutter</span>
            <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">MongoDB</span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">Node.js</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection; 