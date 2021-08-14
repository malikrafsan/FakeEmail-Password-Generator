// Halaman penuh isi artikel

import { Link } from "react-router-dom";
import './Articles.css';
import Sidebar from './article_files/Sidebar';
import Post1 from './article_files/Post1';

const Articles = () => {
  return (
    <div className="articles">
      <div className="topArticles">
        <Post1 />
        <Sidebar />
      </div>
      <footer className="footer">
        <Link to="INSERT_URL_TO_MABAR'S_GITHUB" className="linkClick">
            Get the codes at our Github repo
        </Link>
      </footer>
    </div>
  );
}
 
export default Articles;