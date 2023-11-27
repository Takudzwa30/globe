import React from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Images
import star from "../../../../Assets/images/ion_star.png";
import googleLogo from "../../../../Assets/images/googleLogo.png";
import iceViews from "../../../../Assets/images/iceViews.png";
import northernLights from "../../../../Assets/images/northernLights.png";
import cave from "../../../../Assets/images/cave.png";

// Components
import CustomButton from "../../../../Components/CustomButton/CustomButton";

// Styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import Style from "./Reviews.module.css";
import ToolTip from "../../../../Components/ui/toolTip/ToolTip";

const data = [
  {
    heading: `“A real sense of community, nurtured”`,
    text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    stars: 5,
    name: "Olga",
    place: "Weave Studios – Kai Tak",
    companyLogo: googleLogo,
    company: "Google",
    bottomImage: iceViews,
  },
  {
    heading: `“The facilities are superb. Clean, slick, bright.”`,
    text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    stars: 4,
    name: "Thomas",
    place: "Weave Studios – Olympic",
    companyLogo: googleLogo,
    company: "Google",
    bottomImage: northernLights,
  },
  {
    heading: `“A real sense of community, nurtured”`,
    text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    stars: 5,
    name: "Eliot",
    place: "Weave Studios – Kai Tak",
    companyLogo: googleLogo,
    company: "Google",
    bottomImage: cave,
  },
  {
    heading: `“A real sense of community, nurtured”`,
    text: "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    stars: 5,
    name: "Olga",
    place: "Weave Studios – Kai Tak",
    companyLogo: googleLogo,
    company: "Google",
    bottomImage: iceViews,
  },
];

const Reviews = () => {
  return (
    <Container>
      <div className={Style.head}>
        <div>
          <h3>Reviews</h3>
          <h6>What people says about Globe facilities</h6>
        </div>

      </div>
      <div className={Style.cards}>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination, Autoplay]}
        >
          {data.map((item, index) => {
            return (
              <SwiperSlide
                style={{
                  paddingRight: "30px",
                  paddingBottom: "30px",
                }}
                key={index}
              >
                <Card {...item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Container>
  );
};

const Card = ({
  heading,
  text,
  stars,
  name,
  place,
  company,
  companyLogo,
  bottomImage,
}) => {
  function ImageList({ imageSrc, imageCount }) {
    const images = [];

    for (let i = 0; i < imageCount; i++) {
      images.push(
        <img
          key={i}
          style={{
            marginRight: "10px",
          }}
          src={imageSrc}
          alt=""
        />
      );
    }

    return <div>{images}</div>;
  }

  return (
    <div className={Style.review}>
      <div className={Style.greenBG} />
      <h4>{heading}</h4>
      <p>{text}</p>
      <p>View More</p>
      <ImageList imageSrc={star} imageCount={stars} />
      <h6>{name}</h6>
      <p>{place}</p>
      <div className={Style.companyWrapper}>
        <img src={companyLogo} alt="" />
        <h6>{company}</h6>
      </div>
      <div
        style={{
          backgroundImage: `url(${bottomImage})`,
        }}
        className={Style.bottomImage}
      />
    </div>
  );
};

export default Reviews;
