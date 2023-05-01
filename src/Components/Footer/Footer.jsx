import React from "react";

// Libraries
import { Button, Container, InputField } from "@hybris-software/ui-kit";
import useForm from "@hybris-software/use-ful-form";
// import useQuery from "@hybris-software/use-query";
import CustomButton from "../CustomButton/CustomButton";

// images
import box from "../../Assets/images/emailBox.png";

// icons
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

// Style
import Style from "./Footer.module.css";

const Footer = () => {
  const form = useForm({
    inputs: {
      email: {
        required: true,
      },
    },
  });

  return (
    <>
      <Container>
        <div className={Style.newsletter}>
          <div>
            <h1>Subscribe Newsletter</h1>
            <h5>The Travel</h5>
            <p>
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
            <div className={Style.emailInputs}>
              <InputField
                className={Style.emailField}
                type="email"
                placeholder="Your email address"
                {...form.getInputProps("email")}
              />

              <CustomButton colored>Subscribe</CustomButton>
            </div>
          </div>
          <div className={Style.mailBox}>
            <img src={box} alt="" />
          </div>
        </div>
      </Container>
      <div className={Style.footer}>
        <Container>
          <div className={Style.siteMapWrapper}>
            <div>
              <div className={Style.logo}></div>
              <div className={Style.socialMedia}>
                <BsFacebook
                  onClick={() =>
                    window.open("https://github.com/Takudzwa30", "_blank")
                  }
                  className={Style.link}
                />
                <BsTwitter
                  onClick={() =>
                    window.open("https://github.com/Takudzwa30", "_blank")
                  }
                  className={Style.link}
                />
                <BsYoutube
                  onClick={() =>
                    window.open("https://github.com/Takudzwa30", "_blank")
                  }
                  className={Style.link}
                />
                <AiFillInstagram
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/takudzwa_allen/",
                      "_blank"
                    )
                  }
                  className={Style.link}
                />
              </div>
            </div>
            <div className={Style.siteMap}>
              <h6>Our Destinations</h6>
              <p>Canada</p>
              <p>Alaksa</p>
              <p>France</p>
              <p>IceLand</p>
            </div>
            <div className={Style.siteMap}>
              <h6>Our Activities</h6>
              <p>Northern Lights</p>
              <p>Cruising and sailing</p>
              <p>Multi-activities</p>
              <p>Kayaing</p>
            </div>
            <div className={Style.siteMap}>
              <h6>Travel Blogs</h6>
              <p>Bali Travel Guide</p>
              <p>Sri Lanka travel Guide</p>
              <p>Peru Travel Guide</p>
              <p>Bali Travel Guide</p>
            </div>
            <div className={Style.siteMap}>
              <h6>Our Blogs</h6>
              <p>Our Story</p>
              <p>Work with us</p>
            </div>
            <div className={Style.siteMap}>
              <h6>Contact Us</h6>
              <p>Our Story</p>
              <p>Work with us</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
