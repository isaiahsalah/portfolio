import styled from "styled-components";
import { colors, fontSize } from "../utils/config";

export const BannerBox = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .banner-div{
        display: flex;
        max-width:1000px;
        text-align: left;
        
    }
    .banner-line{
        padding-right: 20px;
        border-left: 2px solid ${colors.primary};
    }
    h1{
        font-weight: bold;
    }
    
    


   

@media screen and (max-width: 600px) {
  /* Estilos para pantallas con ancho máximo de 600px */
  .name{
        font-size:${fontSize.title3};
    }
    .subtitle{
        font-size:${fontSize.subTitle2};
    }
    .title{
        font-size:${fontSize.description3};
    }
    p{
        width: 100%;
    }
  
}

@media screen and (min-width: 601px) and (max-width: 1200px) {
  /* Estilos para pantallas con ancho mínimo de 601px y máximo de 1200px */
  .name{
        font-size:${fontSize.title2};
    }
    .subtitle{
        font-size:${fontSize.subTitle1};
    }
    .title{
        font-size:${fontSize.description2};
    }
    p{
        width: 100%;
    }
}

@media screen and (min-width: 1201px) {
  /* Estilos para pantallas con ancho mínimo de 1201px */
  p{
        width: 60%;
    }
}
`