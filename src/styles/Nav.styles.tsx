import styled from "styled-components";
import { colors, fontSize } from "../utils/config";

//Componente de la barra de navegación
export const HeaderBox = styled.nav`
  .header-nav {
    z-index: 2;
    position: fixed;
    display: flex;

    align-items: center;
    height: 60px;
    padding: 20px 50px;
    font-size: ${fontSize.description2};
    left: 0;
    right: 0;
    top: 0px;
    background: linear-gradient(
      ${colors.dark},
      ${colors.dark}bf,
      ${colors.dark}80,
      transparent
    );
    transition: top 0.25s ease-out;
  }

  img {
  }
  

  .nav {
    width: 100%;
    display: flex;
    justify-content: right;
    align-items: center;
  }
  .menu-li {
    display: inline-block;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
  }
  .menu-a {
    display: inline-flex;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }
  .menu-title {
    transition: color 0.15s ease-in-out;
    margin: 0;
    padding-left: 2px;
  }
  .menu-title:hover {
    color: ${colors.primary};
  }

  .icon-language {
    background-color: transparent;
    padding: 0;
    color: ${colors.primary};
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }
  .icon-li {
    cursor: pointer;
    display: flex;
    color: ${colors.primary};
    align-items: center;
    justify-content: center;
    margin: 0;
  }

  .text-language {
    margin: 0;
    padding-left: 2px;
    text-align: center;
    transition: color 0.15s ease-in-out;
    color: ${colors.alternative};
    cursor: pointer;

  }

  .text-language:hover {
    color: ${colors.primary};
  }
  .hamburger {
    display: flex;
    cursor: pointer;
    margin: 0;
    padding: 0;
    transition: transform 0.15s ease-in-out;
  }

  .hamburger:hover {
    transform: scale(1.1);
    .icon-movil{
      color: ${colors.primary};

    }

  }
  
  .icon-movil {
      height: 40px;
      width: 40px;
      color: ${colors.light};
      transition: color 0.15s ease-in-out;

    } 
  @media screen and (max-width: 600px) {
    /* Estilos para pantallas con ancho máximo de 600px */
    .header-nav {
      margin: 0;
      padding: 10px 20px; 
    } 
    .nav-movil { 
      display: flex;
      width: 100%;
      justify-content: space-between; 
    }
    .hamburger {
      display: flex;
    }
    .nav-desktop {
      visibility: hidden;
      display: none;
    }
    .menu-m {
      display: none;
      height: 100vh;  
      text-align: center;
      justify-content: center;
      flex-direction: column;
      background-color: ${colors.secondary}e6;
      position: fixed;
      right: 0px;
      left: 0px;
      bottom: 0px;
      top: 0;
      margin: 0;
      font-size: ${fontSize.description2};
      gap: 25px;
    }
    .menu-language {
      cursor: pointer;

      display: flex;
      width: 100%;
      align-items: start;
      justify-content: center;
      text-align: center;
    }
    .menu-movil {
      display: inline-block;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      width: 100%;
    }
    .icon-language {
      height: ${fontSize.subTitle3};
      width: ${fontSize.subTitle3};
      padding: 0 2px;
    }
    .logo-movil {
      font-size: ${fontSize.subTitle2};
      font-weight: bold;
      display: flex;
      
    }
    
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    /* Estilos para pantallas con ancho mínimo de 601px y máximo de 1200px */
    .header-nav {
      margin: 0;
      padding: 10px 20px;
    }
    .nav {
      justify-content: right;
    }
    
    .hamburger {
      display: flex;
    }

    .nav-desktop {
      visibility: hidden;
      display: flex;
    }
    .menu-m {
      display: none;
      text-align: center;
      justify-content: center;
      flex-direction: column; 
      background-color: ${colors.secondary}e6;
      position: fixed;
      height: 100vh;
      right: 0px;
      left: 0px;
      bottom: 0px;
      top: 0;
      margin: 0;
      font-size: ${fontSize.description2};
      gap: 25px;
    } 
    .menu-language {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      align-items: start;
      justify-content: center;
      text-align: center;
    }
    .icon-a {
      display: flex;
    }
    .menu-movil {
      display: inline-block;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      width: 100%;
    } 
    .icon-language {
      height: ${fontSize.subTitle3};
      width: ${fontSize.subTitle3};
      padding: 0 2px;
    }
    .logo-movil {
      display: none;
    }
  }

  @media screen and (min-width: 1201px) {
    /* Estilos para pantallas con ancho mínimo de 1201px */
    .nav-movil {
      display: none;
    }
    .nav-desktop { 

    display: flex;
    align-items: center;
    gap: 12px;
  } 
  }
`;
