import styled from "styled-components";
import { colors } from "../utils/config";

export const AboutBox = styled.div`
min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
    color:${colors.alternative};
    position: relative;  
    
    //titulo Principal
    
    
    // Parrafo de texto descriptivo
    .description{
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        text-align: justify;
        gap: 25px;
        box-sizing: border-box;
    }

    // Foto
    .container-image{ 
        display: flex;
        width: 40%;  
        aspect-ratio: 4/4;
        transition: .25s opacity ease-in-out;
        background-image: radial-gradient( circle at 20% 30%, ${colors.primary}, ${colors.dark});
        border-radius: 10px;
        position: relative;
        box-sizing: border-box;
    } 
  
    .image-profile{   
        //transition: .25s opacity ease-in-out; 
        border-radius: 10px;
        

    }
    .container-image-profile{
         width: 100%;
         height: 100%;
         transition: .25s opacity ease-in-out;
        filter: saturate(0%); 
        opacity: .4;
    }
    .container-image-profile:hover { 
        filter: none;

        opacity: 1;  
    }
    
    

    //Skills
    .skills-area{
        
        width: 100%;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
        align-items: start;
    }

    .flex-wrap{
        gap:10px;
        margin:  20px 0 0 0;
    }

    .skills{
        width:100%;
        margin:0;
        padding: 0 7.5px;
        
    }
    .skill-title{
        color:${colors.primary};
    }
    .icon{
        color:${colors.light};
        padding-left: 10px 
    }
    .soft li, .hard li{
        display: flex;
        justify-content: center;
        align-items: center; 

    }
    // Letras resaltadas
    
@media screen and (max-width: 600px) {
    //padding-bottom: 100px;
  /* Estilos para pantallas con ancho máximo de 600px */
    body{
    //background-color:#003399
    }
    fieldset{
        width: 100%;
    }
    .description{
        width: 100%;
    }

    // Foto
    .container-image{
        width: 100%;
        aspect-ratio: 4/3;

    }
    .image-profile{
        object-position: 50% 20%;
        animation: grow 1s ease-out forwards;
    }

    @keyframes grow {
    0% {
       opacity: 0; 
    }
    100% {
       opacity: 1;
    }
  }

    //Skills
    .skills-area{
        width: 100%;
        display: flex;
        text-align: center;
        flex-wrap:wrap;
        justify-content: center;
        align-items: start;
    }
    .hard-area{
        width:100%;}
    .soft-area{
        width:100%;
    }
    .hard{
        column-count: 2;
    }

    .soft{
        column-count: 2;
    }
    
}

@media screen and (min-width: 601px) and (max-width: 1200px) {
  /* Estilos para pantallas con ancho mínimo de 601px y máximo de 1200px */
  fieldset{
        width: 100%;
    }
  .description{
        width: 100%;
    }
    .container-image{
        width: 100%;
        aspect-ratio: 4/2;

    }
    .image-profile{
        object-position: 50% 20%;

    }
    .hard{
        column-count: 3;
    }

    .soft{
        column-count: 3;
    }
    
    .hard-area{
        width:100%;}
    .soft-area{
        width:100%;
    }
    
}

@media screen and (min-width: 1201px) {
  /* Estilos para pantallas con ancho mínimo de 1201px */
  fieldset{
        width: 80%;
    }
    .hard{
        column-count: 3;
    }

    .soft{
        column-count: 2;
    }
    .hard-area{
        width:60%;
    }
    .soft-area{
        width:40%;
    }
    
}
`