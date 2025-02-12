const mainNewsData = [
  {
    image:
      "https://codeacademy.lt/wp-content/uploads/2024/10/kas-yra-dirbtinis-intelektas.jpg",
    category: "Pakeista",
    title: "Dirbtinis intelektas: viskas, ką norėjote sužinoti",
    date: "2024-10-30",
    link: "#",
  },
  {
    image:
      "https://codeacademy.lt/wp-content/uploads/2024/10/kas-yra-dirbtinis-intelektas.jpg",
    category: "Technologijos",
    title: "Dirbtinis intelektas: viskas, ką norėjote sužinoti",
    date: "2024-10-30",
    link: "#",
  },
];

const secondaryNewsData = [
  {
    image:
      "https://codeacademy.lt/wp-content/uploads/2024/10/kas-yra-dirbtinis-intelektas.jpg",
    category: "Technologijos",
    title: "Dirbtinis intelektas: viskas, ką norėjote sužinoti",
    date: "2024-10-30",
    link: "#",
  },
  {
    image:
      "https://codeacademy.lt/wp-content/uploads/2024/10/20240916_112845-1-scaled-e1728646393611-1024x590.jpg",
    category: "Technologijos",
    title: "Dirbtinis intelektas: viskas",
    date: "2024-10-30",
    link: "#",
  },
  {
    image:
      "https://codeacademy.lt/wp-content/uploads/2024/10/kas-yra-dirbtinis-intelektas.jpg",
    category: "Technologijos",
    title: "Dirbtinis intelektas: viskas, ką norėjote sužinoti",
    date: "2024-10-30",
    link: "#",
  },
  {
    image:
      "https://codeacademy.lt/wp-content/uploads/2024/10/20240916_112845-1-scaled-e1728646393611-1024x590.jpg",
    category: "Technologijos",
    title: "Dirbtinis intelektas: viskas",
    date: "2024-10-30",
    link: "#",
  },
];

function NewsItem({ newsData }) {
  const { image, category, title, date, link } = newsData;

  return (
    <div className="news-item">
      <a href={link}>
        <div className="news-item-image-wrapper">
          <img src={image} alt={title} className="news-item-image" />
        </div>
        <div className="news-item-content-wrapper">
          <span className="news-item-category">{category}</span>
          <h2 className="news-item-title">{title}</h2>
          <span className="news-item-date">{date}</span>
        </div>
      </a>
    </div>
  );
}

export { mainNewsData, secondaryNewsData };
export default NewsItem;
