import NewsSection from "./NewsSection/News";
import VideoSection from "./VideoSection/Video";
import "./Main.css";

function Main() {
  return (
    <>
      <main className="main-content">
        <NewsSection />
        <VideoSection />
      </main>
    </>
  );
}

export default Main;
