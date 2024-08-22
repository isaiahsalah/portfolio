import { useEffect } from "react";
import { MenuMovil } from "../../components/MenuMovil";
import { MenuDesktop } from "../../components/MenuDesktop";
import { HeaderBox } from "../../styles/Nav.styles";

export const Nav = () => {

    useEffect(() => {
        const navbar = document.querySelector<HTMLDivElement>(".header-nav");
        if (!navbar) return;
        let prevScrollPos = window.pageYOffset;
        window.onscroll = () => {
            if (navbar.style.top === "") {
                navbar.style.top = "0px";
            }
            const currentScrollPos = window.pageYOffset;
            if (prevScrollPos > currentScrollPos) navbar.style.top = "0px";
            else navbar.style.top = "-80px";
            prevScrollPos = currentScrollPos;
        };
    }, []);




    return (
        <HeaderBox>
            <header className="header-nav">
                <nav className="nav">
                    <MenuDesktop />
                    <MenuMovil />
                </nav>
            </header>
        </HeaderBox>
    );
};
