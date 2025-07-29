import { useState } from "react";
import LoadingSection from "./components/section/LoadingSection";
import MainCoverSection from "./components/section/MainCoverSection";
import IntroductionSection from "./components/section/IntroductionSection";
import CalendarSection from "./components/section/CalendarSection";
import GallerySection from "./components/section/GallerySection";
import LocationSection from "./components/section/LocationSection";
import AccountSection from "./components/section/AccountSection";
import ClosingSection from "./components/section/ClosingSection";
import FooterSection from "./components/section/FooterSection";
import FloatingButtons from "./components/common/FloatingButtons";
import {
  gallery,
  participants,
  transportation,
  weddingInfo,
} from "./utils/data";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingSection onFinish={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          <main className="relative flex flex-col max-w-md w-full min-h-[100vh] mx-auto bg-background items-center">
            <MainCoverSection info={weddingInfo} />
            <IntroductionSection contacts={participants} info={weddingInfo} />
            <CalendarSection info={weddingInfo} />
            <GallerySection img={gallery} />
            <LocationSection info={weddingInfo} trans={transportation} />
            <AccountSection parts={participants} />
            <ClosingSection info={weddingInfo} />
          </main>
          <FooterSection msg={weddingInfo.message.footer} />
          <FloatingButtons />
        </>
      )}
    </>
  );
}

export default App;
