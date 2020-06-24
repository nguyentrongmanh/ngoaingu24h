import React from "react";
import { Carousel } from "antd";
import banner1 from "../../assets/images/banner1.jpg";
import banner2 from "../../assets/images/banner2.jpg";
import banner3 from "../../assets/images/banner3.jpg";
import banner4 from "../../assets/images/banner4.jpg";
import banner5 from "../../assets/images/banner5.jpg";
import "../../styles/home/index.css";

export const HomeCarousel = () => {
  return (
    <Carousel autoplay>
      <div>
        <img className="home-banner" src={banner1} alt="banner1" />
      </div>
      <div>
        <img className="home-banner" src={banner2} alt="banner2" />
      </div>
      <div>
        <img className="home-banner" src={banner3} alt="banner3" />
      </div>
      <div>
        <img className="home-banner" src={banner4} alt="banner4" />
      </div>
      <div>
        <img className="home-banner" src={banner5} alt="banner5" />
      </div>
    </Carousel>
  );
};
