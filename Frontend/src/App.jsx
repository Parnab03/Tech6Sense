import Footer from "./Components/CommonModule/Footer/Footer";
import Navbar from "./Components/CommonModule/Navbar/Navbar";
import Home from "./Components/HomeModule/Home";
import "./App.css";
import Study from "./Components/StudyModule/Study";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/ErrorModule/Error";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>} />        
                    <Route path="study" element={<Study/>} />        
                    <Route path="*" element={<Error/>} />        
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </>
    );
}

export default App;
