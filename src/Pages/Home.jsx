import Carusel from "../components/carusel"
import Gullar from '../components/Gullar';
import BlogPost from '../components/BlogPost';
import Cateforia from "../components/Cateforia";
function Home() {
  return (
    <div>
      <div className="container">
        <Carusel />
        {/* categotialar */}
       <Cateforia/>
        {/* gullar */}
        <Gullar />
        {/* postblog */}
        <BlogPost />
      </div>
    </div>
  )
}

export default Home
