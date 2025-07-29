import { useState } from "react";
import LoadingSection from "./components/section/LoadingSection";
import MainCoverSection from "./components/section/MainCoverSection";
import { gallery, participants, weddingInfo } from "./utils/data";
import IntroductionSection from "./components/section/IntroductionSection";
import CalendarSection from "./components/section/CalendarSection";
import GallerySection from "./components/section/GallerySection";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);

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
          </main>
        </>
      )}
    </>
  );
}

export default App;
