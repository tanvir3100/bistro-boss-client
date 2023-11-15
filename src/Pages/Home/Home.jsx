import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner/Banner";
import Birstro from "../../Components/Bistro/Birstro";
import CallUs from "../../Components/Callus/CallUs";
import Features from "../../Components/Features/Features";
import OurMenu from "../../Components/OurMenu/OurMenu";
import Recommends from "../../Components/Recommends/Recommends";
import SwiperAp from "../../Components/Swider/SwiperAp";
import Testimonial from "../../Components/Testimonial/Testimonial";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner />
            <SwiperAp />
            <Birstro />
            <OurMenu />
            <CallUs />
            <Recommends />
            <Features />
            <Testimonial />
        </div>
    );
};

export default Home;