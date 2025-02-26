//css
import './App.css'
// bootsreap
import 'bootstrap/dist/css/bootstrap.min.css';
// components
import MainLayout from './Layouts/MainLayout';
import Carusel from './components/carusel';
import Cateforia from './components/Cateforia';
import Gullar from './components/Gullar';
import BlogPost from './components/BlogPost';


function App() {


  return (
    <>
 <MainLayout/>
 <div className="container">
 <Carusel/>
 </div>
 {/* categotialar */}
 <Cateforia/>
 {/* gullar */}
 <Gullar/>
 {/* postblog */}
 <BlogPost/>
    </>
  )
}

export default App
