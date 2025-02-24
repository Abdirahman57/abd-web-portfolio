import { motion } from 'framer-motion';
import Hero from './sections/Hero';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import FeaturedBlogs from './sections/FeaturedBlogs';
import SectionTitle from './common/SectionTitle';

const Home = () => {
  const skills = [
    { name: 'HTML', progress: 95 },
    { name: 'CSS', progress: 90 },
    { name: 'JavaScript', progress: 85 },
    { name: 'React', progress: 80 },
    { name: 'PHP', progress: 85 },
    { name: 'MySQL', progress: 80 },
    { name: 'SQL Server', progress: 75 },
    { name: 'Java', progress: 70 },
    { name: 'ASP.NET', progress: 75 },
  ];

  const experience = [
    {
      period: '2021 - Present',
      title: 'Web Designer',
      company: 'Kobciye Innovate Solutions',
      location: 'Somalia',
    },
    {
      period: '2022 - 2025',
      title: 'UI/UX Designer',
      company: 'Kobciye Innovate Solutions',
      location: 'Somalia',
    },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Hero />
      </section>
                
      {/* Skills & Experience Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <SectionTitle
          subtitle="SKILLS / EXPERIENCES"
          title="Check My Skills And Work Experiences"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <ExperienceSection experience={experience} />

          {/* Skills */}
          <div>
            <SkillsSection skills={skills} />
          </div>
        </div>
      </motion.section>

      {/* Featured Blogs Section */}
      <FeaturedBlogs />
    </div>
  );
};

export default Home; 