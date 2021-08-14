// Sidebar di kanan ke artikel-artikel lain. Mamles bikin 2 jadi samain aja lah untuk kedua artikel

import "./Sidebar.css";
import SidebarBox1 from "./sidebar_box1.js";
import SidebarBox2 from "./sidebar_box2.js";
import SidebarBox3 from "./sidebar_box3.js";
import SidebarBox4 from "./sidebar_box4.js";

const Sidebar = () => {
    return (
        // Judul sidebar
        <div className="sidebar">
            <hr className="thickLine"/>
            <span className="sidebarTitle">
                Bacaan lanjutan
            </span>

            <SidebarBox1 />
            <SidebarBox2 />
            <SidebarBox3 />
            <SidebarBox4 />

        </div>
    );
}

export default Sidebar;