import React from "react";
import styled from "styled-components";

export const TypingEffectBox = styled.div`

  background-color: #4F483C;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex; 
  justify-content:center;
  align-items:center;  
  overflow: hidden;
  position: relative;


 



  
.text{
    z-index:2; 
  margin:0;
  padding:0; 
  display: flex;
  justify-content: center;
  place-items: center;  
}

.typing {   
  
  width: 7ch;
  animation:
   blink 0.5s step-end infinite alternate,
   typing 2.5s steps(7) alternate infinite 1s !important;
  white-space: nowrap;
  overflow: hidden; 
  border-right: 3px solid;
  font-family: Inconsolata; 
  color: #f5ebb0;
}


@keyframes typing {
  0% {
    width: 0;
  }
  25% {
    width: 0;
  }
  75% {
    width: 7ch;
  }
  100% {
    width: 7ch;
  }
}


.image-dance{ 
  width:100%;
 height:100%; 
  object-fit: contain;
  margin:0;
  padding:0; 
  opacity:.1; 
  animation: dance 2s infinite step-start; 
}
.back-image{ 
  width:60%;  
  margin:0;
  padding:0;
  display:flex;
  justify-content:center;
  align-items:center;
  position:absolute; 
}

.image{ 
  z-index:2;
  display: flex; 
  justify-content:right;
  align-items:center;
  margin:0;
  padding:0; 

}
.image-cat{  
  width:50px;
  height:50px;
}
.image-cat-2{  
    width:50px;
    height:50px;
  transform: scaleX(-1);
}


@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@keyframes dance {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(-1);
  }
  100% {
    transform: scaleX(1);
  }
}

`

export const TypingAnimationBox = () => {
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    setKey((prev) => prev + 1); // Forzar re-renderizado
  }, []);

  return <TypingEffectBox key={key} data-text="Typing animation" />;
};