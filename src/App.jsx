import GlInfo from './GlInfo'
import {BrowserRouter, Route} from 'react-router-dom'
import {Link, Routes} from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Foto from './Foto'
import Map from './Map'
import Aside from './Aside'
import './style.css'
import './main.js'
import Upscroll from './Upscroll'
import Galery from './Galery'
import Home from './Home'
import Terminy from './Terminy'



function App() {
  
  return (
    <div className="content">   
      <Header />
      <Aside />   
      <Upscroll />
      <Routes>
          <Route exact path='/home' element={<Home />}/>
          <Route path='/galery' element={<Galery />}></Route>
          <Route path="/galery/:id" element={<GlInfo />}></Route>
          <Route path='/terminy' element={<Terminy />}></Route>
          <Route path='/foto' element={<Foto />}></Route>
          <Route path='/map' element={<Map />}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
