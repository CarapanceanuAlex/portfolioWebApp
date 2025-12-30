import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Projects from './pages/projectsPage';
import ScrollToTop from './components/scrollToTop';
import ContactMe from './pages/contactMe';
import HuntingBibel from './pages/projects/huntingBibel';
import GardenWeather from './pages/projects/gardenWeather';

function App() {

  return (
    <>  
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/projects/huntingBibel' element={<HuntingBibel/>}/>
          <Route path='/projects/gardenWeather' element={<GardenWeather/>}/>
          <Route path='/contact' element={<ContactMe/>}/>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
