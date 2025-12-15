import React, { useState } from 'react';
import { Play } from 'lucide-react';

interface VideoPlaceholderProps {
  videoId?: string;
}

export const VideoPlaceholder: React.FC<VideoPlaceholderProps> = ({ videoId = "HdDJFRbNbX4" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20 bg-black">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full aspect-video bg-zinc-900 rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/10 group cursor-pointer"
      onClick={() => setIsPlaying(true)}
    >
      {/* Thumbnail Overlay - Using a high quality placeholder or youtube thumb */}
      <img 
        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
        alt="Video Thumbnail" 
        className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-60"
        onError={(e) => {
          // Fallback if maxresdefault doesn't exist
          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }}
      />
      
      {/* Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 bg-brand-accent/60 blur-[30px] rounded-full animate-pulse"></div>
          <button className="relative bg-brand-accent text-white p-5 md:p-6 rounded-full transform transition-all duration-300 group-hover:scale-110 shadow-[0_0_30px_rgba(236,72,153,0.5)]">
            <Play className="w-8 h-8 md:w-10 md:h-10 fill-current ml-1" />
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/90 text-sm font-semibold border border-white/10">
          Toque para assistir
        </span>
      </div>
    </div>
  );
};