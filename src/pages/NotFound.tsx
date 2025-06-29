
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center">
      <Navigation />
      
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-purple-200">Page Not Found</h2>
        <p className="text-gray-300 text-lg max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/"
          className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
