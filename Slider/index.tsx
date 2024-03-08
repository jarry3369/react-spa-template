"use client";

import React from "react";
import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";

type Props = {
  items: Partial<unknown> & React.HTMLAttributes<unknown>[];
  ele: React.ReactElement;
};

const Slider = ({ items, ele }: Props) => {
  const [sliderRef] = useKeenSlider(
    {
      slideChanged() {
        console.log("slide changed");
      },
      breakpoints: {
        // "(max-width: 56rem)": {
        //   slides: { perView: 2, spacing: 64 },
        // },
        "(max-width: 37rem)": {
          slides: { perView: 1.5, spacing: 36 },
        },
      },
      mode: "free-snap",
      slides: {
        perView: 2,
        spacing: 24,
      },
    },
    []
  );

  return (
    <div
      ref={sliderRef}
      className="keen-slider"
      style={{
        overflow: "visible",
      }}
    >
      {items.map((item) =>
        React.cloneElement(ele, {
          ...ele.props,
          key: `${item}`,
          ...item,
          className: "keen-slider__slide" + ` ${ele.props.className ?? ""}`,
        })
      )}
    </div>
  );
};

export default Slider;
