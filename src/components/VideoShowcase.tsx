import React from 'react';
import { AspectRatio } from './ui/aspect-ratio';
import { Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    title: 'Video 1',
    platform: 'YouTube',
    thumbnail: 'https://img.youtube.com/vi/8yJ4MI5CQmQ/maxresdefault.jpg',
    duration: 'Watch Now',
    url: 'https://youtu.be/8yJ4MI5CQmQ'
  },
  {
    id: 2,
    title: 'Video 2',
    platform: 'YouTube',
    thumbnail: 'https://img.youtube.com/vi/0rOkOlLi7BE/maxresdefault.jpg',
    duration: 'Watch Now',
    url: 'https://youtu.be/0rOkOlLi7BE'
  },
  {
    id: 3,
    title: 'Video 3',
    platform: 'YouTube',
    thumbnail: 'https://img.youtube.com/vi/EviTINQOOQE/maxresdefault.jpg',
    duration: 'Watch Now',
    url: 'https://youtu.be/EviTINQOOQE?si=-bJaLn9A1yqECkx9'
  },
  {
    id: 4,
    title: 'Video 4',
    platform: 'YouTube',
    thumbnail: 'https://img.youtube.com/vi/aYHoI5F_MQk/maxresdefault.jpg',
    duration: 'Watch Now',
    url: 'https://youtu.be/aYHoI5F_MQk'
  },
  {
    id: 5,
    title: 'Video 5',
    platform: 'YouTube',
    thumbnail: 'https://img.youtube.com/vi/OfBP4BifngU/maxresdefault.jpg',
    duration: 'Watch Now',
    url: 'https://youtu.be/OfBP4BifngU'
  },
];

export const VideoShowcase: React.FC = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Latest Content</h2>
            <p className="text-muted-foreground">Watch the most recent uploads from all platforms</p>
          </div>
          <button className="hidden md:block text-primary font-semibold hover:underline">
            View All Videos
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <a 
              key={video.id} 
              href={video.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_0_25px_rgba(212,175,55,0.08)] block"
            >
              <AspectRatio ratio={16 / 9}>
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    <Play className="fill-current" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md rounded-full text-xs font-bold">
                  {video.platform}
                </div>
                <div className="absolute bottom-4 right-4 px-2 py-1 bg-black/60 backdrop-blur-md rounded text-xs font-bold">
                  {video.duration}
                </div>
              </AspectRatio>
              <div className="p-6">
                <h3 className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
        
        <button className="mt-8 w-full md:hidden py-4 bg-secondary rounded-xl text-primary font-bold">
          View All Videos
        </button>
      </div>
    </section>
  );
};
