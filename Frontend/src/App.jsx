import Home from "./Components/HomeModule/Home";
import "./App.css";
import Course from "./Components/CourseModule/Course";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./Components/InfoModule/Error";
import Construction from "./Components/InfoModule/Construction";
import MobileInfo from "./Components/InfoModule/MobileInfo";
import Admin from "./Components/AdminModule/Admin";
import SAPABAP from "./Components/CourseModule/SAPABAP/SAPABAP";
import SAPHANA from "./Components/CourseModule/SAPHANA/SAPHANA";
import JAVAPROG from "./Components/CourseModule/JAVAPROG/JAVAPROG";
import CPROG from "./Components/CourseModule/CPROG/CPROG";
import DSA from "./Components/CourseModule/DSA/DSA";
import DBMS from "./Components/CourseModule/DBMS/DBMS";
import IOT from "./Components/CourseModule/IOT/IOT";



function App() {
    return (
        <>
            <BrowserRouter>
                <MobileInfo />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/course" element={<Course />} />
                    <Route path="/placement" element={<Construction />} />
                    <Route path="/about" element={<Construction />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="*" element={<Error />} />

                    <Route path="/course/sapabap" element={<SAPABAP />} />
                    <Route path="/course/saphana" element={<SAPHANA />} />
                    <Route path="/course/java" element={<JAVAPROG />} />
                    <Route path="/course/c" element={<CPROG />} />
                    <Route path="/course/dsa" element={<DSA />} />
                    <Route path="/course/dbms" element={<DBMS />} />
                    <Route path="/course/iot" element={<IOT />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
