import React from 'react';
import { Star, BarChart, Clock } from 'lucide-react';
import { Button } from '@heroui/react';

export function StudyItemCard({ item }) {
  // Fallback data if item is undefined
  const data = item || {
    id: 'placeholder',
    title: 'Advanced React Patterns & Performance Optimization',
    category: 'Development',
    description: 'Master the art of building scalable and highly performant React applications. Dive deep into hooks, context, concurrent features, and suspense.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800',
    rating: 4.9,
    difficulty: 'Advanced',
    duration: '4h 15m'
  };

  return (
    <div className="flex flex-col w-full h-[420px] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-indigo-500/50 hover:shadow-[0_8px_30px_rgba(99,102,241,0.15)] transition-all duration-300 group">
      {/* Cover Image (aspect-video) */}
      <div className="relative w-full aspect-video bg-slate-800 overflow-hidden">
        <img 
          src={data.imageUrl} 
          alt={data.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-xs font-semibold bg-slate-900/80 text-teal-400 rounded-md backdrop-blur-md shadow-sm border border-slate-700/50">
            {data.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-grow p-5">
        <h3 className="text-lg font-bold text-slate-100 line-clamp-1 mb-2 group-hover:text-teal-400 transition-colors">
          {data.title}
        </h3>
        
        {/* Short description with line-clamp-3 */}
        <p className="text-sm text-slate-400 line-clamp-3 mb-4 flex-grow leading-relaxed">
          {data.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-5 pb-4 border-b border-slate-800/60">
          <div className="flex items-center gap-1.5 text-amber-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-medium text-slate-300">{data.rating}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <BarChart className="w-4 h-4 text-teal-500" />
            <span className="font-medium">{data.difficulty}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-indigo-400" />
            <span className="font-medium">{data.duration}</span>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          className="w-full bg-slate-800 hover:bg-indigo-600 text-white font-semibold border-0 transition-all duration-300 rounded-xl py-2 h-10 shadow-sm hover:shadow-indigo-500/25"
        >
          View Details
        </Button>
      </div>
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="flex flex-col w-full h-[420px] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden animate-pulse">
      {/* Cover Image Skeleton */}
      <div className="relative w-full aspect-video bg-slate-800" />

      {/* Content Skeleton */}
      <div className="flex flex-col flex-grow p-5">
        {/* Title */}
        <div className="h-6 bg-slate-800 rounded-md w-3/4 mb-3" />
        
        {/* Description lines */}
        <div className="space-y-2.5 mb-4 flex-grow mt-1">
          <div className="h-3.5 bg-slate-800 rounded-md w-full" />
          <div className="h-3.5 bg-slate-800 rounded-md w-full" />
          <div className="h-3.5 bg-slate-800 rounded-md w-2/3" />
        </div>

        {/* Meta Info Skeleton */}
        <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-800/60 mt-2">
          <div className="h-4 bg-slate-800 rounded-md w-12" />
          <div className="h-4 bg-slate-800 rounded-md w-16" />
          <div className="h-4 bg-slate-800 rounded-md w-14" />
        </div>

        {/* Button Skeleton */}
        <div className="h-10 w-full bg-slate-800 rounded-xl" />
      </div>
    </div>
  );
}
