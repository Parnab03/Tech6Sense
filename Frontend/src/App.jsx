import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Card from './Components/Card/Card'
import Slider1 from './Components/Slider/Slider1'
import Placement from './Components/Placement/Placement'
import Courseslider from './Components/Courseslider/Courseslider'
import Testimonials from './Components/Testimonials/Textimonials'
import Study from './Components/Study/Study'
import './App.css'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Card></Card>
      <Slider1></Slider1>
      <Placement></Placement>
      <Courseslider></Courseslider>
      <Study></Study>
      <Testimonials></Testimonials>
      
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App
