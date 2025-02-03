import styled from "styled-components";



export const TextShadowBox = styled.div`
@import url(https://fonts.googleapis.com/css?family=Lobster);
:root {
  --x: -6px;
  --y: -6px;
}

 
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f2f3f; 
  margin: 0;
  font-size: x-large;
  position: relative;
  width: 100%;
  height: 100%;
  font-family: "Caveat";
 

#text {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
  position: absolute;
  color: #e2f5eb;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

#shadow {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  color: transparent;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  text-shadow: calc(var(--x) * -1) calc(var(--y) * -1) 0px #b4d6ad;
  filter: blur(1px);
  transition: text-shadow 0.2s ease-out;
}

#shadow::before {
  content: attr(title);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: -1;
  text-shadow: calc(var(--x) * -2) calc(var(--y) * -2) 0px #5c8b5c;
  filter: blur(2px);
  transition: text-shadow 0.4s ease-out;
}

#shadow::after {
  content: attr(title);
  color: transparent;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  text-shadow: calc(var(--x) * -3) calc(var(--y) * -3) 0px #3d5c3d;
  filter: blur(3px);
  transition: text-shadow 0.6s ease-out;
}




@media screen and (max-width: 600px) {
  /* Estilos para pantallas con ancho máximo de 600px */
  #shadow {
    filter: blur(0.5px);
  }

  #shadow::before {
    filter: blur(1px);
  }

  #shadow::after {
    filter: blur(1.5px);
  }
}
`