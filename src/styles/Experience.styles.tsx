import styled from "styled-components";
import { colors, fontSize } from "../utils/config";

export const ExperienceBox = styled.div`
min-height: 100vh;
gap: 20px;

    fieldset{
        width: 70%;
    }
    legend{
        text-align:center;
    }
    .description{
        width: 70%;
        text-align: center;
        font-size: ${fontSize.title3};
        color:${colors.alternative};
        font-weight: bold;
        margin: 0;
        padding: 0;
    }
    .position-job{
        text-align: center;
        
    }
    button{
        margin: 0;
        padding: 10px 10px;
        width: 100%;
        cursor: pointer;
        background: transparent;
        color:${colors.light};
        font-size: ${fontSize.description2};
        font-weight: 100;
        padding: 8px 20px;
        border: 0;
        border-radius: 0px;
        font-family: monospace;
        display: flex;
        justify-content: left;
        align-items: center; 
        opacity: 0.25;
    }
    button:hover{ 
        opacity: 1;
        margin: 0;
        background:${colors.primary};
        color:${colors.dark};
        font-weight: 900;
        border: none;
    }
 
    .job-container{
        width: 70%;
        display: flex;
        flex-direction: column;
        margin: 25px  0px;
        align-items: center;
        text-align: left;
        gap: 10px; 
      
 
    } 
    .job-nav{ 
        justify-content:space-between;
        margin: 0px; 
        text-align: left;
        gap: 10px;  
        display: flex; 
        height: auto; 
        position: relative; 
    } 

    .job-ul{
        width: 22%; 
        border-left: 1px solid ${colors.primary};
        
        margin: 0; 
        display: flex;
        flex-direction: column;
        flex-grow: 1; 
        //height: 100%; 
 
        
    }

        //Se personaliza la barra de scroll
    .job-ul::-webkit-scrollbar{
        height: 2px;
        background: transparent;
    }
    .job-ul::-webkit-scrollbar-thumb{
        background: ${colors.primary};
        border-radius: 5px;
        
    }


    .job-li{
        width: 100%;
      
        margin: 0;
        padding: 0;
        flex: 1; 
    }

    .job-selected{
opacity: 1;
    }

    .job-button{
        display: flex;
        height:100%;

    }

    .job{
        width: 78%;
        display: flex;
        flex-wrap: wrap; 
        
    }

    .title{
        width: 100%;
        display: flex;
        align-items: center;
        font-weight: 600;
        gap: 20px;
        
    }
    .range{
        padding-bottom:20px;
        margin: 0;
        color:${colors.primary};
        font-weight: 900;
        text-align: center;
    }
    .job ul{
        
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        gap: 8px;
        margin: 0;
        padding: 0;
    }
    .job ul li{
        width: 100%;
        display: flex;
        align-items: center;
        gap: 15px; 
    }
    .icon{
        color: ${colors.primary};
        min-height: 20px;
        min-width: 20px;
    }
@media screen and (max-width: 600px) {
  /* Estilos para pantallas con ancho máximo de 600px */
  fieldset{
        width: 100%;
    }
    .description{
        width: 100%;
        font-size: ${fontSize.subTitle1};

    }
    .job-nav{
        width: 100%;
        flex-direction: column;
        margin: 0 ;

    }
    .button-div{
        width: 100%;
        border: 0;
        border-bottom: 1px solid ${colors.primary};
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        overflow-x: auto;
        white-space: nowrap;
    }
    button{
        font-size: ${fontSize.description3};
    }
    .job{
        width: 100%;
        margin: 0;
        padding: 0;
        margin-top: 25px;
    }
    .title{
        width: 100%;
        display: flex;
        font-weight: 600;
        justify-content: center;
        align-items: center;

    }
    .range{
        padding-bottom:20px;
        margin: 0;
        width: 100%;
        color:${colors.primary};

        font-weight: 100;
        text-align: center;
    }
    .job-ul{ 

        width: 100%;
        border: 0;
        border-bottom: 1px solid ${colors.primary};
        display: flex;
        flex-direction: initial;
        flex-wrap: nowrap;
         
        overflow-x: auto;
        white-space: nowrap; 
        justify-content: start;
        align-items: flex-start; 
    }
    
    .job-li{
        flex-grow: 1;
        flex-basis: 0;
    }
}

@media screen and (min-width: 601px) and (max-width: 1200px) {
  /* Estilos para pantallas con ancho mínimo de 601px y máximo de 1200px */
  fieldset{
        width: 100%;
    }
    .description{
        width: 100%;
        font-size: ${fontSize.subTitle1};

    }
    .job-nav{
        width: 100%;
        flex-direction: column;
        
        margin: 25px  0px;

    }
    .job-ul{
        width: 100%;
        border: 0;
        border-bottom: 1px solid ${colors.primary};
        display: flex;
        flex-direction: initial;
        flex-wrap: nowrap;
        overflow-x: auto;
        white-space: nowrap;
        justify-content: start;
        align-items: center;  

    }
    .job-li{
        width: auto;
    }
    button{
        font-size: ${fontSize.description3};
    }
    .job{
        width: 100%;
        margin: 0;
        padding: 0;
    }
    .title{
        width: 100%;
        display: flex;
        font-weight: bold;
        justify-content: center;
        
    }
    .range{
        padding-bottom:20px;
        margin: 0;
        width: 100%;
        color:${colors.primary};
        font-weight: bold;
        text-align: center;
    }
}

@media screen and (min-width: 1201px) {
  /* Estilos para pantallas con ancho mínimo de 1201px */
  body{
  }
}

` 