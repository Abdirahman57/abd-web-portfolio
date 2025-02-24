import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

const BlogModal = ({ post, isOpen, onClose }) => {
  if (!post) return null;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <button
                onClick={onClose}
                className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{post.readTime}</span>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {post.title}
              </h2>

              <div className="prose max-w-none">
                <p className="text-gray-600 mb-6 whitespace-pre-line">
                  {post.content || post.excerpt}
                </p>

                {post.sections?.map((section, index) => (
                  <div key={index} className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {section.title}
                    </h3>
                    <p className="text-gray-600">{section.content}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              {post.tags && (
                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

BlogModal.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
    content: PropTypes.string,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    readTime: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
      })
    ),
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default BlogModal; 