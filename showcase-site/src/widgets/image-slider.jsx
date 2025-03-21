import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Import images directly
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";

// Responsive breakpoints configuration
const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2, slidesToSlide: 1 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2, slidesToSlide: 1 },
  mobile: { breakpoint: { max: 767, min: 0 }, items: 1, slidesToSlide: 1 }
};

// Define image array with imported images
const sliderImages = [
  { url: image1 },
  { url: image2 },
  { url: image3 },
  { url: image4 },
  { url: image5 }
];

const ImageSlider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={3000}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImages.map((image, index) => (
          <div className="slider" key={index}>
            <img 
              src={image.url} 
              alt={`slide-${index + 1}`} 
              style={{ 
                width: "100%", 
                height: "auto", 
                maxHeight: "500px", 
                objectFit: "cover" 
              }} 
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

// Add some basic CSS for the carousel container
const styles = `
    /* Carousel container */
  .parent {
    margin: 0 auto;
    width: 100%;
    max-width: 900px;
  }

  /* Individual slide style */
  .slider {
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    margin: 0 10px; /* Adjust spacing between images */
  }

  /* Image styles */
  .slider img {
    width: 100%;
    height: auto; /* Ensure image retains its aspect ratio */
    max-height: 500px; /* Limit height to fit well */
    object-fit: contain; /* Prevent images from being cut off */
    border-radius: 8px;
  }

  /* Custom dot list style */
  .custom-dot-list-style {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  .custom-dot-list-style button {
    border: none;
    background: #ddd;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 5px;
    padding: 0;
    transition: background 0.3s ease;
  }

  .custom-dot-list-style button:hover {
    background: #999;
  }

  .react-multi-carousel-dot--active button {
    background: #333 !important;
  }
`;

// Apply styles
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default ImageSlider;