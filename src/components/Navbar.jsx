import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Button from './common/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'CONTACT', path: '/contact' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'ABOUT', path: '/about' },
    { name: 'BLOG', path: '/blog' },
  ];

  return (
    <nav className="bg-white py-6 fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:justify-start gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-primary">A</span>bdirahman
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[13px] font-medium text-gray-600 hover:text-primary transition-colors tracking-[0.1em]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Download CV Button - Desktop */}
          <div className="hidden lg:block">
            <Button
              variant="primary"
              className="!px-6 !py-2 !text-xs"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download CV
            </Button>
          </div>

          {/* Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary lg:hidden"
          >
            {isOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[13px] font-medium text-gray-600 hover:text-primary transition-colors tracking-[0.1em]"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              {/* Download CV Button - Mobile */}
              <Button
                variant="primary"
                className="!py-2 !text-xs"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                Download CV
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 