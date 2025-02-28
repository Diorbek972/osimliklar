//css
import '../App.css'
// bootsreap
import 'bootstrap/dist/css/bootstrap.min.css';

import CaruselMain from '../components/CaruselMain'
import Gullar from '../components/Gullar';
import BlogPost from '../components/BlogPost';
import Cateforia from "../components/Cateforia";
function Home() {
  return (
    <div>
      <div className="container">
        <CaruselMain/>
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
