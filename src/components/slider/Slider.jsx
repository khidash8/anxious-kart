import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useState } from "react";

const data = [
  "https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/1549200/pexels-photo-1549200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : (prev) => prev - 1);
    console.log("from next ", currentSlide);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div
        className="container"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <img src={data[0]} alt="1" />
        <img src={data[1]} alt="2" />
        <img src={data[2]} alt="3" />
      </div>
      <div className="icons">
        <div className="icon" onClick={handlePrevious}>
          <KeyboardArrowLeftIcon />
        </div>
        <div className="icon">
          <KeyboardArrowRightIcon onClick={handleNext} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
