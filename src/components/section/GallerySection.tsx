import SectionTitle from "../common/SectionTitle";
import LightGallery from "lightgallery/react";
import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import CurvedBackground from "../common/CurvedBackground";

type GalleryProps = {
  img: string[];
};

export default function GallerySection({ img }: GalleryProps) {
  return (
    <section
      id="gallery"
      className="relative w-full mx-auto pt-28 pb-14 bg-[var(--background2)]"
    >
      <CurvedBackground color={"var(--background)"} />

      <div className="relative flex-col justify-center items-center text-center">
        <SectionTitle title="Gallery" />

        <LightGallery
          plugins={[lgZoom]}
          mode="lg-fade"
          speed={500}
          closable={true}
          download={false}
          mobileSettings={{
            controls: true,
            showCloseIcon: true,
            download: false,
          }}
          elementClassNames={"gallery grid grid-cols-3 gap-3 mt-14 h-auto"}
        >
          {img.map((src, index) => (
            <a
              className={"gallery__item"}
              key={index}
              href={src}
              data-lightbox="gallery"
              data-src={src}
            >
              <img
                src={src}
                alt={`Jihoon-and-Ahram-${index}`}
                className="img-fluid w-full aspect-square object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </section>
  );
}
