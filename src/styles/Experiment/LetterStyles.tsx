import styled from "styled-components";
import { ColorsApp } from "../Colors";

const width = 320;
const height = 150;

export const LettersBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative; 
	animation: moveUpDown 4s  infinite;
	animation: moveLeftRight 6s  infinite;
	height: 100%;
	width: 100%;
	overflow: hidden;
	background: 
		radial-gradient(ellipse at center, #ffffff16 0%,  #ffffff16 50%, #060913 100%),
		linear-gradient(180deg, 
			#ffa13613 , 
			#201405c1 ),
			linear-gradient(45deg, 
			#4b3621 10%, 
			#61472a 25%, 
			#866a5c 50%, 
			#6b4f32 75%, 
			#3a2816 90%); 
/*=============================================================== */

.letters-container{
	display: flex;
	justify-content: center;
	position: absolute;
	left: 5%;
	align-items: center;
	scale: 0.5; 
	width: 100%;
	height: 100%;
}

.box-letters{
	transform-style: preserve-3d;
	transform: rotateX(-22.5deg) rotateY(45deg) rotateZ(0deg)  translateZ(-215px);
	position: absolute;
	display: flex;
	justify-content: center;
	margin: 0;
	width: ${width}px;
	height: ${height}px;
	transition:all  1s;
}

/*=============================================================== */

.title-letters{
	font-family:"Permanent Marker", cursive;
	display: flex;
	justify-content: center;
	align-items: center;
	height:${height / 2}px;
	padding: 0;
	color: #5c4231;
}

.left-box {
	width: ${width}px;
	height: ${height / 2}px;
	background:  #9D7650;
	position: absolute;
	right: ${width / 2}px;
	box-shadow: inset 0 0 2px 1px #765A3E;
	bottom: 0;
	transform: rotateY(-90deg) rotateX(0deg) translatex(${width / 2}px);
}

.right-box {
	width: ${width}px;
	height: ${height / 2}px;
	background: #9D7650;
	position: absolute;
	left: ${width / 2}px;
	bottom: 0;
	box-shadow: inset 0 0 2px 1px #765A3E;
	transform: rotateY(-90deg) rotateX(0deg) translatex(${width / 2}px);
}

.top-box {
	width: ${width}px;
	height: ${height / 2}px;
	background: #765A3E;
	position: absolute;
	bottom: 0;
	transform:  translateZ(0px);
	box-shadow: inset 0 0 2px 1px #765A3E; 
}

.bottom-box {
	width: ${width}px;
	height: ${height / 2}px;
	background: #D8A97A;
	position: absolute;
	bottom: 0;
	transform:  translateZ(${width}px);
	box-shadow: inset 0 0 2px 1px #9D7650;
}

.floor-box{
	width: ${width}px;
	height:${width}px;
	background: #765A3E;
	background: radial-gradient(circle, #765A3E 0%, #5f4933 100%);
	position: absolute;
	bottom: -${width / 2}px;
	transform:  rotateX(90deg)  translateY(${width / 2}px);
	border: none;
}

.shadow-box{
	 

	width: ${width}px;
  height: ${width}px;
  position: absolute;
  bottom: -${width / 2}px;
  background: #3a2f23;
  transform:  rotateX(90deg)  translateY(${(width / 2)}px) translateZ(-${(width / 10)}px);
  //bottom: -10px;
  //box-shadow: -${width / 35}px ${width / 35}px 0px 0px #131312;
  z-index: 1; 
} 
/*=============================================================== */



.sobre{
	margin: 0;
	position: absolute;
	transition:all  1s;
	left: 15px;
	transition:all  1s, left 1s; 

  //transform-style: preserve-3d;
}

.perspectiva-sobre{
    transition:all 1s, top 0.2s ease-in-out;
	top: 0;
	position: relative;
    transform:translateY(0px);

}
.perspectiva-sobre:hover{
	top: -${height * 0.6}px;
	
}

.contenedor-sobre{
    position: relative;
	//box-shadow: 0px 2px 10px hsla(0,0%,10%,1);
	width: ${width * 0.95}px;
	height: ${height}px;
	transform-style: preserve-3d;
    margin-block: 0px;

    transition:  all 1s ease .8s;
    transform: rotateY(0deg);
}



.hover{
	.perspectiva-sobre{
	top: -${height * 0.7}px;
	
	}
	.perspectiva-sobre:hover{
		top: -${height * 0.8}px;
		
	}
	.frontal{
	background:
	linear-gradient(
        170deg,
        rgba(255, 255, 255, 0.1) 10% 15%, 
        transparent 20% 25%,
        #765a3e13 30% 34%,
        transparent 45% 70%,
        #765a3e16 80% 100%
    ),
	linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #765a3e65 100%),
	radial-gradient(circle, #dfdad5 0%, #b1a599 100%);
}
}

.open{
	
	transform:  
	rotateZ(0deg) 
	rotateY(-45deg)  
	rotateX(22.5deg) 
	translateZ(2015px)  
	translateX(107px) 
	scale(1.7) !important;


	.perspectiva-sobre{
		transform:translateY(${height}px);
		top: 0px;
	}

	.perspectiva-sobre:hover{
		top: 10px;
	}

	.contenedor-sobre{
		margin-block: 130px;
		transition:  all 1s;
		transform:  rotateY(180deg);
	}

	#abrir{
		z-index:0;
		transition:  all 1s .5s;
		transform: rotateX(180deg);
	}
	.carta{
		top: -${height * 2}px;
		height:${height * 2.5}px;
		transition: all .5s 1s;
	}
}

/*=============================================================== */


.cara{
	position: absolute;
	top:0;
	left:0;
	width: 100%;
	height: 100%;
	backface-visibility:hidden;
}

.trasera{
	background:#7e7575;
	transform:rotateY(-180deg); 
	width:  ${width * 0.95}px;
}

.frontal{
	position: relative;
	background:  
	linear-gradient(
        170deg,
        rgba(255, 255, 255, 0.1) 10% 15%, 
        transparent 20% 25%,
        #765a3e13 30% 34%,
        transparent 45% 70%,
        #765a3e6a 80% 100%
    ),
	linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #765a3ea2 100%),
	radial-gradient(circle, #dfdad5 0%, #b1a599 100%);
    z-index: 20;
	box-shadow: inset 0 0 2px 1px #765a3ea2;
	transition: all  0.5s;
}

.frontal:hover{
	background:
	linear-gradient(
        170deg,
        rgba(255, 255, 255, 0.1) 10% 15%, 
        transparent 20% 25%,
        #765a3e13 30% 34%,
        transparent 45% 70%,
        #765a3e16 80% 100%
    ),
	linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #765a3e65 100%),
	radial-gradient(circle, #dfdad5 0%, #b1a599 100%);
}



.frontal {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
}

img{
	position: absolute;
	width: 13%;
	object-fit: cover;
	opacity: 0.7;
	aspect-ratio: 1 / 1;
	top: 0;
	left: 0;
	margin:7% ;
	border: 5px solid #e6e2d5;
	box-shadow: -2px 2px 0px 0px #a88c8c;
}

p{
	padding: 0;
	color: ${ColorsApp.gray};
	text-align: center;
	font-family: "Caveat", cursive;
}

.frontal h1 span{
	color: hsla(0,0%,50%,1);
	text-shadow: 0px 1px 1px hsla(0,0%,100%,1);
	text-align: center;
}


#abrir{
	position: absolute;
	top:0;
	left:0;
	height: 0;
	width: ${width * 0.45}px;
	border-top: ${height / 2}px solid #ddd7cf;
	border-left: ${width * 0.25}px solid transparent;
	border-right: ${width * 0.25}px solid transparent;
	transform-origin:center top;
	z-index:10;
	transition: all 1s .3s;
	transform: rotateX(0deg);


}


#partes{
	position: absolute;
	top:0px;
	left:0px;
	width: 0;
	height: 0;
	border-left: ${width * 0.475}px solid  #b1a599;
	border-top: ${height * 0.5}px solid transparent;
	border-bottom: ${height * 0.5}px solid transparent;
	z-index: 5;


}

#partes:after{
	content: "";
	position: absolute;
	bottom: ${height / -2}px;
	left:${width * -0.475}px;
	height: 0;
	width: ${width * 0.45}px;
	border-bottom: ${height / 2}px solid #d4cdc5;
	border-left: ${width * 0.25}px solid transparent;
	border-right: ${width * 0.25}px solid transparent;

}

#partes:before{
	content: "";
	position: absolute;
	top:-${height * 0.5}px;
	right:-${width * 0.475}px;
	width: 0;
	height: 0;
	border-right: ${width * 0.475}px solid  #b1a599;
	border-top: ${height * 0.5}px solid transparent;
	border-bottom: ${height * 0.5}px solid transparent;
}

.carta{
	background: -webkit-linear-gradient(top, hsla(54,0%,96%,1) 0%,hsla(0,0%,98%,1) 70%,hsla(0,0%,95%,1) 100%);
	box-shadow: 0px 2px 5px hsla(0,0%,10%,1);
	border-radius: 5px;
	position: absolute;
	top:3px;
    left: 50%;
    transform: translate(-50%, 0%);	
	display: flex;
	flex-direction: column;
	gap: 10px;
    margin: 0;
	width:  ${width * 0.9}px;
	height: ${height * 0.9}px;
	overflow: hidden;
	z-index: 1;
    transition: all .5s ;
}

.carta hgroup{
	margin:5px;
	position: relative;

	.carta-date{
		color: hsla(0,63%,57%,1);
		position: absolute;
		top: 5px;
		right: 0%;
	}
	.p2{
		padding-top: 20px;
	}
}

.carta hgroup .p3{
	color: ${ColorsApp.gray};
	text-align: center;
	text-shadow: 0px 2px 1px hsla(0,0%,100%,1);
}




.carta p{
    padding: 0;
    padding-inline: 10px;
	color: ${ColorsApp.black};
	text-shadow: 0px 1px 1px hsla(0,0%,100%,1);
	line-height:1em;
}/*
.carta .fl:first-letter{
	color: hsla(0,63%,57%,1);
	text-shadow: 0px 2px 1px hsla(0,0%,100%,1);
	font-size: 1.5em;
	float: left;
	line-height:1.2em; 
}



/*=============================================================== */




@media screen and (max-width: 600px) {
	.box-letters{
		scale: 0.8;
	}
	.open{
		left: 70px;

	}

}

@media screen and (min-width: 601px) and (max-width: 1200px) {

	.box-letters{
		scale: 0.8;
	}
	.open{
		left: 70px;

	}

}
`