import Footer from "../public/Footer/Footer";
import Navbar from "../public/Navbar/Navbar";
import Home from "./Components/HomeModule/Home";
import "./App.css";
import Study from "./Components/StudyModule/Study";

function App() {
    return (
        <>
            <Navbar></Navbar>
            <Home></Home>
            <Study></Study>
            <Footer></Footer>
        </>
    );
}

export default App;
