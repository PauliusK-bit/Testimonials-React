import "./SidebarNews.css";

function SidebarNews() {
  return (
    <>
      <section className="news-section">
        <h2 className="section-title">Renginiai</h2>

        <div className="events-list">
          <div className="event-item">
            <a href="#">
              <div className="event-item-image-wrapper">
                <img
                  src="https://codeacademy.lt/wp-content/uploads/2024/11/1107_CA_event_feed-768x768.png"
                  alt=""
                  className="event-item-image"
                />
              </div>
              <div className="event-item-content-wrapper">
                <div className="event-item-date">
                  <div className="event-item-day">28</div>
                  <div className="event-item-month">lap</div>
                </div>

                <div className="event-item-content">
                  <span className="event-item-location">
                    Upės g. 21, Greenhall 1, 10 aukštas ir Online
                  </span>
                  <h3 className="event-item-title">
                    UŽT finansuojamų programų ir Karjeros centro pristatymas
                  </h3>
                </div>
              </div>
            </a>
          </div>
          <div className="event-item">
            <a href="#">
              <div className="event-item-content-wrapper">
                <div className="event-item-date">
                  <div className="event-item-day">28</div>
                  <div className="event-item-month">lap</div>
                </div>

                <div className="event-item-content">
                  <span className="event-item-location">
                    Upės g. 21, Greenhall 1, 10 aukštas ir Online
                  </span>
                  <h3 className="event-item-title">
                    UŽT finansuojamų programų ir Karjeros centro pristatymas
                  </h3>
                </div>
              </div>
            </a>
          </div>
          <div className="event-item">
            <a href="#">
              <div className="event-item-content-wrapper">
                <div className="event-item-date">
                  <div className="event-item-day">28</div>
                  <div className="event-item-month">lap</div>
                </div>

                <div className="event-item-content">
                  <span className="event-item-location">
                    Upės g. 21, Greenhall 1, 10 aukštas ir Online
                  </span>
                  <h3 className="event-item-title">
                    UŽT finansuojamų programų ir Karjeros centro pristatymas
                  </h3>
                </div>
              </div>
            </a>
          </div>
        </div>

        <a href="#" className="button-large">
          Daugiau
        </a>
      </section>
    </>
  );
}

export default SidebarNews;
