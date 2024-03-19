import React, { useState, useEffect } from 'react';

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://img.freepik.com/free-photo/ornate-floral-pattern-symbolizes-chinese-winter-celebration-generated-by-ai_188544-19683.jpg',
    'https://c0.wallpaperflare.com/preview/186/124/897/red-and-white-air-jordan-1-shoe-on-concrete-floor.jpg',
    'https://sneakerbardetroit.com/wp-content/uploads/2015/01/curry-one.jpg',
    'https://images6.alphacoders.com/709/709159.jpg',
    'https://cdn.activechristianity.org/image/upload/c_thumb,h_300,w_600,g_center/v1607546755/en/6415575fb4856ee6ac50559310861c10.jpg',
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentImage, images.length]);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: '1000px',
        height: '300px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Imagem ${index + 1}`}
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            opacity: index === currentImage ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out',
          }}
        />
      ))}
    </div>
  );
}
