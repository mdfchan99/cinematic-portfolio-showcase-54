
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Camera, Heart, Eye } from 'lucide-react';

const Photography = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const photos = [
    {
      id: 1,
      title: "Urban Architecture",
      description: "Modern city skyline captured during golden hour",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=600&fit=crop",
      likes: 124,
      views: 1200
    },
    {
      id: 2,
      title: "Nature's Pattern",
      description: "Intricate details of natural formations",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=600&fit=crop",
      likes: 89,
      views: 890
    },
    {
      id: 3,
      title: "Street Life",
      description: "Candid moments from urban photography",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&h=600&fit=crop",
      likes: 156,
      views: 1800
    },
    {
      id: 4,
      title: "Minimalist Design",
      description: "Clean lines and geometric shapes",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=600&fit=crop",
      likes: 203,
      views: 2100
    },
    {
      id: 5,
      title: "Light & Shadow",
      description: "Playing with natural lighting effects",
      image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=500&h=600&fit=crop",
      likes: 178,
      views: 1650
    },
    {
      id: 6,
      title: "Abstract Colors",
      description: "Vibrant colors in abstract composition",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=600&fit=crop",
      likes: 234,
      views: 2400
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="p-6">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-800/30 rounded-full border border-purple-500/30 hover:bg-purple-700/40 transition-all duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </nav>

      <div className="container mx-auto px-6 py-12">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-purple-400" />
            <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Photography
            </h1>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Capturing moments and perspectives through the lens of creativity and technical precision
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={photo.id}
              className={`group relative bg-gray-800/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => setSelectedImage(photo.image)}
            >
              {/* Photo */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4 text-red-400" />
                      <span>{photo.likes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4 text-blue-400" />
                      <span>{photo.views}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Photo Info */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                  {photo.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {photo.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-700/50">
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Heart className="w-4 h-4" />
                    <span>{photo.likes} likes</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-400">
                    <Eye className="w-4 h-4" />
                    <span>{photo.views} views</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-gray-300 mb-6">
            Interested in collaborating or hiring me for photography projects?
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            <Camera className="w-5 h-5" />
            <span className="text-lg font-medium">Let's Work Together</span>
          </Link>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <img 
              src={selectedImage}
              alt="Selected photo"
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Photography;
