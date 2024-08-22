import { createGlobalStyle } from "styled-components";
import { colors, filtro, fontSize } from "../utils/config";

export const GlobalStyle = createGlobalStyle`
    //Se da los estilos generales de la pagina
    html{
        scroll-behavior: smooth;
    }
    .app{
        visibility:hidden; 
    }
    body{
        background-color: ${colors.dark};
        color: ${colors.alternative};
        font-family: monospace;
        padding: 0;
        margin: 0;
        overflow-x: hidden;
    }

    //Se personaliza la barra de scroll
    body::-webkit-scrollbar{
        width: 5px;
        background: transparent;
    }
    body::-webkit-scrollbar-thumb{
        background: ${colors.primary};
        border-radius: 5px;
        
    }

    //Se da estilos a clases que se van areutilizar en distintas partes
    .flex{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        padding: 10px;
    }
    .flex-wrap{
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        align-items: center; 
        text-align: center;
    }
    .flex-area{
        max-width: 1000px;
        width: 100%;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .color-p{
        color: ${colors.primary};
    }
    .color-l{
        color: ${colors.light};
    }

    //Se da estilos a los títulos de las secciones
    fieldset{
        font-weight: 900;
        border-top:3px solid ${colors.primary};
        border-right:0px;
        border-left:0px;
        border-bottom:0px;
    }
    legend{
        padding: 0 10px;
    }

    //Se da estilos a diferentes etiquetas que se reutilizarán
    ul{
        list-style:none;
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration: none;
        color: ${colors.alternative};
    }
    button{
        cursor: pointer;
        background:${colors.secondary};
        color:${colors.alternative};
        font-weight: 600;
        padding: 10px 25px;
        border-radius: 5px;
        border: 1px solid ${colors.alternative};
        font-family: monospace;
        margin-top:20px;
        margin-bottom:10px ;
        transition: all 0.15s ease-in-out;
    }
    button:hover{
        background:${colors.primary};
        color:${colors.dark};
        border: 1px solid ${colors.primary};
    }
    p{
        margin:0;
        padding: 0;  
    }

    h1{
        margin:0;
        padding: 0;    
    }
    h2{
        margin:0;
        padding: 0;    
    }
    h3{
        margin:0;
        padding: 0;    
    }
    h4{
        margin:0;
        padding: 0;    
    }
    h5{
        margin:0;
        padding: 0;   
        font-weight: normal; 
    }
    h6{
        margin:0;
        padding: 0;
        font-weight: normal;
    }
    img{
        width: 100%;
    }

    .backgroud-image-app{
        position: fixed;
        top: 0;
        bottom: 0 ;
        left: 0;
        right: 0;
        z-index: -1;
        filter: saturate(50%) brightness(50%);
        opacity: 0.5;
        width: 100%;
  height: 100%;
  object-fit: cover;
    }

@media screen and (max-width: 600px) {
    /* Estilos para pantallas con ancho máximo de 600px */
     
    legend{
        text-align:center;
        font-size: ${fontSize.subTitle3};
    }
    .flex{
        padding: 20px;
    }
    //Se da estilos a diferentes etiquetas que se reutilizarán
    p{
        font-size: ${fontSize.description3};
    }
    h1{
        font-size: ${fontSize.bigTitle3};
    }
    h2{
        font-size: ${fontSize.title3};
    }
    h3{
        font-size: ${fontSize.littleTitle3};
    }
    h4{
        font-size: ${fontSize.bigSubTitle3};
    }
    h5{
        font-size: ${fontSize.subTitle3};
    }
    h6{
        font-size: ${fontSize.littleSubTitle3};
    }
    
}

@media screen and (min-width: 601px) and (max-width: 1200px) {
    /* Estilos para pantallas con ancho mínimo de 601px y máximo de 1200px */
    button{
        font-size: ${fontSize.description3};
    }
    legend{
        text-align:center;
        font-size: ${fontSize.subTitle2};
    }
    .flex{
        padding: 0 100px;
    }
    //Se da estilos a diferentes etiquetas que se reutilizarán
    p{
        font-size: ${fontSize.description2};
    }
    h1{
        font-size: ${fontSize.bigTitle2};
    }
    h2{
        font-size: ${fontSize.title2};
    }
    h3{
        font-size: ${fontSize.littleTitle2};
    }
    h4{
        font-size: ${fontSize.bigSubTitle2};
    }
    h5{
        font-size: ${fontSize.subTitle2};
    }
    h6{
        font-size: ${fontSize.littleSubTitle2};
    }
}

@media screen and (min-width: 1201px) {
    /* Estilos para pantallas con ancho mínimo de 1201px */
    button{
        font-size: ${fontSize.description2};
    }
    legend{
        text-align:left;
        font-size: ${fontSize.subTitle1};
    }
    //Se da estilos a diferentes etiquetas que se reutilizarán
    p{
        font-size: ${fontSize.description1};
    }
    h1{
        font-size: ${fontSize.bigTitle1};
    }
    h2{
        font-size: ${fontSize.title1};
    }
    h3{
        font-size: ${fontSize.littleTitle1};
    }
    h4{
        font-size: ${fontSize.bigSubTitle1};
    }
    h5{
        font-size: ${fontSize.subTitle1};
    }
    h6{
        font-size: ${fontSize.littleSubTitle1};
    }
}

    //Se da estilo a las animaciones de react-transition-group
    //Animación de salida hacia arriba y entrada de arriba
    .fade-top-1-enter,
    .fade-top-2-enter,
    .fade-top-3-enter,
    .fade-top-4-enter,
    .fade-top-5-enter,
    .fade-top-6-enter {
        transform: translateY(-100px);
        filter: blur(50px);
        opacity: 0;
    }

    .fade-top-1-exit,
    .fade-top-2-exit,
    .fade-top-3-exit,
    .fade-top-4-exit,
    .fade-top-5-exit,
    .fade-top-6-exit {
        transform: translateY(0px);
        filter: blur(0);
        opacity: 1;
    }
    .fade-top-1-enter-active,
    .fade-top-2-enter-active,
    .fade-top-3-enter-active,
    .fade-top-4-enter-active,
    .fade-top-5-enter-active,
    .fade-top-6-enter-active {
        transform: translateY(0px);
        filter: blur(0);
        opacity: 1;
    }
    .fade-top-1-exit-active,
    .fade-top-2-exit-active,
    .fade-top-3-exit-active,
    .fade-top-4-exit-active,
    .fade-top-5-exit-active,
    .fade-top-6-exit-active {
        transform: translateY(-100px);
        filter: blur(50px);
        opacity: 0;
    }

    .fade-top-1-enter-active,
    .fade-top-1-exit-active {
        transition: opacity ${filtro.time} ease-in-out, transform ${filtro.time} ease-in-out,
        filter ${filtro.time} ease-in-out;
    }
    .fade-top-2-enter-active,
    .fade-top-2-exit-active {
        transition: opacity ${filtro.time} ease-in-out 50ms,
        transform ${filtro.time} ease-in-out 50ms, filter ${filtro.time} ease-in-out 50ms;
    }
    .fade-top-3-enter-active,
    .fade-top-3-exit-active {
        transition: opacity ${filtro.time} ease-in-out 100ms,
        transform ${filtro.time} ease-in-out 100ms, filter ${filtro.time} ease-in-out 100ms;
    }
    .fade-top-4-enter-active,
    .fade-top-4-exit-active {
        transition: opacity ${filtro.time} ease-in-out 150ms,
        transform ${filtro.time} ease-in-out 150ms, filter ${filtro.time} ease-in-out 150ms;
    }
    .fade-top-5-enter-active,
    .fade-top-5-exit-active {
        transition: opacity ${filtro.time} ease-in-out 200ms,
        transform ${filtro.time} ease-in-out 200ms, filter ${filtro.time} ease-in-out 200ms;
    }
    .fade-top-6-enter-active,
    .fade-top-6-exit-active {
        transition: opacity ${filtro.time} ease-in-out 250ms,
        transform ${filtro.time} ease-in-out 250ms, filter ${filtro.time} ease-in-out 250ms;
    }

    //Animación de Salida por derecha y entrada por izquierda
    .fade-left-to-right-1-enter,
    .fade-left-to-right-2-enter,
    .fade-left-to-right-3-enter,
    .fade-left-to-right-4-enter,
    .fade-left-to-right-5-enter{
        transform: translateX(-100%);
        filter: blur(10px);
        opacity: 0;
    }
    .fade-left-to-right-1-exit,
    .fade-left-to-right-2-exit,
    .fade-left-to-right-3-exit,
    .fade-left-to-right-4-exit,
    .fade-left-to-right-5-exit{
        transform: translateX(0px);
        filter: blur(0);
        opacity: 1;
    }
    .fade-left-to-right-1-enter-active,
    .fade-left-to-right-2-enter-active,
    .fade-left-to-right-3-enter-active,
    .fade-left-to-right-4-enter-active,
    .fade-left-to-right-5-enter-active {
        transform: translateX(0px);
        filter: blur(0);
        opacity: 1;
    }
    .fade-left-to-right-1-exit-active,
    .fade-left-to-right-2-exit-active,
    .fade-left-to-right-3-exit-active,
    .fade-left-to-right-4-exit-active,
    .fade-left-to-right-5-exit-active{
        transform: translateX(100%);
        filter: blur(10px);
        opacity: 0;
    }

    .fade-left-to-right-1-enter-active,
    .fade-left-to-right-1-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out, 
        transform ${filtro.time} ease-in-out,
        filter ${filtro.time} ease-in-out;
    }
    .fade-left-to-right-2-enter-active,
    .fade-left-to-right-2-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 50ms, 
        transform ${filtro.time} ease-in-out 50ms,
        filter ${filtro.time} ease-in-out 50ms;
    }
    .fade-left-to-right-3-enter-active,
    .fade-left-to-right-3-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 100ms, 
        transform ${filtro.time} ease-in-out 100ms,
        filter ${filtro.time} ease-in-out 100ms;
    }
    .fade-left-to-right-4-enter-active,
    .fade-left-to-right-4-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 150ms, 
        transform ${filtro.time} ease-in-out 150ms,
        filter ${filtro.time} ease-in-out 150ms;
    }
    .fade-left-to-right-5-enter-active,
    .fade-left-to-right-5-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 200ms, 
        transform ${filtro.time} ease-in-out 200ms,
        filter ${filtro.time} ease-in-out 200ms;
    }

    //Animación de Salida por izquierda y entrada por derecha
    .fade-right-to-left-1-enter,
    .fade-right-to-left-2-enter,
    .fade-right-to-left-3-enter,
    .fade-right-to-left-4-enter,
    .fade-right-to-left-5-enter{
        transform: translateX(100%);
        filter: blur(10px);
        opacity: 0;
    }

    .fade-right-to-left-1-exit,
    .fade-right-to-left-2-exit,
    .fade-right-to-left-3-exit,
    .fade-right-to-left-4-exit,
    .fade-right-to-left-5-exit{
        transform: translateX(0px);
        filter: blur(0);
        opacity: 1;
    }
    .fade-right-to-left-1-enter-active,
    .fade-right-to-left-2-enter-active,
    .fade-right-to-left-3-enter-active,
    .fade-right-to-left-4-enter-active,
    .fade-right-to-left-5-enter-active {
        transform: translateX(0px);
        filter: blur(0);
        opacity: 1;
    }
    .fade-right-to-left-1-exit-active,
    .fade-right-to-left-2-exit-active,
    .fade-right-to-left-3-exit-active,
    .fade-right-to-left-4-exit-active,
    .fade-right-to-left-5-exit-active{
        transform: translateX(-100%);
        filter: blur(10px);
        opacity: 0;
    }

    .fade-right-to-left-1-enter-active,
    .fade-right-to-left-1-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out, 
        transform ${filtro.time} ease-in-out,
        filter ${filtro.time} ease-in-out;
    }
    .fade-right-to-left-2-enter-active,
    .fade-right-to-left-2-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 50ms, 
        transform ${filtro.time} ease-in-out 50ms,
        filter ${filtro.time} ease-in-out 50ms;
    }
    .fade-right-to-left-3-enter-active,
    .fade-right-to-left-3-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 100ms, 
        transform ${filtro.time} ease-in-out 100ms,
        filter ${filtro.time} ease-in-out 100ms;
    }
    .fade-right-to-left-4-enter-active,
    .fade-right-to-left-4-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 150ms, 
        transform ${filtro.time} ease-in-out 150ms,
        filter ${filtro.time} ease-in-out 150ms;
    }
    .fade-right-to-left-5-enter-active,
    .fade-right-to-left-5-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 200ms, 
        transform ${filtro.time} ease-in-out 200ms,
        filter ${filtro.time} ease-in-out 200ms;
    }

    //Animación de salida hacia abajo y entrada de abajo
    .fade-bottom-1-enter{
        filter: blur(10px);
        transform: translateY(100px);
        opacity: 0;
    }
    .fade-bottom-1-exit{
        filter: blur(0);
        transform: translateY(0px);
        opacity: 1;
    }
    .fade-bottom-1-enter-active{
        filter: blur(0);
        transform: translateY(0px);
        opacity: 1;
    }
    .fade-bottom-1-exit-active{
        filter: blur(10px);
        transform: translateY(100px);
        opacity: 0;
    }

    .fade-bottom-1-enter-active,
    .fade-bottom-1-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out, 
        transform ${filtro.time} ease-in-out 50ms,
        filter ${filtro.time} ease-in-out;
    }

    //Animación de Salida por derecha y entrada por derecha
    .fade-right-1-enter,
    .fade-right-2-enter,
    .fade-right-3-enter,
    .fade-right-4-enter,
    .fade-right-5-enter{
        transform: translateX(100%);
        filter: blur(10px);
        opacity: 0;
    }

    .fade-right-1-exit,
    .fade-right-2-exit,
    .fade-right-3-exit,
    .fade-right-4-exit,
    .fade-right-5-exit{
        transform: translateX(0px);
        filter: blur(0);
        opacity: 1;
    }
    .fade-right-1-enter-active,
    .fade-right-2-enter-active,
    .fade-right-3-enter-active,
    .fade-right-4-enter-active,
    .fade-right-5-enter-active {
        transform: translateX(0px);
        filter: blur(0);
        opacity: 1;
    }
    .fade-right-1-exit-active,
    .fade-right-2-exit-active,
    .fade-right-3-exit-active,
    .fade-right-4-exit-active,
    .fade-right-5-exit-active{
        transform: translateX(100%);
        filter: blur(10px);
        opacity: 0;
    }

    .fade-right-1-enter-active,
    .fade-right-1-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out, 
        transform ${filtro.time} ease-in-out,
        filter ${filtro.time} ease-in-out;
    }
    .fade-right-2-enter-active,
    .fade-right-2-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 50ms, 
        transform ${filtro.time} ease-in-out 50ms,
        filter ${filtro.time} ease-in-out 50ms;
    }
    .fade-right-3-enter-active,
    .fade-right-3-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 100ms, 
        transform ${filtro.time} ease-in-out 100ms,
        filter ${filtro.time} ease-in-out 100ms;
    }
    .fade-right-4-enter-active,
    .fade-right-4-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 150ms, 
        transform ${filtro.time} ease-in-out 150ms,
        filter ${filtro.time} ease-in-out 150ms;
    }
    .fade-right-5-enter-active,
    .fade-right-5-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 200ms, 
        transform ${filtro.time} ease-in-out 200ms,
        filter ${filtro.time} ease-in-out 200ms;
    }

    //Animación de Salida por izquierda y entrada por izquierda
    .fade-left-1-enter,
    .fade-left-2-enter,
    .fade-left-3-enter,
    .fade-left-4-enter,
    .fade-left-5-enter{
        transform: translateX(-100%);
        filter: blur(10px);
        opacity: 0;
    }

    .fade-left-1-exit,
    .fade-left-2-exit,
    .fade-left-3-exit,
    .fade-left-4-exit,
    .fade-left-5-exit{
        transform: translateX(0px);
        filter: blur(0);
        opacity: 1;
    }
    .fade-left-1-enter-active,
    .fade-left-2-enter-active,
    .fade-left-3-enter-active,
    .fade-left-4-enter-active,
    .fade-left-5-enter-active {
        transform: translateX(0px);
        filter: blur(0);
        opacity: 1;
    }
    .fade-left-1-exit-active,
    .fade-left-2-exit-active,
    .fade-left-3-exit-active,
    .fade-left-4-exit-active,
    .fade-left-5-exit-active{
        transform: translateX(-100%);
        filter: blur(10px);
        opacity: 0;
    }

    .fade-left-1-enter-active,
    .fade-left-1-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out, 
        transform ${filtro.time} ease-in-out,
        filter ${filtro.time} ease-in-out;
    }
    .fade-left-2-enter-active,
    .fade-left-2-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 50ms, 
        transform ${filtro.time} ease-in-out 50ms,
        filter ${filtro.time} ease-in-out 50ms;
    }
    .fade-left-3-enter-active,
    .fade-left-3-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 100ms, 
        transform ${filtro.time} ease-in-out 100ms,
        filter ${filtro.time} ease-in-out 100ms;
    }
    .fade-left-4-enter-active,
    .fade-left-4-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 150ms, 
        transform ${filtro.time} ease-in-out 150ms,
        filter ${filtro.time} ease-in-out 150ms;
    }
    .fade-left-5-enter-active,
    .fade-left-5-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 200ms, 
        transform ${filtro.time} ease-in-out 200ms,
        filter ${filtro.time} ease-in-out 200ms;
    }

    //Animación de opacidad
    .fade-1-enter,
    .fade-2-enter,
    .fade-3-enter,
    .fade-4-enter{
        filter: blur(10px);
        opacity: 0;
    }
    .fade-1-exit,
    .fade-2-exit,
    .fade-3-exit,
    .fade-4-exit{
        filter: blur(0);
        opacity: 1;
    }
    .fade-1-enter-active,
    .fade-2-enter-active,
    .fade-3-enter-active,
    .fade-4-enter-active{
        filter: blur(0);
        opacity: 1;
    }
    .fade-1-exit-active,
    .fade-2-exit-active,
    .fade-3-exit-active,
    .fade-4-exit-active{
        filter: blur(10px);
        opacity: 0;
    }
    .fade-1-enter-active,
    .fade-1-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out, 
        filter ${filtro.time} ease-in-out;
    }
    .fade-2-enter-active,
    .fade-2-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 50ms, 
        filter ${filtro.time} ease-in-out 50ms;
    }
    .fade-3-enter-active,
    .fade-3-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 100ms, 
        filter ${filtro.time} ease-in-out 100ms;
    }
    .fade-4-enter-active,
    .fade-4-exit-active {
        transition: 
        opacity ${filtro.time} ease-in-out 150ms, 
        filter ${filtro.time} ease-in-out 150ms;
    }
`;
