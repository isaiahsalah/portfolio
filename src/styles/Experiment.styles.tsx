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
    width:100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    align-items: center;
    grid-gap: 15px;
}
.item{ 
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    background-color: ${colors.secondary}B3;
    border-radius: 5px;
    padding: 20px;
    transition: all 0.15s ease-in-out;
    gap:12px ;
}

.item:hover{
    background-color: ${colors.secondary};
    padding: 20px;
    transform: scale(1.05);
    .title{
        color: ${colors.primary};
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
  /* Estilos para pantallas con ancho máximo de 600px */
    .list{
    grid-template-columns: 1fr; 
}
}

@media screen and (min-width: 601px) and (max-width: 1200px) {
  /* Estilos para pantallas con ancho mínimo de 601px y máximo de 1200px */
  .list{
    grid-template-columns: 1fr 1fr; 
}
}

@media screen and (min-width: 1201px) {
  /* Estilos para pantallas con ancho mínimo de 1201px */
  body{
  }
}

`