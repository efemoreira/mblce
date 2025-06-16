import { Post } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { formatDate, truncateText } from '@/utils/helpers';

interface PublicationListProps {
  posts: Post[];
  maxPosts?: number;
}

const PublicationList = ({ posts, maxPosts }: PublicationListProps) => {
  const displayPosts = maxPosts ? posts.slice(0, maxPosts) : posts;
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {displayPosts.map((post) => (
        <motion.div
          key={post.id}
          className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          variants={item}
        >
          <div className="relative h-48">
            <Image
              src={post.image || '/images/placeholder.jpg'}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="p-5">
            <div className="flex justify-between items-center mb-2">
              <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm">
                {formatDate(post.date)}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{truncateText(post.excerpt, 100)}</p>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-700">
                Por {post.author}
              </span>
              <Link 
                href={`/posts/${post.id}`} 
                className="text-primary hover:underline font-medium"
              >
                Leia mais
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PublicationList;
