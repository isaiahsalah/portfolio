import styled from "styled-components";



export const PaintBox = styled.div`
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%; 
padding: 20px;
box-sizing: border-box;
background: 
radial-gradient(ellipse at center, rgba(255, 255, 255, 0) 0%,  #00000084 100%),

radial-gradient(ellipse at center, rgba(255, 255, 255, 0.00) 0%, #1b1a1d 100%),
    /* Base gris oscura con un degradado suave */
    radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.3) 90%),
    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.199) 0%, rgba(0, 0, 0, 0.178) 100%),
    linear-gradient(145deg, #4a4a4a92, #2f2f2f6e);

.lienzo-container {
  width: 100%; 
  height: 80%; 
  box-sizing: border-box; 
  cursor: crosshair;
}

#lienzo {
  display: flex;
  justify-content: center;
  align-items: center;
   
  border-radius: 5px;
  border: 2px solid #ec98b6;
  box-sizing: border-box; 
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%; 
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.03), 0 4px 8px rgba(0, 0, 0, 0.4); /* Sombras para realismo */
  background: 
    radial-gradient(ellipse at center, rgba(255, 255, 255, 0) 0%,  #35353530 100%),
    radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.8) 0%, rgba(170, 170, 170, 0.425) 90%),
        radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.9) 0%, rgba(138, 138, 138, 0.377) 80%),
    linear-gradient(145deg, #fefefe, #000000);

}
#color {
   outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  box-shadow: none;
  width: 20%;
  height: 35px;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background: none;
  cursor: pointer;
  border-radius: 5px;
}

#color::-webkit-color-swatch {
    border: none;
    border-radius: 5px;
}

.inputs { 

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px; 
  padding: 10px; 
  margin: 0;
  box-sizing: border-box;
  height: 20%;
  width: 100%;
}
.range-paint{
  -webkit-appearance: none;
  padding: auto;
  margin: auto;
  width: 80%;
  height: 4px;
  border-radius: 5px;
  background: #5d4d64;
  outline: none;
  cursor: pointer;
  &::-webkit-slider-thumb {
    appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #ec98b6;
  }

  &::-moz-range-thumb {
    width: 4px;
    height: 4px;
    border: 0;
    border-radius: 50%;
    background: #ec98b6;
    cursor: pointer;
  }
}
.range-cont{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  height: 100%;
}

#grosor { 
}
`