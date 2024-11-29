import Home from "./Components/HomeModule/Home";
import "./App.css";
import Study from "./Components/StudyModule/Study";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/InfoModule/Error";
import Construction from "./Components/InfoModule/Construction";
import MobileInfo from "./Components/InfoModule/MobileInfo";
import Admin from "./Components/AdminModule/Admin";
import SubstudyMain from "./Components/StudyModule/subStudy/SubstudyMain";


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
                    <Route path="/admin" element={<Admin />} />
                    <Route path="*" element={<Error />} />
                    
                    <Route path="/study/sap" element={<SubstudyMain />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
