import React from "react";

// Libraries
import { Container } from "@hybris-software/ui-kit";

// Images
import star from "../../../../Assets/images/ion_star.png";
import googleLogo from "../../../../Assets/images/googleLogo.png";
import iceViews from "../../../../Assets/images/iceViews.png";

// Components
import CustomButton from "../../../../Components/CustomButton/CustomButton";

// Styles
import Style from "./Reviews.module.css";

const data = [
  {
    heading: `“A real sense of community, nurtured”`,
    text:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    stars: 5,
    name: "Olga",
    place: "Weave Studios – Kai Tak",
    companyLogo: googleLogo,
    company: "Google",
    bottomImage: iceViews,
  },
  {
    heading: `“A real sense of community, nurtured”`,
    text:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
    stars: 5,
    name: "Olga",
    place: "Weave Studios – Kai Tak",
    companyLogo: googleLogo,
    company: "Google",
    bottomImage: iceViews,
  },
  {
    heading: `“A real sense of community, nurtured”`,
    text:
      "Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for helping me always, even when I was out of the country. And always available when needed.",
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
          <h6>What people says about Golobe facilities</h6>
        </div>
        <CustomButton to={""}>See All</CustomButton>
      </div>
      <div className={Style.cards}>
        {data.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
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
