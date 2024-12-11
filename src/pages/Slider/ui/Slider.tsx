import React from 'react';
// import styles from "./Slider.module.scss";

export const Slider = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const slides = [
    {
      image: "https://cdn2.thecatapi.com/images/3lo.jpg"
    },
    {
      image: "https://cdn2.thecatapi.com/images/b8b.jpg"
    },
    {
      image: "https://cdn2.thecatapi.com/images/34v.jpg"
    },
  ]

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);

  };

  return (
      <div className={"m-auto max-w-[1024px] mt-40 flex justify-center "}>

        <div className={"window__ relative w-[300px] h-[400px] border-2 overflow-hidden"}>
          <div className={"flex w-[100vw]"}>
            {slides.map((slide, index) => (
              <div className={"transition-all duration-300"} key={index}
                   style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                <img className={"w-full h-full object-cover"} src={slide.image} alt="img"/>
              </div>
            ))}
          </div>
          <button className={"absolute top-[50%] left-0 text-red-800 text-3xl"} onClick={goToPrevSlide}>&#10094;</button>
          <button className={"absolute top-[50%] right-0 text-red-800 text-3xl"} onClick={goToNextSlide}>&#10095;</button>
        </div>
      </div>
     
    
   
  )
};

