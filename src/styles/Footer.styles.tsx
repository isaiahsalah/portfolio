import styled from "styled-components";

export const FooterBox = styled.footer`
margin: 0;
padding: 20px 0px;
text-align:center;

@media screen and (max-width: 600px) {
  /* Estilos para pantallas con ancho máximo de 600px */
  body{
    //background-color:#003399
  } 
}

@media screen and (min-width: 601px) and (max-width: 1200px) {
  /* Estilos para pantallas con ancho mínimo de 601px y máximo de 1200px */
  body{
  }
}

@media screen and (min-width: 1201px) {
  /* Estilos para pantallas con ancho mínimo de 1201px */
  body{
  }
}
`