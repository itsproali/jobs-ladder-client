import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaQuoteLeft } from "react-icons/fa";
import filledStar from "../../../asset/testimonial/filled-star.png";
import unFilledStar from "../../../asset/testimonial/unfilled-star.png";
import circle1 from "../../../asset/circle-1.png";
import circle3 from "../../../asset/circle-3.png";
import client from "../../../asset/testimonial/client.png";
import client2 from "../../../asset/testimonial/client-2.png";
import client3 from "../../../asset/testimonial/client-3.png";
import "./Testimonial.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto">
      <div className="px-4 lg:px-20 py-20 relative">
        <div className="flex flex-col sm:gap-3 gap-1 justify-center items-center sm:mb-10 mb-5">
          <h5 className="font-bold uppercase text-primary sm:text-lg text-sm">
            Testimonial
          </h5>
          <h1 className=" md:text-3xl sm:text-2xl text-lg font-bold uppercase flex items-center gap-[2px]">
            What Customer Say
          </h1>
          <div className="flex sm:gap-2 gap-1 mt-1">
            <div className="sm:h-1 h-[2px] sm:w-12 w-8 bg-secondary rounded-lg"></div>
            <div className="sm:h-1 h-[2px]  sm:w-7 w-4 bg-primary rounded-lg"></div>
          </div>
        </div>
        <Slider {...settings}>
          {/* Person 1 */}
          <div className="my-10">
            <div className="mx-4 rounded-lg shadow-xl border cursor-pointer pt-8 px-6 flex flex-col justify-between h-[300px] bg-transparent backdrop-blur-md">
              <div className="">
                <FaQuoteLeft className="text-6xl text-primary -mt-16"></FaQuoteLeft>
                <div className="flex items-center my-6">
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={unFilledStar} alt="Star" />
                </div>
                <h2 className="text-center">
                  I have been using Job's Ladder from the beginning and have
                  saved my ton of money and time.
                </h2>
              </div>
              <div className="">
                <div className="-mb-4">
                  <h2 className="font-medium text-secondary">Malino Alex</h2>
                  <p className="text-xs">New York, USA</p>
                </div>
                <div className="flex justify-end">
                  <img
                    src={client}
                    alt="client"
                    className="block w-16 h-16 rounded-full bg-white -mb-8 border-4 border-white shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Person 2 */}
          <div className="my-10">
            <div className="mx-4 rounded-lg shadow-xl border cursor-pointer pt-8 px-6 flex flex-col justify-between h-[300px] bg-transparent backdrop-blur-md">
              <div className="">
                <FaQuoteLeft className="text-6xl text-primary -mt-16"></FaQuoteLeft>
                <div className="flex items-center my-6">
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={unFilledStar} alt="Star" />
                </div>
                <h2 className="text-center">
                  Very useful to find candidates which we actually wants. It is
                  such a great platform!. Loved it.
                </h2>
              </div>
              <div className="">
                <div className="-mb-4">
                  <h2 className="font-medium text-secondary">Olivia</h2>
                  <p className="text-xs">Chicago, USA</p>
                </div>
                <div className="flex justify-end">
                  <img
                    src={client2}
                    alt="client"
                    className="block w-16 h-16 rounded-full bg-white -mb-8 border-4 border-white shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Person 3 */}
          <div className="my-10">
            <div className="mx-4 rounded-lg shadow-xl border cursor-pointer pt-8 px-6 flex flex-col justify-between h-[300px] bg-transparent backdrop-blur-md">
              <div className="">
                <FaQuoteLeft className="text-6xl text-primary -mt-16"></FaQuoteLeft>
                <div className="flex items-center my-6">
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={unFilledStar} alt="Star" />
                </div>
                <h2 className="text-center">
                  It is Very easy to manage whole people'se of the company. I
                  appreciate & recommend it.
                </h2>
              </div>
              <div className="">
                <div className="-mb-4">
                  <h2 className="font-medium text-secondary">Eva Rose</h2>
                  <p className="text-xs">Paris, France</p>
                </div>
                <div className="flex justify-end">
                  <img
                    src={client3}
                    alt="client"
                    className="block w-16 h-16 rounded-full bg-white -mb-8 border-4 border-white shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Person 4 */}
          <div className="my-10">
            <div className="mx-4 rounded-lg shadow-xl border cursor-pointer pt-8 px-6 flex flex-col justify-between h-[300px] bg-transparent backdrop-blur-md">
              <div className="">
                <FaQuoteLeft className="text-6xl text-primary -mt-16"></FaQuoteLeft>
                <div className="flex items-center my-6">
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={filledStar} alt="Star" />
                  <img src={unFilledStar} alt="Star" />
                </div>
                <h2 className="text-center">
                  I can't believe this how easy to manage employees online using
                  this website. It saved my valuable time.
                </h2>
              </div>
              <div className="">
                <div className="-mb-4">
                  <h2 className="font-medium text-secondary">John Doe</h2>
                  <p className="text-xs">Dhaka, Bangladesh</p>
                </div>
                <div className="flex justify-end">
                  <img
                    src="https://raw.githubusercontent.com/shakil18046/kerbillas/main/img/team-1.png"
                    alt="client"
                    className="block w-16 h-16 rounded-full bg-white -mb-8 border-4 border-white shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </Slider>
        <div className="hidden md:block absolute left-8 bottom-8 -z-10">
          <img src={circle1} alt="circle" />
        </div>
        <div className="hidden md:block absolute right-8 top-20 -z-10 w-24 h-24">
          <img src={circle3} alt="circle" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
