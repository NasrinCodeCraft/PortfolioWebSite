import { Link, Element, scroller } from "react-scroll";
import Navbar from "../../components/navbar/navbar";
import Home from "../home/home";
import About from "../about/about";
import Spinner from "../../components/spinner/spinner";
import Skills from "../skills/skills";
import Contact from "../contact/contact";

function Master() {
    return (
        <div className="cotainer-fluid">
            <Spinner/>
            <div ><Navbar /></div>
            <Element name="home"><Home /></Element>
            <Element name="about"><About /></Element>
            <Element name="services"><Skills /></Element>
            <Element name="contact"><Contact /></Element>
        </div>
    )

}

export default Master;
