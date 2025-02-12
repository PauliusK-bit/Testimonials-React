function PodcastItem(props) {
  const { image, lenght, title, date } = props;

  return (
    <div className="podcast-item">
      <div className="podcast-item-controls">
        <img src={image} alt="" className="podcast-image" />
        <span className="podcast-length">{lenght}</span>
        <button className="podcast-play">Play</button>
      </div>
      <div className="podcast-item-content">
        <h3 className="podcast-title">{title}</h3>
        <span className="podcast-date">{date}</span>
      </div>
    </div>
  );
}

export default PodcastItem;
