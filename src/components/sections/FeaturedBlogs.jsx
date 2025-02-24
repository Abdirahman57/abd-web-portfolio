import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogModal from '../common/BlogModal';
import SectionTitle from '../common/SectionTitle';

const FeaturedBlogs = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredPosts = [
    {
      title: 'Modern Web Development with React',
      date: 'March 15, 2024',
      excerpt: 'Exploring the latest features and best practices in React development for building modern web applications.',
      content: `React has revolutionized the way we build web applications. In this comprehensive guide, we'll explore the latest features and best practices in React development.

We'll cover:
- The new React 18 features
- Building performant applications
- State management strategies
- Component design patterns
- Testing and deployment`,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60',
      category: 'Programming',
      readTime: '5 min read',
      tags: ['React', 'JavaScript', 'Web Development', 'Frontend'],
    },
    {
      title: 'The Future of Technology',
      date: 'February 20, 2024',
      excerpt: 'Exploring emerging technologies and their impact on software development.',
      content: 'Analysis of future technology trends and their implications for developers...',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=60',
      category: 'Technology',
      readTime: '5 min read',
      tags: ['Technology', 'AI', 'Machine Learning', 'Future'],
    },
    {
      title: 'Mobile App Development with React Native',
      date: 'February 25, 2024',
      excerpt: 'Essential tips and tricks for developing cross-platform mobile applications.',
      content: 'Comprehensive guide to React Native development and best practices...',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60',
      category: 'Mobile Development',
      readTime: '6 min read',
      tags: ['React Native', 'Mobile', 'JavaScript', 'Cross-platform'],
    },
  ];

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="LATEST BLOGS"
          title="Recent Articles & News"
          description="Stay updated with my latest thoughts and discoveries in technology"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {featuredPosts.map((post, index) => (
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
                  className="w-full h-48 object-cover"
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
                  <button
                    onClick={() => handleReadMore(post)}
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View All Articles
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </motion.div>

        {/* Blog Post Modal */}
        <BlogModal
          post={selectedPost}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default FeaturedBlogs; 