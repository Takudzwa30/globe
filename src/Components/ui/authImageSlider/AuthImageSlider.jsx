import React, { useRef, useState, useEffect } from "react";

// Images
import SlideAuthLayout1 from "../../../Assets/images/authImageOne.png";
import SlideAuthLayout2 from "../../../Assets/images/authImageOne.png";
import SlideAuthLayout3 from "../../../Assets/images/authImageOne.png";

// Styles
import Style from "./AuthImageSlider.module.css";

const AuthImageSlider = () => {
  const sliderRef = useRef(null);
  const [slideActive, setSlideActive] = useState(1);

  const slider = [
    {
      id: 1,
      image: SlideAuthLayout1,
    },
    {
      id: 2,
      image: SlideAuthLayout2,
    },
    {
      id: 3,
      image: SlideAuthLayout3,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideActive === 3) {
        sliderRef.current.style.transform = `translateX(0%)`;
        setSlideActive(1);
      } else {
        sliderRef.current.style.transform = `translateX(-${
          slideActive * 100
        }%)`;
        setSlideActive(slideActive + 1);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [slideActive]);
  return (
    <div className={Style.box}>
      <div className={Style.pagination}>
        {/* <div className={Style.coverText}>
              <h4>{texts?.sliderTitle}</h4>
              <p>{texts?.sliderSubtitle}</p>
            </div> */}

        <div className={Style.tabs}>
          {slider.map((item, i) => {
            return (
              <div
                onClick={() => {
                  sliderRef.current.style.transform = `translateX(-${
                    i * 100
                  }%)`;
                  setSlideActive(item.id);
                }}
                className={
                  slideActive === item.id ? Style.tabActive : Style.tab
                }
                key={i}
              />
            );
          })}
        </div>
      </div>
      <div ref={sliderRef} className={Style.slide}>
        {slider.map((item, i) => {
          return (
            <div
              key={i}
              className={Style.item}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className={Style.coverText}>
                <h4>{item?.title}</h4>
                <p>{item?.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AuthImageSlider;
