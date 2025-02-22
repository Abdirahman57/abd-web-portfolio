import SectionTitle from '../common/SectionTitle';
import BlogCard from '../common/BlogCard';

const Blog = () => {
  const blogPosts = [
    {
      title: 'Modern Web Development with React',
      date: 'March 15, 2024',
      excerpt: 'Exploring the latest features and best practices in React development for building modern web applications.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
      category: 'React',
      readTime: '5 min read',
    },
    {
      title: 'Database Design Best Practices',
      date: 'March 10, 2024',
      excerpt: 'A comprehensive guide to designing efficient and scalable databases using MySQL and SQL Server.',
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop&q=60',
      category: 'Database',
      readTime: '7 min read',
    },
    {
      title: 'Full Stack Development with PHP',
      date: 'March 5, 2024',
      excerpt: 'Learn how to build complete web applications using PHP, MySQL, and modern development tools.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&auto=format&fit=crop&q=60',
      category: 'PHP',
      readTime: '10 min read',
    },
    {
      title: 'Getting Started with ASP.NET',
      date: 'March 1, 2024',
      excerpt: 'A beginner's guide to building web applications with ASP.NET and C#.',
      image: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&auto=format&fit=crop&q=60',
      category: '.NET',
      readTime: '8 min read',
    },
    {
      title: 'Java Development Tips',
      date: 'February 25, 2024',
      excerpt: 'Essential tips and tricks for Java developers to write better and more efficient code.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60',
      category: 'Java',
      readTime: '6 min read',
    },
    {
      title: 'Responsive Design Techniques',
      date: 'February 20, 2024',
      excerpt: 'Master the art of creating responsive websites using modern CSS techniques.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=60',
      category: 'CSS',
      readTime: '5 min read',
    },
  ];

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="My Blog"
          title="Latest Articles & News"
          description="Stay up to date with the latest trends and technologies in web development"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.title} post={post} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 