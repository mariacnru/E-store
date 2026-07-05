import React, { useEffect, useState } from 'react'

function Home() {

    const [currentSlide, setCurrentSlide] = useState(1);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => {
          if (prev === 3) {
            return 1;
          }

          return prev + 1;
        });
      }, 5000);

      return () => clearInterval(interval);
    }, []);
  return (
    <div>
      {" "}
      <div>
        {currentSlide === 1 && (
          <div className="h-64 bg-red-500 flex items-center justify-center text-white text-3xl">
            اسلاید 1
          </div>
        )}

        {currentSlide === 2 && (
          <div className="h-64 bg-blue-500 flex items-center justify-center text-white text-3xl">
            اسلاید 2
          </div>
        )}

        {currentSlide === 3 && (
          <div className="h-64 bg-green-500 flex items-center justify-center text-white text-3xl">
            اسلاید 3
          </div>
        )}
      </div>
    </div>
  );
}

export default Home