import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./App.css"; // Import the CSS file

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,  // Show 2 images on desktop
    slidesToSlide: 1 // Slide 1 item at a time
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,  // Show 2 images on tablet
    slidesToSlide: 1 // Slide 1 item at a time
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,  // Show 2 images on mobile
    slidesToSlide: 1 // Slide 1 item at a time
  }
  };

const sliderImageUrl = [
  { url: "/images/image1.jpg" },
  { url: "/images/image2.jpg" },
  { url: "/images/image3.jpg" },
  { url: "/images/image4.jpg" },
  { url: "/images/image5.jpg" }
];

const Slider = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => (
          <div className="slider" key={index}>
            <img src={imageUrl.url} alt="slider" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
