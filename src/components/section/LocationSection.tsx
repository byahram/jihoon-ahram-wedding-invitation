import { useState, useEffect } from "react";
import SectionTitle from "../common/SectionTitle";
import { Button } from "../common/Buttons";
import { MdOutlineLocalPhone } from "react-icons/md";
import type { Transportation, WeddingInfo } from "../../utils/types";
import CurvedBackground from "../common/CurvedBackground";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    kakao: any;
  }
}

export default function LocationSection({
  info,
  trans,
}: {
  info: WeddingInfo;
  trans: Transportation[];
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCall = (text: string) => {
    window.location.href = `tel:${text}`;
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_MAP_KEY
    }&autoload=false`;
    script.async = true;
    script.onload = () => {
      if (window.kakao && window.kakao.maps) {
        window.kakao.maps.load(() => {
          const container = document.getElementById("map");
          if (!container) return;

          const lat = 37.53385;
          const lng = 126.97756;

          const map = new window.kakao.maps.Map(container, {
            center: new window.kakao.maps.LatLng(lat, lng),
            level: 5,
          });

          new window.kakao.maps.Marker({
            position: new window.kakao.maps.LatLng(lat, lng),
            map,
          });
        });
      }
    };
    document.head.appendChild(script);
  }, []);

  return (
    <section
      id="location"
      className="relative w-full mx-auto overflow-hidden pt-28 pb-14 px-8"
    >
      <CurvedBackground color={"var(--background2)"} />

      <div className="flex flex-col items-center text-center">
        <SectionTitle title="Location" />
        <div className="space-y-1 flex flex-col justify-center items-center">
          <p>{info.wedding.address}</p>
          <p>{info.wedding.location}</p>
          <p className="flex gap-1.5 justify-center items-center">
            {info.wedding.call}{" "}
            <MdOutlineLocalPhone
              className="cursor-pointer"
              onClick={() => handleCall(info.wedding.call)}
            />
          </p>

          <Button
            className="px-4 py-2 text-sm mt-4 rounded-md"
            variant="gallery_more"
            onClick={() => handleCopy(info.wedding.address)}
          >
            주소 복사
          </Button>
        </div>

        <div className="w-full mt-10">
          <div id="map" className="w-full h-[300px] shadow-lg"></div>

          <ul className="text-left w-full text-sm leading-relaxed space-y-6 mt-8">
            {trans.map((item, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center mb-3">
                  <p className="font-bold text-lg text-gray-800 mr-3">
                    {item.title}
                  </p>
                </div>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-2">
                    {detail}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>

        {isCopied && (
          <div className="fixed top-20 w-3/4 bg-neutral-800/50 text-white text-xs p-2 text-center transition-all rounded-xl">
            계좌번호가 복사되었습니다!
          </div>
        )}
      </div>
    </section>
  );
}
