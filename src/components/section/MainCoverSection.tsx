import type { IWeddingInfo } from "../../utils/types";
import { formatDate } from "../../utils/utils";

export default function MainCoverSection({ info }: IWeddingInfo) {
  return (
    <section
      id="main"
      className="relative w-full h-[100vh] mx-auto overflow-hidden"
    >
      <div className="relative aspect-[3/4] h-3/4 w-full">
        <img
          src={info.images.main}
          alt="Wedding Cover"
          className="object-cover w-full h-full"
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
          loading="eager"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[1px] left-0 right-0 h-[200px] bg-gradient-to-t from-white via-white/80 to-transparent"
        />

        <div className="absolute top-0 w-full h-full overflow-hidden pointer-events-none">
          <img
            draggable={false}
            className="absolute top-0 left-0 w-full select-none pointer-events-none call-out"
            style={{
              zIndex: 3,
              WebkitMaskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%, rgba(0,0,0,0))",
              maskImage:
                "linear-gradient(to bottom, rgba(0,0,0,1) 95%, rgba(0,0,0,0) 100%, rgba(0,0,0,0))",
            }}
            src="/effect/1.jfif"
            alt=""
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-1/4 bg-background leading-7 -mt-5">
        <div className="text-lg mb-3">
          <span className="font-semibold">{info.groom.nameKo.slice(1)}</span>{" "}
          <span className="text-[var(--title1)]">♥</span>{" "}
          <span className="font-semibold mr-0.5">
            {info.bride.nameKo.slice(1)}
          </span>
        </div>
        <p>{formatDate(info.wedding.dateAndTime)}</p>
        <p>{info.wedding.location}</p>
      </div>
    </section>
  );
}
