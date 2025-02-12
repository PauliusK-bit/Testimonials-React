const eventData = [
  {
    image: "Nuotrauka",
    day: "8",
    month: "Menuo",
    location: "Vieta",
    title: "Pavadinimas",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D",
    day: "20",
    month: "Menuo",
    location: "Vieta",
    title: "Pavadinimas",
  },
  {
    image: "Nuotrauka",
    day: "16",
    month: "Menuo",
    location: "Vieta",
    title: "Pavadinimas",
  },
];

function SiderbarItem(props) {
  const { image, day, month, location, title } = props.eventsData;

  return (
    <>
      <div className="event-item">
        <a href="#">
          <div className="event-item-image-wrapper">
            <img src={image} alt="" className="event-item-image" />
          </div>
          <div className="event-item-content-wrapper">
            <div className="event-item-date">
              <div className="event-item-day">{day}</div>
              <div className="event-item-month">{month}</div>
            </div>

            <div className="event-item-content">
              <span className="event-item-location">{location}</span>
              <h3 className="event-item-title">{title}</h3>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default SiderbarItem;
export { eventData };
