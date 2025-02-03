import styled from "styled-components";
import { colors } from "../utils/config";

export const ExperimentBox = styled.div`
min-height: 100vh;
margin-top: 100px;

fieldset{ 
    width:100%;
    }
legend{
    text-align:center;
}
 
.list{
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    //grid-template-rows: auto;
    box-sizing: border-box;
    align-items: center;
    justify-content: center;
    //overflow: hidden;
    //grid-gap: 15px; 
    //background-color: red;
    position: relative;
    width:100%;
}
.item{  
    
    display: flex; 
    flex-direction: column;
    text-align: center;
    justify-content: center;
    //background-color: ${colors.secondary}B3;
    
    padding: 20px;
    gap:20px ;
    height: 100%;
    width: 100%;
    //background-color: beige; 
    box-sizing: border-box;
    
    .item-experiment{
        //filter: grayscale(1) opacity(0.1); 
        //filter:   opacity(0.5);
        
        transition: all 0.25s ease-in-out;
        background-image: radial-gradient(
            circle at 20% 30%,
            ${colors.primary},
            ${colors.dark}
        );
        .experiment{
            transition: all  0.25s ease-in-out;
            filter: saturate(0%);;
            opacity: 0.4;
        }
    }
}

.item:hover{
    //background-color: ${colors.secondary}B3; 
    //transform: scale(1.05);
    .item-experiment{
        //filter: grayscale(1) opacity(0.1); 
        filter:   opacity(1);
        .experiment{
            filter: none;
            opacity: 1;
        }
    } 
    .title{
        color: ${colors.primary};
    }
}
.item-experiment{ 
    width: 100%;
    height: 250px;
     //border-radius: 5px;
    border-radius: 5px; 
    box-sizing: border-box; 
    overflow: hidden;
 }

.first-experiment{
    order: 1;
    
}

.last-experiment{
    order: 1;
}

.experiment{ 
    width: 100%;
    height: 100%;
    
}
.item-description{ 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 100%; 
    box-sizing: border-box;
    gap: 10px;
    border: 4px double ${colors.light}33;
	border-width: 0 0 4px  0;
    
    p{
        text-align:justify
    }
}

.title{
    width: 100%;
    font-weight: bold;
    transition: all 0.15s ease-in-out;
    text-transform: capitalize;

}

.description{

}

.sup{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

}
.links{
    display: flex;
    justify-content: right;
    gap: 10px;
}

.icon-left{
    height: 30px;
    width: 30px;
    color: ${colors.primary};

}

.icon-right{
    height: 20px;
    width: 20px;
    transition: all 0.15s ease-in-out;
}

.icon-right:hover{
    color: ${colors.primary};
}

.tecno{
    color: ${colors.light};
    display: flex;
    justify-content: center;
    gap: 10px;
    width: 100%;
}
@media screen and (max-width: 600px) {
    .list{
        grid-template-columns: none; 
    }
    .item{
        flex-direction: row;
        gap: 10px;
        flex-direction: column;
    }
    .item-experiment{
        width: 100%;
    }
    .item-description{
        border-width:  0 0 4px  0;
        height: auto;
        width: 100%;
    }
    .last-experiment{
    order: 1;
    }
    .item{
        .item-experiment{
        filter:   opacity(0.8);
    }
    }

    .item:hover{
        .item-experiment{
            filter:   opacity(1);
        }
    }
 
}

@media screen and (min-width: 601px) and (max-width: 1200px) {
    .item-experiment{

        width: 70%;
    }
    .item-description{
        border-width: 4px  0;

        height: 100%;
        width: 30%;
    }
    .list{
        grid-template-columns: none; 
    }
    .item{
        flex-direction: row;

        .item-experiment{
        filter:   opacity(0.8);
    }
    .first-experiment{
    order: 1;
    
}

.last-experiment{
    order: 3;
}
    }

    .item:hover{
        .item-experiment{
            filter:   opacity(1);
        }
    }
}

@media screen and (min-width: 1201px) {
  
}

`