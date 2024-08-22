import styled from "styled-components";
import { colors, fontSize } from "../utils/config";

export const ContactBox = styled.div`
  min-height: 100vh;

  .view-area {
    width: 50%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-align: center;
  }

  fieldset {
    width: 100%;
  }
  legend {
    text-align: center;
  }
  .social-media-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .social-media {
    position: fixed;
    bottom: 0px;
    right: 10px;
    z-index: 3;
    width: 80px;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
  }
  li {
    display: flex;
  }
  .icon {
    height: 22px;
    width: 100%;
    color: ${colors.alternativeLight};
    transition: color 0.15s ease-in-out, transform 0.15s ease-in-out;
  }
  .icon:hover {
    color: ${colors.primary};
    transform: scale(1.25);
  }
  .line {
    margin-top: 10px;
    border-left: 2px solid ${colors.alternativeLight};
    height: 120px;
  }
  .logo-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .logo-email {
    z-index: 3;
    position: fixed;
    top: 0px;
    left: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80px;
  }
  .line-logo-top {
    border-left: 2px solid ${colors.alternativeLight};
    height: 10px;
  }

  .line-logo-bottom {
    border-left: 2px solid ${colors.alternativeLight};
    height: 120px;
  }
  .logo {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: ${fontSize.subTitle1};
    color: ${colors.primary};
    width: 100%;
    margin: 15px 0;
  }
  .logo-i {
    cursor: pointer;
    color: ${colors.alternative};
    transition: transform 0.15s ease-in-out;
  }

  .logo-i:hover {
    transform: scale(1.15);
  }

  .email {
    margin: 20px 0;
    display: flex;
    width: 100%;
    writing-mode: vertical-rl;
    justify-content: center;
    text-align: center;
    align-items: center;
    font-size: ${fontSize.description2};
    color: ${colors.alternativeLight};
  }
  .text-span {
    cursor: pointer;
    color: ${colors.alternativeLight};
    transition: color 0.15s ease-in-out, transform 0.15s ease-in-out;
  }
  .text-span:hover {
    color: ${colors.primary};
    transform: scale(1.05);
  }

  @media screen and (max-width: 600px) {
    /* Estilos para pantallas con ancho máximo de 600px */

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;

    .view-area {
      width: 100%;
    }

    .social-media-box {
      display: flex;

      justify-content: center;
      width: 100%;
    }
    .social-media {
      z-index: 1;
      position: relative;
      display: flex;
      width: 100%;
      margin: 0;
      padding: 0;
      bottom: 0px;
      right: 0px;
      left: 0;
      top: 0;
    }

    ul {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center; 
      gap: 15px;
      margin: 0;
    }

    .line,
    .line-logo-top,
    .line-logo-bottom {
      display: none;
    }

    .logo-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .logo-email {
      z-index: 1;
      margin: 30px 0 20px 0;
      padding: 0;
      bottom: 0px;
      right: 0px;
      left: 0;
      top: 0;
      width: 100%;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .logo {
      display: none;
    }
    .email {
      margin: 0;
      display: flex;
      width: 100%;
      writing-mode: horizontal-tb;
      justify-content: center;
      text-align: center;
      align-items: center;
      font-size: ${fontSize.description2};
      color: ${colors.alternativeLight};
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    /* Estilos para pantallas con ancho mínimo de 601px y máximo de 1200px */
    .view-area {
      max-width: 500px;
      width: 100%;
    }
  }

  @media screen and (min-width: 1201px) {
    /* Estilos para pantallas con ancho mínimo de 1201px */
    .logo-box {
    }
  }
`;
