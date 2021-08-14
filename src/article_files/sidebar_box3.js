// Ke artikel tentang antivirus

import { Link } from "react-router-dom";
import "./sidebar_box.css";
import mcaffee from "./a_mcaffee2.png";

const SidebarBox3 = () => {
    return (
        <div className="adBox">
        <Link to="https://security.berkeley.edu/resources/best-practices-how-to-articles/top-10-secure-computing-tips" className="linkClick" href="YOUR-URL-HERE">
            <hr className="thinLine"/>
            <img 
                src={mcaffee}
                alt="Chad McAffee asdge"
                className="adImg"
            />
            <span className="adTitle">
                <br/>10 best practice cybersecurity sehari-hari
            </span>
            <div className="arrow">
                <i class="far fa-angle-double-right"></i>
            </div>
        </Link>
        </div>
    );
}

export default SidebarBox3;