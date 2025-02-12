import PodcastItem from "./PodcastItem/PodcastItem";
import "./Podcasts.css";

function Podcasts() {
  return (
    <>
      <section className="podcasts-section">
        <h2 className="section-title">Podcastai ir radijo laidos</h2>

        <div className="podcasts-list">
          <PodcastItem
            image="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-260x260.png"
            lenght="Trukme 8:30"
            title="Pakeistas title"
            date="2025-03-12"
          />
          <PodcastItem
            image="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-260x260.png"
            lenght="Trukme 8:30"
            title="Pakeistas title"
            date="2025-03-12"
          />
          <PodcastItem
            image="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-260x260.png"
            lenght="Trukme 8:30"
            title="Pakeistas title"
            date="2025-03-12"
          />
          <PodcastItem
            image="https://codeacademy.lt/wp-content/uploads/2021/09/Spotify-260x260.png"
            lenght="Trukme 8:30"
            title="Pakeistas title"
            date="2025-03-12"
          />
        </div>
      </section>
    </>
  );
}

export default Podcasts;
