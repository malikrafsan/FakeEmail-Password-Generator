// Ke artikel tentang vpn

import { Link } from "react-router-dom";
import "./sidebar_box.css";
import vpn from "./a_vpn.png";

const SidebarBox4 = () => {
    return (
        <div className="adBox">
        <Link to="https://edtechmagazine.com/higher/article/2020/10/5-vpn-myths-your-end-users-need-know" className="linkClick" href="YOUR-URL-HERE">
            <hr className="thinLine"/>
            <img 
                src={vpn}
                alt="VPN with techy nodules"
                className="adImg"
            />
            <span className="adTitle">
                <br/>VPN: mitos dan miskonsepsi
            </span>
            <div className="arrow">
                <i className="far fa-angle-double-right"></i>
            </div>
        </Link>
        </div>
    );
}

export default SidebarBox4;