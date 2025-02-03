import styled from "styled-components";

const distance = 200;

export const BirthdayCakeBox = styled.div`
  background: rgb(162, 123, 204);
  background: radial-gradient(ellipse at center, rgba(162, 123, 204, 1) 0%, #1e1430 100%);
position: relative;
height: 100%;
/* Control diameter */
 
  

/* Cake position */
.cake {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: calc(-1 * ${distance}px / 2);
  margin-top: calc(-1 * ${distance}px / 2);
  width: ${distance}px;
  height: ${distance}px;
}

/* Cake base */
.cake:after {
  background: rgba(235, 227, 225, 1);
  border-radius: ${distance}px;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: ${distance}px;
  height: calc(${distance}px / 50);
}

/* Candle */
.velas {
  background: rgba(255, 255, 255, 1);
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: calc(-1 * ${distance}px / 40);
  margin-top: calc(-1 * ${distance}px / 12);
  width: calc(${distance}px / 20);
  height: calc(${distance}px / 6);
}

.velas:after,
.velas:before {
  background: rgba(255, 0, 0, 0.4);
  content: "";
  position: absolute;
  width: 100%;
  height: calc(${distance}px / 45);
}

.velas:after {
  top: 25%;
  left: 0;
}

.velas:before {
  top: 45%;
  left: 0;
}

/* Fire */
.fuego {
  border-radius: 100%;
  box-shadow: 0 0 40px 10px rgba(248, 233, 209, 0.2);
  position: absolute;
  top: -12px;
  left: 50%;
  margin-left: calc(-1 * ${distance}px / 30);
  width: calc(${distance}px / 15);
  height: calc(${distance}px / 8);
}

.fuego:nth-child(1) {
  animation: fuego 2s infinite;
}

.fuego:nth-child(2) {
  animation: fuego 1.5s infinite;
}

.fuego:nth-child(3) {
  animation: fuego 1s infinite;
}

.fuego:nth-child(4) {
  animation: fuego 0.5s infinite;
}

.fuego:nth-child(5) {
  animation: fuego 0.2s infinite;
}

/* Fire animation */
@keyframes fuego {
  0% {
    background: rgba(254, 248, 97, 0.5);
    transform: translateY(0) scale(1);
  }
  50% {
    background: rgba(255, 50, 0, 0.1);
    transform: translateY(calc(-1 * ${distance}px / 5)) scale(0);
  }
  100% {
    background: rgba(254, 248, 97, 0.5);
    transform: translateY(0) scale(1);
  }
}

/* Frosting */
.cobertura {
  background: rgba(236, 231, 227, 1);
  border-radius: calc(${distance}px / 2);
  position: absolute;
  bottom: calc(${distance}px / 3);
  left: 50%;
  margin-left: calc(-1 * ${distance}px / 3.6);
  margin-top: calc(-1 * ${distance}px / 10);
  width: calc(${distance}px / 1.8);
  height: calc(${distance}px / 8);
  z-index: 10;
}

.cobertura:after,
.cobertura:before {
  background: rgba(236, 231, 227, 1);
  border-radius: ${distance}px;
  content: "";
  position: absolute;
  width: calc(${distance}px / 20);
  height: calc(${distance}px / 10);
}

.cobertura:after {
  top: calc(${distance}px / 15);
  right: calc(${distance}px / 7);
}

.cobertura:before {
  top: calc(${distance}px / 10);
  right: calc(${distance}px / 11);
}

/* Cake layers */
.bizcocho {
  background: rgba(109, 56, 38, 1);
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: calc(-1 * ${distance}px / 4);
  width: calc(${distance}px / 2);
  height: calc(${distance}px / 3);
}

.bizcocho:after,
.bizcocho:before {
  background: rgba(236, 231, 227, 0.6);
  content: "";
  position: absolute;
  width: 100%;
  height: calc(${distance}px / 20);
}

.bizcocho:after {
  top: 30%;
  left: 0;
}

.bizcocho:before {
  top: 60%;
  left: 0;
}

`