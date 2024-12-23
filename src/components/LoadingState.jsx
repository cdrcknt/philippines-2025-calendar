import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function LoadingState() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Skeleton height={60} />
            <div className="p-4">
              <Skeleton count={3} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadingState;