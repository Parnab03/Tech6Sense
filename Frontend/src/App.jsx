import Footer from "./Components/CommonModule/Footer/Footer";
import Navbar from "./Components/CommonModule/Navbar/Navbar";
import Home from "./Components/HomeModule/Home";
import "./App.css";
import Study from "./Components/StudyModule/Study";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/InfoModule/Error";
import Construction from "./Components/InfoModule/Construction";
import MobileInfo from "./Components/InfoModule/MobileInfo";

function App() {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <MobileInfo/>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/study" element={<Study />} />
                    <Route path="/placement" element={<Construction />} />
                    <Route path="/about" element={<Construction />} />
                    <Route path="*" element={<Error />} />   
                </Routes>
            </BrowserRouter>
            <Footer></Footer>
        </>
    );
}

export default App;
