import Podcasts from "./PodcastsSection/Podcasts";
import SidebarNews from "./SidebarNews/SidebarNews";

function SidebarContent() {
  return (
    <>
      <aside className="sidebar-content">
        <Podcasts />
        <SidebarNews />
      </aside>
    </>
  );
}

export default SidebarContent;
