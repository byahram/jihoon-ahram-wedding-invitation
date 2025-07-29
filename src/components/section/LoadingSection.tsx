import { useEffect, useState } from "react";

type Props = {
  onFinish: () => void;
};

export default function LoadingSection({ onFinish }: Props) {
  const firstText = "8년간 손잡고 걷다 보니...";
  const secondText = "2025년 9월 6일\n드디어 저희 결혼합니다!";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<
    "waiting" | "first" | "fadeout" | "second" | "done"
  >("waiting");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let timeout: number;

    if (phase === "waiting") {
      timeout = setTimeout(() => {
        setPhase("first");
      }, 1000);
    }

    if (phase === "first" && index < firstText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + firstText[index]);
        setIndex(index + 1);
      }, 100);
    }

    if (phase === "first" && index === firstText.length) {
      timeout = setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          setDisplayedText("");
          setFadeOut(false);
          setIndex(0);
          setPhase("second");
        }, 500);
      }, 500);
    }

    if (phase === "second" && index < secondText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + secondText[index]);
        setIndex(index + 1);
      }, 100);
    }

    if (phase === "second" && index === secondText.length) {
      timeout = setTimeout(() => {
        setPhase("done");
        onFinish();
      }, 1000);
    }

    return () => clearTimeout(timeout);
  }, [index, phase, firstText, secondText, onFinish]);

  return (
    <div className="flex items-center justify-center w-full h-screen bg-white">
      <div
        className={`text-2xl font-semibold text-black tracking-wider whitespace-pre-line text-center leading-loose transition-opacity duration-700 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        {displayedText}
      </div>
    </div>
  );
}
