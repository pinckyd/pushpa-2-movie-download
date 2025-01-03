import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min- bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col items-center justify-center p-8">
      {/* Main Content */}
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl font-bold text-gray-900">
            Your Amazing Product
          </h1>
          <p className="text-lg text-gray-600">
            Elevate your experience with our cutting-edge solution. Designed to
            simplify your life and boost productivity, our product is the perfect
            choice for modern professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-center"
            >
              Download for Windows
            </a>
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-center"
            >
              Download for Mac
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://picsum.photos/600/400"
            alt="Product Showcase"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default App;