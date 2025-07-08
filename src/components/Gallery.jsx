import React from 'react';
import '../style/HomePage.css';

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

function Gallery() {
  const galleryData = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1494526585095-c41746248156",
  ];

  // Responsive check for mobile view
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="gallery">
      <h3>Gallery</h3>
      {isMobile ? (
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={10}
          slidesPerView={1}
        >
          {galleryData.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Gallery image ${index + 1}`} style={{ width: '100%', borderRadius: '15px' }} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="gallery-slider">
          {galleryData.map((img, index) => (
            <div key={index} className="gallery-slide">
              <img src={img} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Gallery;
