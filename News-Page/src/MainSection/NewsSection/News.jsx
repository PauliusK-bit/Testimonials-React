import "./News.css";

import NewsItem, { mainNewsData, secondaryNewsData } from "./NewsItem/NewsItem";

function NewsSection() {
  return (
    <section className="news-section">
      <h1 className="page-title section-title">Naujienos</h1>

      <div className="news-wrapper">
        <div className="main-news">
          {mainNewsData.map((news, index) => (
            <NewsItem key={index} newsData={news} />
          ))}
        </div>

        <div className="secondary-news">
          {secondaryNewsData.map((news, index) => (
            <NewsItem key={index} newsData={news} />
          ))}
        </div>
      </div>

      <a href="#" className="button-large">
        Visos naujienos
      </a>
    </section>
  );
}

export default NewsSection;
