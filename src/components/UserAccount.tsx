'use client';

import React, { useState } from 'react';
import StarRating from './StarRating';

const UserAccount: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4 text-black">Your Account</h2>
      <button className="bg-blue-500 text-white w-full py-2 rounded-full mb-4 text-sm font-medium">
        Verify Transaction
      </button>
      <div className="mb-4">
        <p className="mb-2 text-sm text-gray-800">Select your rating</p>
        <StarRating rating={rating} editable={true} onChange={setRating} />
      </div>
      <div>
        <p className="mb-2 text-sm text-gray-800">Your Comment</p>
        <textarea
          className="w-full border rounded-lg p-2 text-sm text-gray-800"
          rows={4}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Very good project. Well prepared and good user experience. This is one of my favorite projects on Solana. Very good project. Well prepared and"
        ></textarea>
      </div>
      <button className="bg-black text-white w-full py-2 rounded-full mt-4 text-sm font-medium">
        Submit
      </button>
    </div>
  );
};

export default UserAccount;