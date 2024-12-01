import Card from "./Card/Card";
import Placement from "./Placement/Placement";
import Courseslider from "./Courseslider/Courseslider";
import Course from "./Course/Course";
// import Testimonials from "./Testimonials/Textimonials";
import Navbar from "../CommonModule/Navbar/Navbar";
import Footer from "../CommonModule/Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Card></Card>
            <Courseslider></Courseslider>
            <Course />
            <Placement></Placement>
            {/* <Testimonials></Testimonials> */}
            <Footer />
        </>
    );
};
export default Home;
