import './Footer.css';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <Link to={{ pathname: "https://github.com/malikrafsan/FakeEmail-Password-Generator/"}} target="_blank" className="linkClick">
                Get the codes at our Github repo
            </Link>
        </div>
    );
}
 
export default Footer;