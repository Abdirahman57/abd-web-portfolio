import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Footer from './components/sections/Footer';
import Contact from './components/Contact';
// import Projects from './components/Projects';

const App = () => {
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
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={
              <>
                <Home />
              </>
            } />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/projects" element={<Projects />} /> */}
            <Route path="/about" element={<About skills={skills} experience={experience} />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
