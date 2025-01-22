import styled from "styled-components";
import { ColorsApp } from "./Colors";

const width = 350;
const height = 180;

export const LettersBox = styled.div`
	display: flex;
	justify-content: center; 
	align-items: center;
	position: relative;
	width: ${width}px;
	height: ${height}px;
	animation: moveUpDown 4s  infinite;
	animation: moveLeftRight 6s  infinite;
	
/*=============================================================== */
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
	height:100px;
	padding: 0;
	color: #5c4231;
}

.left-box {
	width: ${width}px;
	height: ${height}px;
	background:  #9D7650;
	position: absolute;
	right: 215px;
	box-shadow: inset 0 0 2px 1px #765A3E;
	bottom: 0;
	transform: rotateY(-90deg) rotateX(0deg) translatex(215px);
}

.right-box {
	width: ${width}px;
	height: ${height}px;
	background: #9D7650;
	position: absolute;
	left: 215px;
	bottom: 0;
	box-shadow: inset 0 0 2px 1px #765A3E;
	transform: rotateY(-90deg) rotateX(0deg) translatex(215px);
}

.top-box {
	width: ${width}px;
	height: ${height}px;
	background: #765A3E;
	position: absolute;
	bottom: 0;
	transform:  translateZ(0px);
	box-shadow: inset 0 0 2px 1px #765A3E;
}

.bottom-box {
	width: ${width}px;
	height: ${height}px;
	background: #D8A97A;
	position: absolute;
	bottom: 0;
	transform:  translateZ(430px);
	box-shadow: inset 0 0 2px 1px #9D7650;
}

.floor-box{
	width: 430px;
	height: 430px;
	background: #765A3E;
	background: radial-gradient(circle, #765A3E 0%, #5f4933 100%);
	position: absolute;
	bottom: -215px;
	transform:  rotateX(90deg)  translateY(215px);
	border: none;
}

.shadow-left-box{
	width: 30px;
	height: 430px;
	background: #B1A18E;
	position: absolute;
	bottom: -215px;
	left: -30px;
	transform:  rotateX(90deg)  translateY(215px);
	border: none;
}

.shadow-top-box{
	width: 430px;
	height: 30px;
	background: #B1A18E;
	position: absolute;
	bottom:-32.5px;
	transform:  rotateX(90deg)   translateY(-30px);
	border: none;
}

/*=============================================================== */



.carta{
	margin: 0;
	position: absolute;
	transition:all  1s;
	left: 15px;
	transition:all  1s, left 1s;

  //transform-style: preserve-3d;
}

#perspectiva{
    transition:all 1s, top 0.2s ease-in-out;
	top: 0;
	position: relative;
    transform:translateY(0px);

}
#perspectiva:hover{
	top: -50px;
	
}

#contenedor{
    position: relative;
	//box-shadow: 0px 2px 10px hsla(0,0%,10%,1);
	width: 400px;
	height: 250px;
	transform-style: preserve-3d;
    margin-block: 0px;

    transition:  all 1s ease .8s;
    transform: rotateY(0deg);
}



.hover{
	#perspectiva{
	top: -150px;
	
	}
	#perspectiva:hover{
		top: -160px;
		
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
	scale(1.4) !important;


	#perspectiva{
		transform:translateY(250px);
		top: 0px;

	}

	#perspectiva:hover{
		top: 10px;
	}

	#contenedor{
		margin-block: 130px;
		transition:  all 1s;
		transform:  rotateY(180deg);
	}

	#abrir{
		z-index:0;
		transition:  all 1s .5s;
		transform: rotateX(180deg);
	}
	#carta{
		top: -380px;
		height:600px;
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

.trasera{

	background:#555555;
	transform:rotateY(-180deg);
 
}

#abrir{
	position: absolute;
	top:0;
	left:0;
	height: 0;
	width: 100px;
	border-top: 120px solid #ddd7cf;
	border-left: 150px solid transparent;
	border-right: 150px solid transparent;
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
	border-left: 200px solid  #b1a599;
	border-top: 125px solid transparent;
	border-bottom: 125px solid transparent;
	z-index: 5;


}

#partes:after{
	content: "";
	position: absolute;
	bottom:-125px;
	left:-200px;
	height: 0;
	width: 100px;
	border-bottom: 145px solid #d4cdc5;
	border-left: 150px solid transparent;
	border-right: 150px solid transparent;

}

#partes:before{
	content: "";
	position: absolute;
	top:-125px;
	right:-200px;
	width: 0;
	height: 0;
	border-right: 200px solid  #b1a599;
	border-top: 125px solid transparent;
	border-bottom: 125px solid transparent;
}

#carta{
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
	width: 380px;
	height:240px;
	overflow: hidden;
	z-index: 1;
    transition: all .5s ;
}

#carta hgroup{
	margin:5px;
	position: relative;

	.carta-date{
		 color: hsla(0,63%,57%,1);
		 position: absolute;
		 top: 0;
		 right: 0%;
	}
	.p3{
		padding-top: 10px;
	}
}

#carta hgroup .p3{
	color: ${ColorsApp.gray};
	text-align: center;
	text-shadow: 0px 2px 1px hsla(0,0%,100%,1);
}




#carta p{
    padding: 0;
    padding-inline: 10px;
	color: ${ColorsApp.black};
	text-shadow: 0px 1px 1px hsla(0,0%,100%,1);
	line-height:1em;
}/*
#carta .fl:first-letter{
	color: hsla(0,63%,57%,1);
	text-shadow: 0px 2px 1px hsla(0,0%,100%,1);
	font-size: 1.5em;
	float: left;
	line-height:1.2em; 
}



/*=============================================================== */




@media screen and (max-width: 600px) {

	.box-letters{
		scale: 0.65;
		width: 350px;
		height: 220px;
		transform: rotateX(-22.5deg) rotateY(45deg) rotateZ(0deg)  translateZ(-175px);
	}

    #contenedor{
		width: 320px;
		height: 220px;

	}
	#carta{
		width: 310px;
		top: 3px;
		height: 200px;
		padding: 0;
	}



/*==================================================== */


	.title-letters{
	height:80px;
}

.left-box {
  width: 350px;
  height:80px;
  right: 175px;
  bottom: 0;
  transform: rotateY(-90deg) rotateX(0deg) translatex(175px);
}

.right-box {
  width: 350px;
  height:80px;
  left: 175px;
  bottom: 0;
  transform: rotateY(-90deg) rotateX(0deg) translatex(175px);
}
.top-box {
  width: 350px;
  height: 80px;
  bottom: 0;
  transform:  translateZ(0px);

}
.bottom-box {
  width: 350px;
  height: 80px;
  bottom: 0;
  transform:  translateZ(350px);
}

.floor-box{
	width: 350px;
  height: 350px;
  bottom: -175px;
  transform:  rotateX(90deg)  translateY(175px);
}

.shadow-left-box{
	width: 30px;
  height: 350px;
  bottom: -175px;
  left: -30px;
  transform:  rotateX(90deg)  translateY(175px);
}

.shadow-top-box{
	width: 350px;
  height: 30px;
  bottom:-32.5px;
  transform:  rotateX(90deg)   translateY(-30px);
}

/*==================================================== */




#abrir{
	width: 100px;
	border-top: 105px solid #ddd7cf;
	border-left: 110px solid transparent;
	border-right: 110px solid transparent;
}

#partes{
	border-left: 160px solid #b1a599;
	border-top: 110px solid transparent;
	border-bottom: 110px solid transparent;
}

#partes:after{
	content: "";
	position: absolute;
	bottom:-110px;
	left:-160px;
	height: 0;
	width: 100px;
	border-bottom: 145px solid #d4cdc5;
	border-left: 110px solid transparent;
	border-right: 110px solid transparent;
}

#partes:before{
	content: "";
	position: absolute;
	top:-110px;
	right:-160px;
	width: 0;
	height: 0;
	border-right: 160px solid #b1a599;
	border-top: 110px solid transparent;
	border-bottom: 110px solid transparent;
}


.open{
	
	transform:  
	rotateZ(0deg) 
	rotateY(-45deg)  
	rotateX(22.5deg) 
	translateZ(2015px)  
	translateX(107px) 
	scale(1.65) !important;

	left: 40px;


	#perspectiva{
		transform:translateY(125px);

	}

	#perspectiva:hover{
		top: 10px;
	}

	#contenedor{
		margin-block: 105px;
		transform:  rotateY(180deg);
	}


	#carta{
		top: -300px;
		height:500px;
	}
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