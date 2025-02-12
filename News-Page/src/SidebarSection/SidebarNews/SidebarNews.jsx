import SiderbarItem, { eventData } from "./SidebarItem/SiderbarItem";
import "./SidebarNews.css";

function SidebarNews() {
  return (
    <>
      <section className="news-section">
        <h2 className="section-title">Renginiai</h2>

        <div className="events-list">
          {eventData.map((event, index) => (
            <SiderbarItem key={index} eventsData={event} />
          ))}
        </div>

        <a href="#" className="button-large">
          Daugiau
        </a>
      </section>
    </>
  );
}

export default SidebarNews;
