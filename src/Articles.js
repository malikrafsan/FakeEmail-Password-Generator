// Halaman penuh isi artikel

// import { Link } from "react-router-dom";
import './Articles.css';
import Sidebar from './article_files/Sidebar';
import Post1 from './article_files/Post1';

const Articles = () => {
  return (
    <div className="articles page">
      <div className="topArticles">
        <Post1 />
        <Sidebar />
      </div>
    </div>
  );
}
 
export default Articles;