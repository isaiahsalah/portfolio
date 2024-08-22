import styled from "styled-components";
import { colors } from "../utils/config";

export const WorksBox = styled.div`
  min-height: 100vh;

  fieldset {
    width: 100%;
  }
  .state-project {
    color: ${colors.primary};
  }
  .work {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    align-items: center;
    grid-gap: 0;
    position: relative;
  }

  .link-button {
    cursor: pointer;
  }

  .works-div {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
  }
  .back-image {
    z-index: -2;
    opacity: 100%;
    grid-row: 1;
    height: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    border-radius: 5px;
    transition: all 0.15s ease-in-out;
  }

  .back-image-0 {
    background-image: radial-gradient(
      circle at 20% 30%,
      ${colors.primary},
      ${colors.dark}
    );

    grid-column: 1/8;
    height: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    border-radius: 5px;
  }

  .back-image-1 {
    background-image: radial-gradient(
      circle at 80% 30%,
      ${colors.primary},
      ${colors.dark}
    );

    grid-column: 6/13;
    height: 100%;
    display: flex;
    margin: 0;
    padding: 0;
    border-radius: 5px;
  }
  .text-0 {
    grid-column: 8/13;
    text-align: right;
    justify-content: right;
  }

  .text-1 {
    grid-column: 1/6;
    text-align: left;
    justify-content: left;
  }
  .image {
    width: 100%;
    opacity: 0.4;
    aspect-ratio: 16/9;
    object-fit: cover;
    margin: 0;
    padding: 0;
    border-radius: 5px;
    transition: all 0.15s ease-in-out;
    filter: saturate(0%);
  }

  .text { 

    margin: 0;
    padding: 0;
    display: flex; 
    flex-wrap: wrap;
    align-content: center;
    gap: 20px;
  }
  

  .title {
    width: 100%;
    text-transform: capitalize;
  }
  .description-work {
    position: relative;
    padding: 0;
    display: flex;
    width: 500px;
    padding: 20px 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px ${colors.dark};
    color: ${colors.alternative};
    background-color: ${colors.secondary};
    text-align: justify;
    margin: 0;
  }
  .tecno {
    display: flex;
    gap: 10px;
    width: 100%;
  }

  .tecno-0 {
    justify-content: right;
  }
  .tecno-1 {
    justify-content: left;
  }

  .link {
    display: flex;
    gap: 10px;
    width: 100%;
  }
  .link-0 {
    justify-content: right;
  }
  .link-1 {
    justify-content: left;
  }

  .icon {
    display: flex;
    width: 25px;
    margin: 0;
    padding: 0;
    height: 25px;
    transition: all 0.15s ease-in-out;
    cursor: pointer;
  }
  .icon:hover {
    color: ${colors.primary};
  }

  @media screen and (max-width: 600px) {
    /* Estilos para pantallas con ancho máximo de 600px */
    .work {
      display: flex;
      width: 100%;
      position: relative;
    }

    .text {
      padding: 20px 40px;
      display: flex;
      justify-content: center;
      width: 100%;
      text-align: center;
      color: ${colors.alternative};
    }
    .description-work {
      width: 100%;
      padding: 0;
      box-shadow: none;
      text-align: center;
      background-color: transparent;
      border-radius: 0;
      color: ${colors.light};
    }
    .tecno {
      justify-content: center;
    }
    .link {
      justify-content: center;
    }

    .image {
      width: 100%;
      opacity: 8%;
      aspect-ratio: none;
      object-fit: cover;
      margin: 0;
      padding: 0;
      border-radius: 5px;
      filter: none;
      transition: all 0.15s ease-in-out;
      filter: saturate(50%);
    }
    .work:hover {
      .image {
        filter: none;
        opacity: 30%;
      }
    }
    .back-image {
      position: absolute;
      width: 100%;
      opacity: 0.4;
      transition: all 0.15s ease-in-out;
    }
  }

  @media screen and (min-width: 601px) and (max-width: 1200px) {
    /* Estilos para pantallas con ancho mínimo de 601px y máximo de 1200px */

    .work {
      display: flex;
      width: 100%;
      position: relative;
      margin: 0 5%;
    }

    .text {
      padding: 20px 40px;
      display: flex;
      justify-content: center;
      width: 100%;
      text-align: center;
      color: ${colors.alternative};
    }
    .description-work {
      width: 100%;
      padding: 0;
      box-shadow: none;
      text-align: center;
      background-color: transparent;
      border-radius: 0;
      color: ${colors.light};
    }
    .tecno {
      justify-content: center;
    }
    .link {
      justify-content: center;
    }

    .image {
      width: 100%;
      opacity: 8%;
      aspect-ratio: none;
      object-fit: cover;
      margin: 0;
      padding: 0;
      border-radius: 5px;
      filter: none;
      transition: all 0.15s ease-in-out;
      filter: saturate(0%);
    }
    .work:hover {
      .image {
        filter: none;
        opacity: 30%;
      }
    }
    .back-image {
      position: absolute;
      width: 100%;
      opacity: 0.4;
      transition: all 0.15s ease-in-out;
    }
  }

  @media screen and (min-width: 1201px) {
    /* Estilos para pantallas con ancho mínimo de 1201px */
    .work:hover {
      .image {
        filter: none;
        opacity: 100%;
      } 
    }  
  }
`;
