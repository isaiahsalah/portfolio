import styled from "styled-components";



export const TextLineBox = styled.div`

background: #2c503f;
      color: rgba(255, 255, 255, 0.25);
      text-align: center;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

 

      h6 {
        letter-spacing: 0.5em;

        text-transform: uppercase;
        font-family: "Montserrat", serif;
        font-weight: bold;
        letter-spacing: 0; 
      display: block;
      margin: 0 auto;
      text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

      /* Clip Background Image */
      background: url(https://i.ibb.co/RDTnNrT/animated-text-fill.png) repeat-y;
      -webkit-background-clip: text;
      background-clip: text;

      /* Animate Background Image */
      -webkit-text-fill-color: transparent;
      animation: aitf 8s linear infinite;

      /* Activate hardware acceleration for smoother animations */
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
    }

    /* Animate Background Image */
    @keyframes aitf {
      0% {
        background-position: 0% 50%;
      }
      100% {
        background-position: 100% 50%;
      }
    }
`