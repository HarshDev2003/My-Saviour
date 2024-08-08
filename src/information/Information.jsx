const MyComponent = () => {
    return (
      <div className="bg-grey-200 shadow-lg min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Half - Information */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">Information Section</h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
  
            {/* Right Half - Image */}
            <div className="flex justify-center items-center">
              <img src="/public/image.png" alt="Placeholder Image" className="rounded-lg shadow-lg" />
            </div>
          </div>
  
          {/* Bottom Section - YouTube Video */}
          <div className="h-screen mt-8">
  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Video Section</h2>
  <div className="flex justify-center h-full">
    <div className="w-full h-full px-4 sm:px-8 md:px-0">
      <div className="aspect-w-16 aspect-h-9 h-full">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
</div>




        </div>
      </div>
    );
  };
  
  export default MyComponent;
  