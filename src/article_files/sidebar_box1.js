// Ke artikel tentang social credit system di China

import { Link } from "react-router-dom";
import "./sidebar_box.css";
import scs_surveil from "./a_scs_surveil.jpg";

const SidebarBox1 = () => {
    return (
        <div className="adBox">
        <Link to="https://www.theatlantic.com/technology/archive/2018/02/chinas-dangerous-dream-of-urban-control/553097/" className="linkClick">
            <hr className="thinLine"/>
            <img 
                src={scs_surveil}
                alt="Face recognition in SCS"
                className="adImg"
            />
            <span className="adTitle">
                <br/>Bagaimana China sedang membangun distopia algoritmik
            </span>
            <div className="arrow">
                <i className="far fa-angle-double-right"></i>
            </div>
        </Link>
        </div>
    );
}

export default SidebarBox1;