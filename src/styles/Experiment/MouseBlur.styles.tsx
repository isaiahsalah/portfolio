import styled from "styled-components";

export const MouseBlurBox = styled.div`

     
    background: 
    linear-gradient(60deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, transparent 75%, rgba(255, 255, 255, 0.15) 75%), /* Líneas de brillo */

    radial-gradient(circle at 30% 40%, rgba(133, 91, 126, 0.74) 0%, rgba(18, 10, 22, 0.363) 80%),
    radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.788) 100%),
    linear-gradient(145deg, #6e3b56, #6e485e);
 
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;   
    height: 100%;
    width: 100%;

.text {
    display: flex;
    flex-direction: column;
     position: relative;
     height: 100%;
     align-items: center;
     justify-content: center;
    z-index: 3;
    font-family: Satisfy;
    color: #d9d4a8;
}


#blob-container{ 
    position: relative;
    height: 100%;
    width: 100%;
}
#blob {
    height: 40%;
    width: 20%;
    position: absolute;
    left: 50%;
    top: 50%;
    translate: -50% -50%;
    border-radius: 50%;
    background: linear-gradient(to right, #77dacf, #dd7984);
    animation: rotate 2s infinite alternate, ovalo 5s infinite alternate;
}

@keyframes rotate {
    from {
        rotate: 0deg;
    }
    to {
        rotate: 360deg;
    }
}

@keyframes ovalo {
    from {
        scale: 1.5 1;
    }
    to {
        scale: 1 1.5;
    }
}

#blur {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 2; 
    backdrop-filter: blur(40px);  
}

@media screen and (max-width: 600px) {
    #blob {
        filter: blur(100px);
    }
    #blur {
        display: none;
    }
}
`