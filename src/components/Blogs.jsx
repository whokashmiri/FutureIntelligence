import React from 'react';

const Blogs = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-500 via-red-300 to-pink-200 text-white">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-pulse">Coming Soon</h1>
        <p className="text-lg md:text-xl mb-6 text-white/80">
          In the meantime, Sign up for our monthly newsletter to stay up to date.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <input
            type="email"
            placeholder="Email Address"
            className="px-4 py-2 rounded-full text-gray-800 w-72 focus:outline-none border-2"
          />
          <button className="bg-red-400 text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-all duration-300">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
