import styled from "styled-components";



export const TextGlitchedBox = styled.div`


 
background-color:#9e5d83;
width:100%;
height:100%;
display: flex;
justify-content: center;
align-items: center;
font-family: "Bebas Neue", serif;
font-weight: bold;
.glitch {
  color: white; 
  position: relative;
  margin: 0 auto;
}

@keyframes noise-anim {
  0% {
    clip: rect(15px, 9999px, 85px, 0);
  }
  5% {
    clip: rect(20px, 9999px, 75px, 0);
  }
  10% {
    clip: rect(10px, 9999px, 90px, 0);
  }
  15% {
    clip: rect(25px, 9999px, 70px, 0);
  }
  20% {
    clip: rect(5px, 9999px, 95px, 0);
  }
  25% {
    clip: rect(30px, 9999px, 60px, 0);
  }
  30% {
    clip: rect(10px, 9999px, 80px, 0);
  }
  35% {
    clip: rect(15px, 9999px, 85px, 0);
  }
  40% {
    clip: rect(20px, 9999px, 75px, 0);
  }
  45% {
    clip: rect(10px, 9999px, 90px, 0);
  }
  50% {
    clip: rect(25px, 9999px, 70px, 0);
  }
  55% {
    clip: rect(5px, 9999px, 95px, 0);
  }
  60% {
    clip: rect(30px, 9999px, 60px, 0);
  }
  65% {
    clip: rect(10px, 9999px, 80px, 0);
  }
  70% {
    clip: rect(15px, 9999px, 85px, 0);
  }
  75% {
    clip: rect(20px, 9999px, 75px, 0);
  }
  80% {
    clip: rect(10px, 9999px, 90px, 0);
  }
  85% {
    clip: rect(25px, 9999px, 70px, 0);
  }
  90% {
    clip: rect(5px, 9999px, 95px, 0);
  }
  95% {
    clip: rect(30px, 9999px, 60px, 0);
  }
  100% {
    clip: rect(10px, 9999px, 80px, 0);
  }
}

.glitch:after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -1px 0 red;
  top: 0;
  color: white;
  background-color:#9e5d83;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim 2s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
  0% {
    clip: rect(25px, 9999px, 85px, 0);
  }
  5% {
    clip: rect(30px, 9999px, 75px, 0);
  }
  10% {
    clip: rect(20px, 9999px, 90px, 0);
  }
  15% {
    clip: rect(35px, 9999px, 70px, 0);
  }
  20% {
    clip: rect(15px, 9999px, 95px, 0);
  }
  25% {
    clip: rect(40px, 9999px, 60px, 0);
  }
  30% {
    clip: rect(20px, 9999px, 80px, 0);
  }
  35% {
    clip: rect(25px, 9999px, 85px, 0);
  }
  40% {
    clip: rect(30px, 9999px, 75px, 0);
  }
  45% {
    clip: rect(20px, 9999px, 90px, 0);
  }
  50% {
    clip: rect(35px, 9999px, 70px, 0);
  }
  55% {
    clip: rect(15px, 9999px, 95px, 0);
  }
  60% {
    clip: rect(40px, 9999px, 60px, 0);
  }
  65% {
    clip: rect(20px, 9999px, 80px, 0);
  }
  70% {
    clip: rect(25px, 9999px, 85px, 0);
  }
  75% {
    clip: rect(30px, 9999px, 75px, 0);
  }
  80% {
    clip: rect(20px, 9999px, 90px, 0);
  }
  85% {
    clip: rect(35px, 9999px, 70px, 0);
  }
  90% {
    clip: rect(15px, 9999px, 95px, 0);
  }
  95% {
    clip: rect(40px, 9999px, 60px, 0);
  }
  100% {
    clip: rect(20px, 9999px, 80px, 0);
  }
}

.glitch:before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 blue;
  top: 0;
  color: white;
  background-color:#9e5d83;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim-2 3s infinite linear alternate-reverse;
}
`