import Image from "next/image";
import { motion } from "framer-motion";
import { Reel } from "@/types";

interface ReelCardProps {
  reel: Reel;
  index: number;
}

export default function ReelCard({ reel, index }: ReelCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative aspect-square">
        <Image
          src={reel.thumbnail}
          alt={reel.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <svg className="w-12 h-12 text-white opacity-0 hover:opacity-100 transition-opacity duration-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900 line-clamp-2">{reel.title}</h3>
        <a 
          href={reel.videoUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center text-accent font-semibold hover:text-cyan-600 transition-colors duration-200"
        >
          Ver no Instagram
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
      {/* Hidden Instagram embed for proper functionality */}
      <blockquote
        className="instagram-media hidden"
        data-instgrm-permalink={reel.videoUrl}
        data-instgrm-version="14"
      ></blockquote>
    </motion.div>
  );
}
