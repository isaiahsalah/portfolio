import styled from "styled-components";
import { colors } from "../utils/config";

export const LoadingBox = styled.div`
display: flex;
margin: 0;
padding: 0;
width: 100%;
height: 100vh;
align-items: center;
justify-content: center;
animation: hideLogo 1.5s ease-out forwards 2.5s;





.text{
    display: block;
    align-items: center;
    justify-content: center;
    color: ${colors.alternative};
    white-space: nowrap;
    width: 0ch;
    animation: typing 0.5s steps(3) forwards 0.75s, blink .25s infinite step-end alternate, deleteText 0.35s steps(3) forwards 2s;
    overflow: hidden;
}

.text-alt{
  color: ${colors.primary};
}

@keyframes typing {
  100% {
    width: 3ch;
  }
  0% {
    width: 0;
  }
}

@keyframes blink {
    50% {border-color:transparent}
}

@keyframes deleteText {
  0% {
    width: 3ch;
  }
  100% {
    width: 0;
  }
}

@keyframes hideLogo {
  to {
    opacity: 0;
  }
}

@media screen and (max-width: 600px) {
  /* Estilos para pantallas con ancho máximo de 600px */
  .text{
    font-size: 100px;
    border-right: 5px solid ${colors.alternativeLight};
  }
}

@media screen and (min-width: 601px) and (max-width: 1200px) {
  /* Estilos para pantallas con ancho mínimo de 601px y máximo de 1200px */
  .text{
    font-size: 150px;
    border-right: 7.5px solid ${colors.alternativeLight};
  }
}

@media screen and (min-width: 1201px) {
  /* Estilos para pantallas con ancho mínimo de 1201px */
  .text{
    font-size: 200px;
    border-right: 10px solid ${colors.alternativeLight};
  }
}
`