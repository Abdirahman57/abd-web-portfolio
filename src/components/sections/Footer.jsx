import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const FooterLink = ({ href, children }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-primary transition-colors"
  >
    {children}
  </a>
);

FooterLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const SocialLink = ({ platform, href }) => (
  <a
    href={href}
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary text-white transition-all"
  >
    <i className={`fab fa-${platform}`}></i>
  </a>
);

SocialLink.propTypes = {
  platform: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { platform: 'github', href: 'https://github.com/Abdirahman57' },
    { platform: 'linkedin', href: '#' },
    { platform: 'twitter', href: '#' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold tracking-tight">
                <span className="text-primary">A</span>bdirahman
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Creating beautiful digital experiences with a focus on user satisfaction and modern design principles.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-primary"></i>
                <FooterLink href="mailto:contact@example.com">
                  abdirahmanabdishakur57@gmail.com
                </FooterLink>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-primary"></i>
                <FooterLink href="tel:+1234567890">
                  +252 906 572 198
                </FooterLink>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>Somalia</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Follow Me</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <SocialLink
                  key={social.platform}
                  platform={social.platform}
                  href={social.href}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-400 text-sm"
        >
          <p>
            © {currentYear} Abdirahman. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 