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

const width = 400;
const height = 600;


export const CassetteBox = styled.div`
//background-color: white;
display: flex;
justify-content:center;
align-items: center;
margin: 0;
padding: 0;
animation: moveUpDown 4s  infinite;
animation: moveLeftRight 6s  infinite;   


.cassette-container{
  cursor: pointer;
  transform-style: preserve-3d;
  //perspective: 1000px; 
  transform: rotateX(45deg) rotateY(0deg) rotateZ(-45deg) scale(.32);
  //transform: rotateX(100deg) rotateY(0deg) rotateZ(0deg) scale(1);

  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;
  margin: 0;
  padding: 0;
  transition: all .5s;
  height: ${height}px;
  width: ${width}px;

}


.open{
  transform: rotateX(8deg) rotateY(12deg) rotateZ(-5deg) scale(1);
  height: ${height}px;
  cursor: auto;

  .bottom-cassette{
    //transform: rotateX(90deg) translateZ(28px);
  }
}


.bottom-cassette{
  transition: all .5s;
  position: absolute;
  width:  ${width}px ;
  overflow: hidden;
  height: ${height / 15}px ;
  padding: 0;
  transform: rotateX(90deg) translateZ(0px);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  bottom: 0;
  transform-origin: bottom;
  background-color: ${ColorsApp.gray};
    background-image: 
    linear-gradient(120deg, rgba(0,0,0, 0.5), rgba(0,0,0, 0.05)), 
    repeating-linear-gradient(
        to bottom, 
        #252525 0 3px, 
        transparent 3px 7px
    );

    box-shadow: inset 0px 0px 2px 1px #ffffff7b,
    inset 0px 0px 5px 1px #a5a5a5,
    0px 0px 3px 0px ${ColorsApp.black};
}
.left-cassette{
  position: absolute;
  display: flex;

  width:${height / 15}px ;
  height:  ${height}px ;

  padding: 0;
  //transform:  rotateZ(135deg) rotateY(202.5deg) rotateX(67.5deg) translateX(-80px) ;
  transform: rotateY(-90deg)  translateX(${height / -15}px);
  left: 0;
  transform-origin: left;
  border-bottom-right-radius: 10px;
  border-start-end-radius: 10px;

  background-color: ${ColorsApp.gray};
    background-image: 
    linear-gradient(120deg, rgba(0,0,0, 0.5), rgba(0,0,0, 0.05)), 
    repeating-linear-gradient(
        to bottom, 
        #252525 0 3px, 
        transparent 3px 7px
    );

    box-shadow: inset 0px 0px 2px 1px #ffffff7b,
    inset 0px 0px 5px 1px #a5a5a5,
    0px 0px 3px 0px ${ColorsApp.black};

}

.cassette {

    position: relative;
    width:  ${width - 2 * (width / 15)}px ;
    height:  ${height - 2 * (width / 15)}px ;
    margin: 0;
    padding: ${width / 15}px;  
    background-color: ${ColorsApp.gray};
    border-radius: ${width / 30}px;
    display: flex;
    flex-direction: column;
    gap:  ${height / 80}px;
    background-image: 
    linear-gradient(120deg, rgba(0,0,0, 0.5), rgba(0,0,0, 0.05)), 
    repeating-linear-gradient(
        to bottom, 
        #252525 0 3px, 
        transparent 3px 7px
    ),
    linear-gradient(315deg, rgba(39, 39, 39, 0.25) 25%, transparent 25%),

    radial-gradient(circle at 25% ${height / 7}px, #111111 ${width / 15}px, transparent ${(width / 15) + 3}px),
    radial-gradient(circle at 50%  ${height / 8}px, #111111 ${width / 8}px, transparent ${(width / 8) + 3}px),
    radial-gradient(circle at 75%  ${height / 7}px, #111111 ${width / 15}px, transparent ${(width / 15) + 3}px),

    linear-gradient( 
        150deg,
        transparent 14%,
        rgba(255, 255, 255, 0.1) 15% 25%, 
        transparent 26% 30%
        ),
    radial-gradient(circle at 60% 40%, rgb(131, 131, 131), transparent 60%);

    
    box-shadow: inset 0px 0px 2px 1px #ffffff7b,
    inset 0px 0px 10px 1px #ffffffa0,
    0px 0px 3px 0px ${ColorsApp.black};

}

.tape-cassette{
    //padding: ${width / 30}px;
    border:  ${width / 100}px solid #0a0a0a;
    border-radius: ${width / 50}px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 
    height: ${height / 3}px;
}

.top{
    height: ${height / 5}px;
    width:${width}px;
}

.label {
  background-color: #c74949;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 8px 1px rgba(0,0,0, 0.5) inset;  
  padding: ${width / 50}px;
  margin: ${width / 50}px;
  border: 2px solid ${ColorsApp.black};
  width: 85%;

}
.text-marca-container{
  width: 100%;
}
.text-marca-cassette{
    display: flex;
    justify-content: space-between;
    padding-inline:20px
}

.text-marca{
    color: ${ColorsApp.black};
    font-family: "Arial", sans-serif;
    font-weight: bold;
    font-size: ${height / 38}px;

    padding: 0px;
}

.text-container{
    
    display: flex;
    position: relative;

    justify-content: center;
    align-items: center;
    background-color: ${ColorsApp.yellow};
    width: 100%;
    height: ${height / 18}px;
    margin: 8px;
    border-radius: 5px;
}
.text-line{
    bottom: 8px;
    position: absolute;
    background-color: ${ColorsApp.gray}80;
    width:  90%;
    height: 2px;
    border-radius: 2px;
}
.text-cassette {
  font-family: 'Rock Salt';
  text-align: center;
  color: ${ColorsApp.gray};
  font-size: ${height / 40}px;

}
.text-marca-line{
    background-color: ${ColorsApp.yellow};
    width:  100%;
    height: 2px;
    margin-bottom: 10px;
}

.central {
  background-color:  ${ColorsApp.gray};
  //border: 2px solid ${ColorsApp.black};
  width: 100%;
  height: ${height / 14}px;
  //margin: auto;
  overflow: hidden;
  
  display: flex;
  //grid-template-columns: 1fr 1fr;
  //grid-template-rows: 1fr;

  justify-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  
  //position: relative;

  border-radius: 10px;
  
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image:
      linear-gradient(
        150deg,
        transparent 14%,
        rgba(255, 255, 255, 0.1) 15% 25%, 
        transparent 26% 30%,
        rgba(255,255,255, 0.1) 31% 34%,
        transparent 35% 37%,
        rgba(255,255,255, 0.1) 38% 39%,
        transparent 40%
      );    
  }
}

.axis {
  width:  ${width / 15}px;
  height:  ${width / 15}px;
  border-radius: 50%;
  background: #333;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::after {
    content: "";
    display: inline-block;
    width: ${width / 50}px;
    height: ${width / 50}px;
    border: 4px solid #292929;
    border-radius: 50%;
    background: #555;
  }
}

.arc {
  width: ${width / 11}px;
  height:  ${width / 11}px;
  background: #aaa;
  border-radius: 50%;
  
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: ${width / 70}px; /* Ajusta el tamaño de las líneas */
    height: ${width / 11}px; /* Ajusta el tamaño de las líneas */
    background:
        linear-gradient(
            #aaa ${((width / 11) / 5) * 1.5}px,
            transparent  ${((width / 11) / 5) * 1.5}px ${((width / 11) / 5) * 3.5}px,
            #aaa ${((width / 11) / 5) * 3.5}px ${width / 11}px
        );
  }

  &::after {
    transform: rotateZ(90deg);
  }  
  
  display: flex;
  justify-content: center;
  align-items: center;
}

.tape {
  
  border-radius: 50%;
  border: 2px solid  ${ColorsApp.white}80;
  background: #111;
  
  display: flex;
  justify-content: center;
  align-items: center;
  


}
.left {
    width: ${width / 2.5}px;
    height: ${width / 2.5}px;
  }
.right {
    width:  ${width / 3.5}px;
    height:  ${width / 3.5}px;
  }

.animated .tape {
  animation: spin 6s linear infinite forwards;
  &.right { animation-duration: 3s; }
}

@keyframes spin {
  0% { transform: rotateZ(360deg) }
  100% { transform: rotateZ(0) }
}

.bottom {
  background-color: ${ColorsApp.gray};
  width: 85%;
  height:${height / 40}px;
  margin: 0px auto ${height / 70}px;
  padding: ${width / 50}px;
  clip-path: 
  polygon(0 100%, 5% 0, 95% 0, 100% 100%);
  
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  background-image: 
  linear-gradient(
        0deg,
        rgb(22, 22, 22) 1% 10%, 
        transparent 11% 90%,
        rgb(107, 107, 107) 91% 100%
      ),
  linear-gradient(
        150deg,
        transparent 14%,
        rgba(255, 255, 255, 0.1) 15% 25%, 
        transparent 26% 50%,
        rgba(255,255,255, 0.1) 51% 64%,
        transparent 35% 37%
      )
     ;  }



.bottom .inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${width / 2}px;
  height: ${height / 25}px;
}




.screw{ 
    position: absolute;
    display: block;
    width: ${width / 25}px;
  height: ${width / 25}px;
    border-radius: 50%;
    border: solid ${width / 100}px black;
    background-color: ${ColorsApp.gray};
    box-shadow: inset -.25em -.25em ${ColorsApp.black};
    z-index: 10;
      
    // screw heads   
    &::before,
    &::after {
      position: absolute;
      content: '';
      display: block;
      background-color: #111;
    }
      
    &::before {
      width: 50%;
      height: 14%;
      top: 43%;
      left: 25%;
    }
      
    &::after {
      width: 14%;
      height: 50%;
      top: 25%;
      left: 43%;
    }
}

.screw-dark {
    width: ${width / 40}px;
    height:  ${width / 40}px;
    border-radius: 50%; 
    background: #000000;
}

.tr{
    top:  ${width / 50}px;
    right:  ${width / 50}px;
}

.tl{
    top: ${width / 50}px;
    left: ${width / 50}px;
}

.br{
    bottom: ${width / 50}px;
    right: ${width / 50}px;
}

.bl{
    bottom: ${width / 50}px;
    left: ${width / 50}px;
}


@keyframes stamp {
  0% { opacity: 0 }
  100% { opacity: 1 }
}



.controls{
  background-color: ${ColorsApp.gray};
  min-height:${height / 16}px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  box-shadow: 1px -1px 2px 2px rgb(99, 99, 99) inset;  
  border: 1px solid ${ColorsApp.black};

  border-radius: ${width / 50}px;
}

.controls-button{
  background-color: ${ColorsApp.brown};
  width: ${height / 24}px;
  height: ${height / 24}px;
  border-radius: 10%;

}
.play{
 
}
.exit{
 
}



.keys{
    transform-style: preserve-3d;
    transform: translateZ(1000px);
    display: flex;
    gap: 3px;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  .key-container {
    border: 1px solid ${ColorsApp.gray};
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    padding: 8px;
    gap: 3px;
    margin: 0;
    background-color: ${ColorsApp.black};
    justify-content: center;
    gap: 5px;

    
  }
  .key-line{
    height: 1px;
    width: 98%;
    background-color: ${ColorsApp.yellow}

  }
  .key-text{
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .p3{
        font-family: "Bangers", system-ui;
        font-size: ${height / 40}px;
    }
    .p1{
        font-weight:bold;
        font-family: "Inconsolata";
        font-size: ${height / 40}px;


    }

  }
  .key-footer{
   
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #C74949;
    padding: 5px;
    border-radius: 5px;
    
    p{
        padding: 0px;
        color: ${ColorsApp.black};
        font-family: "Inconsolata";

    }
  }


  

.button-key {
    width: 60px;
    height: ${height / 6}px;
    border-radius: 0px 0px 5px 5px;
    background: linear-gradient(to top, ${ColorsApp.white}, ${ColorsApp.yellow}80);
    display: flex;
    outline: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    align-items: center;
    padding: 0;
    z-index: 1000;
    position: relative;
    margin: 0px;
    &::after {
    content: "";
    position: absolute;
    border-radius: 0px 0px 5px 5px;
    //z-index:20000;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-image:
      linear-gradient(
        150deg,
        transparent 71%,
        rgba(255, 255, 255, 0.514) 72% 75%,
        transparent 76% 80%,
        rgba(255, 255, 255, 0.829) 81% 99%
      );    
    }
  }
  




  .button-key:hover {
    border: none;
    transform: scaleY(0.96);
    transform-origin: top;
  }
  .button-key:focus {
    background: linear-gradient(
      to top, 
      ${ColorsApp.yellow}80, 
      ${ColorsApp.yellow}80
      );
    transform: scaleY(0.92);
    transform-origin: top;
    border: none;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background-image:none   
    }
  }

  .note-key{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dbc2a9;
    border: 1px solid #a08d7a;
    color: ${ColorsApp.black};
    width: auto;
    padding-inline: 10px;
    padding-block: 3px;

    font-family: "Caveat", cursive;
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.788);
    z-index: 1;
    white-space: nowrap; 
    font-size: ${height / 55}px;
  
  }




































  


@media screen and (max-width: 600px) {
  .cassette-container{
    transform: rotateX(45deg) rotateY(0deg) rotateZ(-45deg)  scale(0.67);
        //transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translate(-150px,-300px) scale(1);

    }

  .open{
    transform: rotateX(8deg) rotateY(12deg) rotateZ(-5deg) scale(1);
    height: 480px;
    cursor: auto;
  }
        
.bottom-cassette{
  height: 50px;
  width: 310px;
}
.left-cassette{
  height: 480px;

  width: 50px;
  transform: rotateY(-90deg)  translateX(-50px);

}

  .top{
    height: 100px;
    width: 600;
  }
    .key-container {
      padding: 5px;
      margin: 0;
      margin-top: 10px;
      margin-bottom:20px;
    }
    .cassette {
    width: 280px;
    padding: 15px;  
    background-image: 
    linear-gradient(120deg, rgba(0,0,0, 0.5), rgba(0,0,0, 0.05)), 
    repeating-linear-gradient(
        to bottom, 
        #252525 0 3px, 
        transparent 3px 7px
    ),
    linear-gradient(315deg, rgba(39, 39, 39, 0.25) 25%, transparent 25%),

    radial-gradient(circle at 25% 60px, #111111 25px, transparent 30px),
    radial-gradient(circle at 50% 60px, #111111 35px, transparent 40px),
    radial-gradient(circle at 75% 60px, #111111 25px, transparent 30px),

    linear-gradient( 
        150deg,
        transparent 14%,
        rgba(255, 255, 255, 0.1) 15% 25%, 
        transparent 26% 30%
        ),
    radial-gradient(circle at 60% 40%, rgb(131, 131, 131), transparent 60%);

    }
  .label {
    padding: 0;
  }
    .tape-cassette{
    padding: 5px;
  }
    .text-container{
    width: 230px;
    height: 30px;
    }
    .text-line{
    width: 220px;
    height: 2px;
    bottom: 4px;
    }
    .text-marca-line{
      width: 230px;
      height: 2px;
      margin-bottom: 8px;
    }
    .central {
      width: calc(300px / 1.6);
      height: 40px;

    }
    .axis {
      width: 25px;
      height: 25px;
    }

    .arc {
      width: 35px;
      height: 35px;
      &::before,
      &::after {
        position: absolute;
        content: "";
        width: 4px; /* Ajusta el tamaño de las líneas */
        height: 35px; /* Ajusta el tamaño de las líneas */
        background:
        linear-gradient(
            #aaa 10px,
            transparent 10px 25px,
            #aaa 25px 35px
        );
        }
    }
    .left {
      width: 100px;
      height: 100px;
    }
    .right {
      width: 70px;
      height: 70px;
    }
    
    .bottom {
      background-color: ${ColorsApp.gray};
      width: calc(280px / 1.5);
      height: 20px;
      margin: 10px auto 0px;
    }

    .bottom .inner {
      width: 120px;
      height: 30px;
    }

    .button-key {
      width: 50px;
      height: 65px;
      border-radius: 0px 0px 3px 3px;
    }

    .note-key{
      padding-inline: 8px;
      padding-block: 0px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .screw{ 
    width: 12px;
    height: 12px;
  }

  
  .screw-dark{ 
    width: 10px;
    height: 10px;
  }

}

@media screen and (min-width: 601px) and (max-width: 1200px) {


  .cassette-container{
      transform: rotateX(45deg) rotateY(0deg) rotateZ(-45deg) scale(.6);
    }
    .open{
    transform: rotateX(8deg) rotateY(12deg) rotateZ(-5deg) scale(1);
    height: 748px;
    cursor: auto;
  }

    .bottom-cassette{
  height: 70px;
  width: 490px;
}
.left-cassette{
  height: 748px;

  width: 70px;
  transform: rotateY(-90deg)  translateX(-70px);

}
    
    .key-container {
    padding: 8px;
    }
    .cassette {
    width: 450px;
    height:  calc(var(450px) * 0.6);
    
    }
    .text-container{
    width: 380px;
    height: 40px;
    }
    .text-line{
    width: 350px;
    height: 2px;
    bottom: 8px;
    }
    .text-marca-line{
    width: 380px;
    height: 2px;
    margin: 8px;
    }
    .central {
    width: calc(520px / 1.6);
    height: 70px;

    }
    .axis {
    width: 40px;
    height: 40px;
    }
    .arc {
    width: 55px;
    height: 55px;
    &::before,
    &::after {
        position: absolute;
        content: "";
        width: 8px; /* Ajusta el tamaño de las líneas */
        height: 50px; /* Ajusta el tamaño de las líneas */
        background:
        linear-gradient(
            #aaa 15px,
            transparent 15px 35px,
            #aaa 35px 50px
        );
        }
    }
    .left {
    width: 155px;
    height: 155px;
    }
    .right {
        width: 105px;
        height: 105px;
    }

    
    .bottom {
    background-color: ${ColorsApp.gray};
    width: calc(500px / 1.5);
    height: 30px;}
    
    .button-key {
      width: 60px;
      height: 100px;
      border-radius: 0px 0px 4px 4px;

    }
}

`
