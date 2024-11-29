import Home from "./Components/HomeModule/Home";
import "./App.css";
import Study from "./Components/StudyModule/Study";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/InfoModule/Error";
import Construction from "./Components/InfoModule/Construction";
import Admin from "./Components/AdminModule/Admin";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/study" element={<Study />} />
                    <Route path="/placement" element={<Construction />} />
                    <Route path="/about" element={<Construction />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
