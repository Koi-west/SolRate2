import React from 'react';

const TimeFilter = () => (
  <div className="flex items-center text-sm">
    <span className="mr-3 text-black">Update time: 09-27 14:00</span>
    {['1h', '24h', '7d'].map((filter) => (
      <button
        key={filter}
        className={`px-3 py-1.5 rounded-md ${
          filter === '24h' ? 'bg-gray-200' : 'bg-gray-100'
        } ml-2 text-black`}
      >
        {filter}
      </button>
    ))}
  </div>
);

export default TimeFilter;