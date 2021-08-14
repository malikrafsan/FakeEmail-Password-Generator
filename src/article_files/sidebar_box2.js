// Ke artikel tentang kebocoran data sluruh anggota USG tahun 2014

import { Link } from "react-router-dom";
import "./sidebar_box.css";
import yearpic from "./a_2014.jpg";

const SidebarBox2 = () => {
    return (
        <div className="adBox">
        <Link to="https://www.csoonline.com/article/3318238/the-opm-hack-explained-bad-security-practices-meet-chinas-captain-america.html" className="linkClick" href="YOUR-URL-HERE">
            <hr className="thinLine"/>
            <img 
                src={yearpic}
                alt="2014"
                className="adImg"
            />
            <span className="adTitle">
                <br/>Bagaimana data SEMUA anggota pemerintah AS bocor
            </span>
            <div className="arrow">
                <i class="far fa-angle-double-right"></i>
            </div>
        </Link>
        </div>
    );
}

export default SidebarBox2;