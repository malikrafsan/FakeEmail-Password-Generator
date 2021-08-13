import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        {/* <li>The Secure Generator</li> */}
      <p className="logo" style = {{color:"white"}}>The Secure Generator</p>
        <li><Link to="/articles">Why it matters</Link></li>
        <li><Link to="/email">Generate E-Mail</Link></li>
        <li><Link to="/password">Generate Password</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;