
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 min-h-[calc(100vh-10rem)] bg-white dark:bg-av-dark-slate">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-av-purple to-av-sky-blue">
        404
      </h1>
      <h2 className="mt-4 text-4xl font-bold text-av-text-dark dark:text-white">Page Not Found</h2>
      <p className="mt-4 max-w-md text-av-text-dark-secondary dark:text-av-medium-gray">
        Sorry, we couldn't find the page you're looking for. It might have been moved or deleted.
      </p>
      <div className="mt-10">
        <Link 
          to="/" 
          className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-av-purple to-av-violet-blue rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
   