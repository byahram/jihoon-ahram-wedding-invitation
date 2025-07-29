import dayjs from "dayjs";
import type { IWeddingInfo } from "../../utils/types";

export default function ClosingSection({ info }: IWeddingInfo) {
  const weddingDate = dayjs(info.wedding.dateAndTime);
  const today = dayjs();
  const diff = weddingDate.diff(today, "day");

  const dDayText =
    diff === 0 ? "D-day" : diff > 0 ? `D - ${diff}` : `D + ${Math.abs(diff)}`;

  return (
    <section id="closing" className="relative w-full mx-auto overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-full aspect-[3/4]">
          <img
            src={info.images.closing}
            alt=""
            className="w-full object-contain"
          />
          <div aria-hidden="true" className="custom-gradient" />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none h-76 w-full bg-[#3f3937]"
        >
          <div className="w-full h-full flex flex-col items-center justify-center -mt-3 text-neutral-400">
            <p className="whitespace-pre-line leading-8">
              {info.message.closing}
            </p>
            <span className="mt-4 italic text-sm">
              {info.message.closing_refer}
            </span>
            <div className="text-lg text-neutral-200 font-semibold drop-shadow-md mt-12 italic">
              {dDayText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
