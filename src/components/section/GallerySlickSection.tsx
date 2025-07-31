import { useState } from "react";
import Slider, { type CustomArrowProps } from "react-slick";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import CurvedBackground from "../common/CurvedBackground";
import SectionTitle from "../common/SectionTitle";

type GalleryProps = {
  img: string[];
};

export default function GallerySlickSection({ img }: GalleryProps) {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);

  // 메인 슬라이더 설정
  const mainSettings = {
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  // 썸네일 슬라이더 설정
  const thumbSettings = {
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
  };

  return (
    <section
      id="gallery"
      className="relative w-full mx-auto pt-28 pb-14 bg-[var(--background2)]"
    >
      <CurvedBackground color={"var(--background)"} />

      <div className="relative flex-col justify-center items-center text-center">
        <SectionTitle title="Gallery" />

        {/* 메인 슬라이더 */}
        <Slider
          {...mainSettings}
          asNavFor={nav2 as Slider}
          ref={(slider1) => setNav1(slider1)}
          className="mt-14"
        >
          {img.map((src, i) => (
            <div
              key={i}
              className="!flex justify-center items-center h-[672px] bg-[var(--background2)]"
            >
              <img
                src={src}
                alt={`main-${i}`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </Slider>

        {/* 썸네일 슬라이더 */}
        <div className="mt-3">
          <Slider
            {...thumbSettings}
            asNavFor={nav1 as Slider}
            ref={(slider2) => setNav2(slider2)}
          >
            {img.map((src, i) => (
              <div key={i} className="px-1">
                <img
                  src={src}
                  alt={`thumb-${i}`}
                  className="w-full aspect-square object-cover cursor-pointer border-2 border-transparent hover:border-blue-500"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

// 다음 버튼
function NextArrow({ onClick }: CustomArrowProps) {
  return (
    <div
      className="absolute top-1/2 right-5 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center cursor-pointer hover:bg-black/70 transition"
      onClick={onClick}
    >
      <MdOutlineArrowForwardIos className="text-white" />
    </div>
  );
}

// 이전 버튼
function PrevArrow({ onClick }: CustomArrowProps) {
  return (
    <div
      className="absolute top-1/2 left-5 z-10 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center cursor-pointer hover:bg-black/70 transition"
      onClick={onClick}
    >
      <MdOutlineArrowBackIos className="text-white" />
    </div>
  );
}
