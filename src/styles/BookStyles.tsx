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

const width = 380;
const height = 480;

export const BookStyle = styled.div`
position: relative;
padding: 0;
//padding-top:350px;
animation: moveUpDown 10s  infinite;
animation: moveLeftRight 12s  infinite;
p{
    line-height:1;
}
.container-book {
  // margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center; 
    position: fixed;  

    padding: 0px;
    margin: 0px;
    height: ${height}px;
    width: auto;
    

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    width: 100px;
    height: 100px;
    background-color: blue;
    transition: transform 2s ease;
}

.container-book .open{  
  background-color:red;
  transform: translate(-50%, -50%) scale(3);
}


.book {
  transform-style: preserve-3d;
  transform: rotateX(45deg) rotateY(0deg) rotateZ(-45deg) translate(0,0)  scale(.32);
  transition: transform 1s, all 1s ;
  position: absolute;
  margin: 0;
  width: ${width}px;
  height: ${height}px; 
}


.book .side {
  width: ${width / 15}px;
  height: ${height}px;
  background: #8a7960;
  position: absolute;
  left: ${width / -15}px;
  top: 0;
  transform-origin: 100% 100%;
  transform: rotateY(-90deg) rotateX(0deg);



}
.book .bottom {
  width: ${width}px;
  height: ${width / 15}px;
  background: #e2e2e2;
  position: absolute;
  bottom: 0;
  left: 0;
  transform-origin: 100% 100%;
  transform: rotateX(90deg);
  border: 1px solid #c5bfba90;

}
.book.open {
  transform: rotateX(15deg) rotateY(0deg) rotateZ(-15deg) translate(150px,30px) scale(1);
}

.book .paper,
.book .shadow {
  width: ${width}px;
  height: ${height}px;
  position: absolute;
  top: 0;
  left: 0;
}

.book .shadow {
  background: transparent;
  transform: translateZ(-${width / 15}px);
  box-shadow: -1em 1em 0px 0px #131312;
  z-index: 1;
}

.book .paper {
  transition: transform 1s, box-shadow 0.5s 0.2s;
  transform-origin: 0 50%;
  transform-style: preserve-3d;
}

.book .paper.open {
  box-shadow: 1.2em 1em 0px 0px #131312;
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

  }
  p{
    font-family: "Caveat", cursive;
   
    text-align: center;

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

.book .intro h3 {
    text-align: center;
  color: #552222;
  font-family: "Permanent Marker", cursive;
  padding: 0;
  margin: 0;
  font-weight: bold;
  line-height:90%;
 

}
.book .intro p {
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

  .book {
    width:${width - 80}px;
    height: ${height - 100}px;

scale: 0.5;
}


  .book .shadow {
    width:${width - 80}px;
    height: ${height - 100}px;
}

.book .side {
    width: 3em;
    height: ${height - 100}px;
}

.book .bottom {
  width:${width - 80}px;
  height: 3em;
}

  .book .paper {
    width:${width - 80}px;
    height: ${height - 100}px;
}
.book.open {
  //transform: rotateX(35deg) rotateY(0deg) rotateZ(-35deg);
  transform: rotateX(10deg) rotateY(10deg) rotateZ(-10deg) translate(0px,0px);
  scale: 1;

} 

    h3{ font-size: 60px; }


}

@media screen and (min-width: 601px) and (max-width: 1200px) {

    h3{ font-size: 70px; }

    .book {
      width:${width}px;
      height: ${height}px;
    scale: 0.7;

  }


    .book .shadow {
      width:${width}px;
      height: ${height}px;
  }

  .book .side {
    width: 3em;
    height: ${height}px;
  }

  .book .bottom {
    width:${width}px;
    height: 3em;
  }

    .book .paper {
      width:${width}px;
      height: ${height}px;
  }
  .book.open {
    transform: rotateX(15deg) rotateY(0deg) rotateZ(-15deg) translate(100px,0px);
    scale: 1;

  }

}

@media screen and (min-width: 1600px)  {


  .book.open {
  transform: rotateX(15deg) rotateY(0deg) rotateZ(-15deg) translate(100px,0px);
  scale: 1.3;

  }

  }

`