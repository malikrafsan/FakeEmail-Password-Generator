import './Password.css';
import { Link } from "react-router-dom";

const Password = () => {
  // CONTOH FUNGSI
  // const generator = () => {
  //   console.log("Ini password generator");
  // }

  return (
    <div className="password">
      <h1>Password... Passworrd Password Password AAAAAAAAAAAAAAAAAAA.... WANGY WANGY WANGY WANGY HU HA HU HA HU HA</h1>
      <div className="empty-space">&nbsp;</div>
      <footer className="footer">
        <Link to="INSERT_URL_TO_MABAR'S_GITHUB" className="linkClick">
            Get the codes at our Github repo
        </Link>
      </footer>
    </div>
  );
}
 
export default Password;