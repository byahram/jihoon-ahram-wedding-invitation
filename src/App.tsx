import { useState } from "react";
import LoadingSection from "./components/section/LoadingSection";
import MainCoverSection from "./components/section/MainCoverSection";
import { weddingInfo } from "./utils/data";

function App() {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <>
      {!isLoaded && <LoadingSection onFinish={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          <main className="relative flex flex-col max-w-md w-full min-h-[100vh] mx-auto bg-background items-center">
            <MainCoverSection info={weddingInfo} />
          </main>
        </>
      )}
    </>
  );
}

export default App;
