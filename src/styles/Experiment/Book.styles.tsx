import styled from "styled-components";

const ColorsApp = {
  green: "#24310E",
  yellow: "#E9E1D1",
  brown: "#AF8654",
  red: "#E0A289",
  gray: "#41392E",
  blue: "#042B27",
  black: "#1A1A1A",
  white: "#F5F5F5",
};

const width = 320;
const height = 410;
const shadow = width / 25;

const shadowColor = "#13131263"
export const BookStyle = styled.div`
position: relative;
padding: 0;
//animation: moveUpDown 10s  infinite;
//animation: moveLeftRight 12s  infinite;
width: 100%;
height: 100%;
overflow: hidden; 
 background: 
   linear-gradient(180deg, 
      #171725 , 
      #19171f ) ;

 

      .title {
    line-height: normal;
    text-shadow: 
    -0.5px 0.5px 0px ${ColorsApp.gray},
    -1px 1px 0px ${ColorsApp.gray},
    -1.5px 1.5px 0px ${ColorsApp.gray},
    -2px 2px 0px ${ColorsApp.gray},
    -2.5px 2.5px 0px ${ColorsApp.gray},
    -3px 3px 0px ${ColorsApp.gray},
    -3.5px 3.5px 0px ${ColorsApp.gray},
    -4px 4px 0px ${ColorsApp.gray},
    -4.5px 4.5px 0px ${ColorsApp.gray},
    -5px 5px 0px ${ColorsApp.gray},
    -5.5px 5.5px 0px ${ColorsApp.gray},
    -6px 6px 0px ${ColorsApp.gray};
    font-family: "Bebas Neue", sans-serif;
    transform: translate(0px, -0px);

    color: ${ColorsApp.red};
    transition: transform 0.2s, text-shadow 0.1s ease-in-out;


  display: inline-block;
}

.title:hover {
  transform: translate(2px, -2px);

  text-shadow: 
    -0.5px 0.5px 0px ${ColorsApp.gray},
    -1px 1px 0px ${ColorsApp.gray},
    -1.5px 1.5px 0px ${ColorsApp.gray},
    -2px 2px 0px ${ColorsApp.gray},
    -2.5px 2.5px 0px ${ColorsApp.gray},
    -3px 3px 0px ${ColorsApp.gray},
    -3.5px 3.5px 0px ${ColorsApp.gray},
    -4px 4px 0px ${ColorsApp.gray},
    -4.5px 4.5px 0px ${ColorsApp.gray},
    -5px 5px 0px ${ColorsApp.gray},
    -5.5px 5.5px 0px ${ColorsApp.gray},
    -6px 6px 0px ${ColorsApp.gray},
    -6.5px 6.5px 0px ${ColorsApp.gray},
    -7px 7px 0px ${ColorsApp.gray},
    -7.5px 7.5px 0px ${ColorsApp.gray};
}
.title-container{
  display: flex;
}

p, .p1, .p2, .p3{
    color: ${ColorsApp.gray};
  }

 

  
.background-container .shadow {
  width: ${width}px;
  height: ${height}px;
  position: absolute;
  top: 0;
  left: 0;
  background: ${shadowColor};
  transform: translateZ(-${(width / 15) + shadow}px);
  //bottom: -10px;
  //box-shadow: -${width / 35}px ${width / 35}px 0px 0px #131312;
  z-index: 1;
}

.background-book{
   position: absolute;
  //top: 50%;
  //left: 50%;
  width: 250vw;
  height: 250vw; 

top:50%;
left: 50%; 
 
  
    z-index: -10; /* Asegúrate de que la sombra esté detrás */
    //transform-origin: 100% 100%;
    transform: translateZ(-${(width / 15) + shadow}px) translate(-50%, -50%);
    border-radius: 50%; /* Hace que el div sea circular */
    box-shadow: 10px 10px 30px 30px rgba(26, 22, 20, 0.733);

   pointer-events: none; /* Elimina cualquier interacción con el fondo */
  //border-radius: 50%;
   background: 
  radial-gradient(ellipse at center, #443f3f5e 0%,    #22130e 100%),
  linear-gradient(180deg, 
      #cfbeaa78 , 
      #1d1710eb ),     
  linear-gradient(-30deg,  
    rgba(0, 0, 0, 0.014) 25%, 
      #f5eadf45 25%,
      #fff7ee3e 27%,
      rgba(0, 0, 0, 0.014) 27%, 
      rgba(0, 0, 0, 0.014) 32%, 
      #f5eadf36 32%,
      #fff7ee55 37%,
      rgba(0, 0, 0, 0.014) 37%,
      rgba(0, 0, 0, 0.014) 45%, 
      #f5eadf29 45%,
      #fff7ee52 47%,
      rgba(0, 0, 0, 0.014) 47%,
      rgba(0, 0, 0, 0.014) 59%, 
      #f5eadf49 59%,
      #fff7ee34 65%,
      rgba(0, 0, 0, 0.014) 65%,
      rgba(0, 0, 0, 0.014) 75%, 
      #f5eadf1d 75%,
      #fff7ee32 77%,
      rgba(0, 0, 0, 0.014) 77%), 
      radial-gradient(ellipse at center, #574037 0%,    #000000 100%)
 ;
}
      
 
.container-book {
  // margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center; 
    position: fixed;  
    user-select: none;
    padding: 0px;
    margin: 0px;
    height: ${height}px;
    width: auto;
    

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    transition: transform 2s ease;
    perspective: 800px;
}
.subtitle-book{
    font-family: "Caveat", cursive;
    text-align: center; 
  }

.container-book .open{  
  //background-color:red;
  transform: translate(-50%, -50%) scale(3);
}



@keyframes moveUpDown {
  0% {
    transform: translateY(0); /* Posición inicial */ 
  }
  50% {
    transform: translateY(-5px); /* Mueve hacia arriba */
  }
  100% {
    transform: translateY(0); /* Regresa a la posición inicial */
  }
}

@keyframes moveLeftRight {
  0% {
    transform: translateX(0); /* Posición inicial */
  }
  50% {
    transform: translateX(-5px); /* Mueve hacia arriba */
  }
  100% {
    transform: translateX(0); /* Regresa a la posición inicial */
  }
}



.book, .background-container {
  transform-style: preserve-3d;
  transition: transform 1s, all 1s ;
  position: absolute;
  margin: 0;
  bottom: ${width / 20}px;
  width: ${width}px;
  height: ${height}px; 
}
.book{
  //animation: moveUpDown 4s  infinite;
  //animation: moveLeftRight 6s  infinite;
  transform: rotateX(45deg) rotateY(0deg) rotateZ(-45deg) translate(0,0)   scale(.3);

}
.background-container{
  z-index: -10000;
  transform: rotateX(45deg) rotateY(0deg) rotateZ(-45deg) translate(0,0)  scale(.3);

}



.book .side {
  width: ${width / 15}px;
  height: ${height}px;
  background: #8a7960;
  //border: 1px solid #8a7960;

  //box-sizing: border-box;
  position: absolute;
  left: ${width / -15}px;
  top: 0;
  transform-origin: 100% 100%;
  transform: rotateY(-90deg) rotateX(0deg);
}

.book .side::after {
    content: '';
    position: absolute;
    width: ${width / 15}px;
    height: ${height}px;
    background: #8a796067;
    top: 0;

    left: ${(width / -15)}px;
    z-index: -10; /* Asegúrate de que la sombra esté detrás */
    //transform-origin: 100% 100%;
    transform: translateX(-${shadow}px) ;

  }



.book .bottom {
  width: ${width}px;
  height: ${width / 15}px;
  background: #c5c5c5;
  position: absolute;
  bottom: 0;
  left: 0;
  transform-origin: 100% 100%;
  transform: rotateX(90deg);
  border: 1px solid #c5bfba90;
  //box-sizing: border-box;


}

.book .bottom::after {
    content: '';
    position: absolute;
  z-index: -10;  

  width: ${width}px;
  height: ${(width / 15)}px;
  background: #e2e2e267; 
  top: ${(width / -15)}px;

  left: 0;
  //-webkit-transform: translateZ(60px);
  transform: translateY(-${shadow}px) ;
  border: 1px solid #c5bfba90;
  box-sizing: border-box;
  }

.book.open, .background-container.open {
  transform: rotateX(15deg) rotateY(0deg) rotateZ(-15deg) translate(${width / 4}px,${height / 40}px) scale(0.65);
 
}
.shadow-paper{
    background: ${shadowColor};
    transform: translateZ(-${(width / 15) + (shadow)}px);
    height: ${height}px; 
    position: absolute;
    top: -${width / 90}px;
    right: ${(width)}px;
}
  .background-container.open .shadow-paper{
    transform-origin: right center;
    animation: grow .5s ease-out forwards; /* El div crecerá durante 1 segundo */
  }
  .background-container .shadow-paper{
    transform-origin: right center;
    animation: shrink .5s ease-out forwards; /* El div crecerá durante 1 segundo */
   }

  @keyframes grow {
    0% {
      width: 0;
      opacity: 0; 
    }
    100% {
      width: ${(width) + (shadow)}px;
      opacity: 1;
    }
  }

  @keyframes shrink {
    0% {
      width: ${(width) + (shadow)}px; /* Ancho final antes de desaparecer */
      opacity: 1; /* Totalmente visible al inicio */
    }
    100% {
      width: 0; /* El div se encoge a 0 */
      opacity: 0; /* Desaparece completamente */
    }
  }


.book .paper  {
  width: ${width}px;
  height: ${height}px;
  position: absolute;
  top: 0;
  left: 0;
}



.book .paper {
  transition: transform 1s, box-shadow 0.5s 0.2s;
  transform-origin: 0 50%;
  transform-style: preserve-3d;
}

.book .paper.open {
  //box-shadow: ${width / 35}px ${width / 35}px 0px 0px #1313127f;
  transform: rotateX(0deg) rotateY(-180deg) rotateZ(0deg);

  
}

.book .paper .page.front {
  transition: transform 1s;
  transform-origin: 0 50%;
  backface-visibility: hidden;
  z-index: 2;
}

.book .page {
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transform: translateZ(0px);
  transform: translateZ(0px);
}
.book .front-paper .page {

  background: #ce9f74;
  border: 1px solid #b88e66;
  //box-sizing: border-box;

}
.book .front-paper .page.front:after {
  position: absolute;
  content: "";
  width: 50%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(160, 115, 115, 0.1);
}
.book .paper .back {
  transition: transform 1s;
  transform-origin: 0 50%;
  background: #e1e1e1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .back-text{
    transform: scaleX(-1) ;
    margin: 15%;
    p{  
      font-family: "Caveat", cursive;
    }

  }
  
}
.book .front-paper.paper .back {
  background: #ce9f74;
  background-image: 
  linear-gradient(to right, #c99b71 0%,#ce9f74 5%, #ce9f74 40%, #ce9f74 100%);
  box-shadow: inset 0 0 20px #bd926a;

}
.book .intro {
  position: absolute;
  padding-top:50%;
  width: 90%;
  width: calc(100% - 3em);
  height: 90%;
  height: calc(100% - 3em);
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.book .intro .title-book {
    text-align: center;
  color: #552222;
  font-family: "Permanent Marker", cursive;
  padding: 0;
  margin: 0;
  font-weight: bold;
  line-height:90%;
 

}
.book .intro .subtitle-book {
    text-align: center;
  color: #552222;
  font-family: "Caveat", cursive;
  font-weight: bold;
}
.book .paper:not(.front-paper) .page {
  background: ${ColorsApp.white};
  background-image: 
  /*linear-gradient(
      90deg,
      transparent 40px,
      #abced4 40px,
      #abced4 42px,
      transparent 42px
    ),*/
    linear-gradient(#e1e1e1 0.1em, transparent 0.1em),
    linear-gradient(to right, #e2e1e0 0%,#eeeeec 5%, ${ColorsApp.white} 40%, #eeedec 100%)
    ;
  background-size: 100% 1.5em;
  box-shadow: inset 0 0 20px #e2e1e0;
  border: 1px solid #c5bfba90;
  //box-sizing: border-box;

}
.book .paper:not(.front-paper) .back {
    
    background-image:
    linear-gradient(#e1e1e1 0.1em, transparent 0.1em),

    linear-gradient(to right, #e2e1e0 0%,#eeeeec 5%, ${ColorsApp.white} 40%, #eeedec 100%);
}


.vara-top{
    display: flex;
}
.vara-img{
    width: 20%;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    
    margin: 10px;
    box-shadow: -2px 2px 0px 0px #ccc3a9;

}




/*
.book .open.presentation-paper .back {
  transform: translateZ(-1px);
}
.book .open.third .back {
  transform: translateZ(-2px);
}
.book .paper.front-paper {
  z-index: 8;
}
.book .paper.presentation-paper {
  z-index: 7;
}
.book .paper.third {
  z-index: 6;
}
.book .paper.fourth {
  z-index: 5;
}
.book .paper.front-paper .front {
  transform: translateZ(0.4px);
}
.book .paper.presentation-paper .front {
  transform: translateZ(0.3px);
}
.book .paper.third .front {
  transform: translateZ(0.2px);
}
.book .paper.fourth .front {
  transform: translateZ(0.1px);
}

.book .paper.final-paper {
  z-index: 5;
}
.book .paper.final-paper .front {
  transform: translateZ(0.1px);
}

*/










.vara-container{
    width: 90%;
  height: 90%;
  padding: 5%;
  overflow: hidden;
  font-family: "Caveat", cursive;
}
.vara-img-back-cont{
    margin: 40px;
    background-color:  #ffffff;

    position: absolute;
    padding-block: 30px;
    padding-inline: 10px;

    box-shadow: -2px 2px 0px 0px #ccc3a9;

}
.vara-img-back{
    width: 100%;
    object-fit: cover;
    opacity: 0.8;
    display: flex;
    filter: contrast(1.2);
    
}
/*
.vara-img-back{
    width: 60%;
    object-fit: cover;
    aspect-ratio: 1 / 1;
    
    margin: 25px;
    box-shadow: 2px 2px 0px 0px #ccc3a9;
    position: absolute;
}
*/

.book .presentation-paper #presentation-container{

}
@media screen and (max-width: 600px) {
//padding-top:200px;



.container-book{
    
    width:${width - 80}px;
    height: ${height - 100}px;
    //background-color: red;
}
.background-book{ 
  width: 300vh;
  height: 300vh; 
}

  .book {
    width:${width - 80}px;
    height: ${height - 100}px;
 
}


  .background-container.open .shadow {
    width:${width - 80}px;
    height: ${height - 100}px;
}

.shadow-paper{
    transform: translateZ(-${((width - 80) / 15) + ((width - 80) / 45)}px);
    height: ${height - 100}px; 
    top: -${(width - 80) / 90}px;
    right: ${(width - 80)}px;
}

@keyframes grow {
    0% {
      width: 0;
      opacity: 0; 
    }
    100% {
      width: ${(width - 80) + ((width - 80) / 45)}px;
      opacity: 1;
    }
  }

  @keyframes shrink {
    0% {
      width: ${(width - 80) + ((width - 80) / 45)}px; /* Ancho final antes de desaparecer */
      opacity: 1; /* Totalmente visible al inicio */
    }
    100% {
      width: 0; /* El div se encoge a 0 */
      opacity: 0; /* Desaparece completamente */
    }
  }

.book .side {
  width: ${width / 15}px;
    height: ${height - 100}px;
}
.book .side::after {
    content: '';
    height: ${height - 100}px;
    width: ${(width - 80) / 20}px;
    left: ${((width - 80) / -20)}px;
  }

.book .bottom {
  width:${width - 80}px;
  height: ${width / 15}px;
}

.book .bottom::after {
    content: '';
    width: ${width - 80}px;
   height: ${((width - 80) / 20)}px;
   top: ${((width - 80) / -20)}px;
   }

  .book .paper {
    width:${width - 80}px;
    height: ${height - 100}px;
}
.book.open, .background-container.open {
  //transform: rotateX(35deg) rotateY(0deg) rotateZ(-35deg);
  transform: rotateX(10deg) rotateY(10deg) rotateZ(-10deg) translate(0px,0px) scale(0.85);
 

} 



}

@media screen and (min-width: 601px) and (max-width: 1200px) {


  .book {
    width:${width}px;
    height: ${height}px;  

  }
  .background-book{ 
  width: 300vh;
  height: 300vh; 
}


   .background-container  .shadow {
    width:${width}px;
    height: ${height}px;
  }

  .book .side {
    width: ${width / 15}px;
    height: ${height}px;
    z-index: 1;
  }

  .book .side::after {
    content: '';
    width: ${width / 20}px;
    left: ${(width / -20)}px;
  }

  .book.bottom {
  width:${width} px;
  height: ${width / 15} px; 
}
.book .bottom::after {
    content: '';
   height: ${(width / 20)}px;
   top: ${(width / -20)}px;
   }

  .book.paper {
  width:${width} px;
  height: ${height} px;
}
  .book.open , .background-container.open {
  transform: rotateX(15deg) rotateY(0deg) rotateZ(-15deg) translate(${width / 15}px,${height / 15}px)  scale(0.7);
}

}

@media screen and(min-width: 1600px)  {


  .book.open, .background-container.open {
    transform: rotateX(15deg) rotateY(0deg) rotateZ(-15deg) translate(100px, 0px) scale(1);


  }

}

`