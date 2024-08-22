import { useContext, useEffect, useRef, useState } from "react";
import { BsTranslate } from "react-icons/bs";
import { LanguajeContext } from "../providers/LanguajeProvider";
import { BiMenu } from "react-icons/bi";
import { EnglishLanguage, SpanishLanguage } from "../data/data";

export const MenuMovil = () => {
    const { languaje, setLanguaje } = useContext(LanguajeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLUListElement>(null);

    const changeLanguaje = () => {
        if (languaje.lang === "en") {
            setLanguaje(SpanishLanguage);
        } else {
            setLanguaje(EnglishLanguage);
        }
    }
    /*
        const openMenu = () => {
            const menu = document.querySelector(".menu-m");
            if (menu != null) {
                if (menu.style.display === "none" || menu.style.display === "") {
                    menu.style.display = "flex";
                }
            }
    
        };
        const closeMenu = () => {
            const menu = document.querySelector(".menu-m");
            const ancho = window.innerWidth;
            if (ancho <= 1200 && menu.style.display === "flex") {
                menu.style.display = "none";
            }
        };
        */

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        const ancho = window.innerWidth;
        if (ancho <= 1200) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className="nav-movil">
            <div className="logo-movil">
                <span className="color-p">{"{"}</span>
                <span>{"i"}</span>
                <span className="color-p">{"}"}</span>
            </div>
            <div className="hamburger" onClick={openMenu}>
                {" "}
                <BiMenu className="icon-movil" />{" "}
            </div>
            <ul ref={menuRef} style={{ display: isMenuOpen ? 'flex' : 'none' }} className="menu-m" onClick={closeMenu}>
                {languaje.menu.map((men, i) => (
                    <li className="menu-movil" key={i}>
                        <a className="menu-a" href={`#${men.link}`}>
                            <h6 className="color-p">{`0${i + 1}.`}</h6>
                            <h6 className="menu-title">{men.title}</h6>
                        </a>
                    </li>
                ))}

                <li className="menu-language" >
                    <BsTranslate className="icon-language" />.
                    <h6 className="text-language" onClick={changeLanguaje}>{languaje.title}</h6>

                </li>
            </ul>
        </div>
    );
};
