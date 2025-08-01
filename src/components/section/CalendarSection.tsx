import type { IWeddingInfo } from "../../utils/types";
import CountdownTimer from "../common/CountdownTimer";

const getDaysInMonth = (month: string, year: string): number => {
  return new Date(parseInt(year), parseInt(month), 0).getDate(); // 윤년 반영
};

export default function CalendarSection({ info }: IWeddingInfo) {
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const [year, month, day] = info.wedding.dateAndTime.split(" ")[0].split("-");
  const [hour, minute] = info.wedding.dateAndTime.split(" ")[1].split(":");

  const period = parseInt(hour) < 12 ? "오전" : "오후";
  const formattedHour = parseInt(hour) % 12 || 12;

  const daysInMonth = getDaysInMonth(month, year);

  return (
    <section
      id="calendar"
      className="relative w-full mx-auto overflow-hidden pt-28 pb-14 px-10"
    >
      <div className="relative flex-col justify-center items-center text-center">
        <p className="text-xl mt-2 font-light [var(--font-parisienne)] flex text-left ml-3 whitespace-pre-line leading-8">
          {info.wedding.txt}
        </p>

        <div className="mt-3">
          {/* 요일 헤더 */}
          <div className="grid grid-cols-7 text-center border-t-2 py-2 font-semibold text-gray-600">
            {weekdays.map((day, index) => (
              <div key={index}>{day}</div>
            ))}
          </div>

          {/* 날짜 */}
          <div className="grid grid-cols-7 text-center border-b-2 text-gray-700 mt-4 gap-y-6 text-sm pb-6">
            {Array.from(
              { length: parseInt(info.wedding.numOfBlank) },
              (_, index) => (
                <div key={index}></div>
              )
            )}

            {/* 날짜들 */}
            {Array.from({ length: daysInMonth }, (_, i) => {
              const dayNum = i + 1;
              const isSelected = dayNum === parseInt(day);

              return (
                <div
                  key={dayNum}
                  className="relative flex flex-col items-center"
                >
                  {isSelected ? (
                    <>
                      <div className="w-8 h-8 rounded-full bg-[#d08c95] text-white flex items-center justify-center text-sm font-medium z-10">
                        {dayNum}
                      </div>
                      <span className="absolute -bottom-5 w-20 -left-4 text-[10px] text-[#883843] mt-1 font-bold">
                        {period} {formattedHour}시 {minute}분
                      </span>
                    </>
                  ) : (
                    <span className="w-8 h-8 inline-flex items-center justify-center">
                      {dayNum}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <CountdownTimer
          dateAndTime={info.wedding.dateAndTime}
          groomName={info.groom.nameKo}
          brideName={info.bride.nameKo}
        />
      </div>
    </section>
  );
}
