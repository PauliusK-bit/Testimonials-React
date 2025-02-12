import "./Video.css";

function VideoSection() {
  return (
    <>
      <section className="video-section">
        <h2 className="section-title">Vaizdo įrašai</h2>

        <div className="video-list">
          <div className="video-item">
            <h3 className="video-item-title">
              #6 Studentės istorija: sėkmė slypi disciplinoje
            </h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Rz6bswWbPqw?si=DsmwzqLZfI_2Evwp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-item">
            <h3 className="video-item-title">
              #6 Studentės istorija: sėkmė slypi disciplinoje
            </h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Rz6bswWbPqw?si=DsmwzqLZfI_2Evwp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="video-item">
            <h3 className="video-item-title">
              #6 Studentės istorija: sėkmė slypi disciplinoje
            </h3>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Rz6bswWbPqw?si=DsmwzqLZfI_2Evwp"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        <a href="#" className="button-large">
          Visi vaizdo įrašai
        </a>
      </section>
    </>
  );
}

export default VideoSection;
