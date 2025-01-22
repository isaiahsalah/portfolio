import { useEffect } from "react";
import { Nav } from "./sections/Nav";
import { Banner } from "./sections/Banner";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Works } from "./sections/Works";
import { Experiment } from "./sections/Experiment";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";
import createScrollRevealInstance from "../components/MyScrollReveal";
import Backimage from "../assets/images/socrates.jpg"

export const HomeScreen = () => {


    useEffect(() => {
        const timer = setTimeout(() => {
            const appElement = document.querySelector<HTMLDivElement>(".app");
            if (appElement) {
                appElement.style.visibility = 'visible';
            }
        }, 150);

        return () => clearTimeout(timer);
    }, []);




    useEffect(() => {
        const config = {
            distance: '100%',
            duration: 800,
            delay: 50,
            opacity: 0,
            easing: 'ease',
        }
        const configRight = {
            origin: 'right',
            ...config
        }
        const configLeft = {
            origin: 'left',
            ...config
        }
        const configTop = {
            origin: 'top',
            ...config
        }
        const configBottom = {
            origin: 'bottom',
            ...config
        }

        const MyScrollReveal = createScrollRevealInstance();
        MyScrollReveal.reveal(".header-nav", configTop);
        MyScrollReveal.reveal(".social-media", configBottom);
        MyScrollReveal.reveal(".logo-email", configTop);
        MyScrollReveal.reveal(".banner", configRight);

        MyScrollReveal.reveal(".about", configLeft);
        MyScrollReveal.reveal(".experience", configLeft);
        MyScrollReveal.reveal(".works", configLeft);
        MyScrollReveal.reveal(".experiments", configLeft);
        MyScrollReveal.reveal(".contact-contend", configBottom);

        /*languaje.menu.map((men, i) => {
            const configMenu = {
                origin: 'top',
                distance: '100%',
                duration: 1000,
                delay: ((i + 1) * 100) + 150,
                opacity: 0,
                easing: 'ease',
            }

            MyScrollReveal.reveal(`.menu-li-${i + 1}`, configMenu)


        })*/
    }, [])



    return (
        <div className="app">
            <Nav />
            <Banner />
            <About />
            <Experience />
            <Experiment />
            <Works />
            <Contact />
            <Footer />
            <img className="backgroud-image-app" src={Backimage} alt="UwU" />
        </div>
    );
};
