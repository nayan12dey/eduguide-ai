import React from 'react';
import { StudyItemCard, SkeletonCard } from './StudyItemCard';

export default function StudyGrid({ isLoading = false, items = [] }) {
  // We'll generate an array of 8 for the loading skeletons
  const skeletons = Array.from({ length: 8 });

  return (
    <div className="w-full py-10 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 
        Grid System:
        - 1 column on mobile (default)
        - 2 columns on tablet (md:grid-cols-2)
        - 4 columns on desktop (lg:grid-cols-4)
      */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {isLoading ? (
          // Render 8 Skeleton Cards while loading
          skeletons.map((_, index) => (
            <SkeletonCard key={`skeleton-${index}`} />
          ))
        ) : items.length > 0 ? (
          // Render actual items when data is ready
          items.map((item, index) => (
            <StudyItemCard key={item.id || index} item={item} />
          ))
        ) : (
          // Fallback if no items exist and not loading
          <div className="col-span-full py-20 text-center text-slate-400">
            <p className="text-lg">No study items found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
