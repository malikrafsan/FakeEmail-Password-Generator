import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>INI NAVBAR</h1>
      <Link to="/email">EMAIL</Link>
      <br />
      <Link to="/password">PASSWORD</Link>
      <br />
      <Link to="/articles">ARTICLES</Link>
    </div>
  );
}
 
export default Navbar;