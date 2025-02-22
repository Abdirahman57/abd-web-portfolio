import { motion } from 'framer-motion';

const BlogCard = ({ post, index }) => {
  return (
    <motion.article
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
  );
};

export default BlogCard; 