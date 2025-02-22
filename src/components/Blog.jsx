import { motion } from 'framer-motion';

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
      excerpt: 'A beginners guide to building web applications with ASP.NET and C#.',
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">My Blog</span>
          <h2 className="text-3xl font-bold text-secondary mt-4 mb-4">
            Latest Articles & News
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Stay up to date with the latest trends and technologies in web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {post.date}
                  </span>
                  <button className="text-primary hover:text-primary/80 font-medium transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog; 