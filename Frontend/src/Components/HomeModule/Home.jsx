import Card from "./Card/Card";
import Slider1 from "./Slider/Slider1";
import Placement from "./Placement/Placement";
import Courseslider from "./Courseslider/Courseslider";
// import Testimonials from "./Testimonials/Textimonials";
import Study from "./Study/Study";
import Navbar from "../CommonModule/Navbar/Navbar";
import Footer from "../CommonModule/Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Card></Card>
            <Slider1></Slider1>
            <Placement></Placement>
            <Courseslider></Courseslider>
            <Study></Study>
            {/* <Testimonials></Testimonials> */}
            <Footer />
        </>
    );
};
export default Home;
