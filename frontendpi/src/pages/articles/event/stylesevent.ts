import styled from 'styled-components';

export const ExitButton = styled.div`
  position: relative;
  top: -10px;
  right: 800px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #1D1D47;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background: #000;
  }

  img {
    width: 24px;
    height: auto;
    margin-right: 8px;
  }
`;

export const Header = styled.div`
display: flex;
flex-direction: row;
margin-left: 25px;
width: 100%;

ul {
    display: flex;
    justify-content: right;
    flex-direction: row;
    width: 100%;
    margin-right: 50px;
    align-items: center;
}

li {
    display: flex;
    letter-spacing: 0.05em; 
    margin-left: 10px;
    margin-right: 50px;/* Exemplo usando em como unidade */
}

a {
    font-size: 18px;
    cursor: pointer;
    font-weight: 600;
}

button {
    padding: 15px 25px;
    background: #1D1D47;
    color: #fff;
    border: none;
    font-size: 15px;
    border-radius: 4px;
    cursor: pointer;
}
`

export const Container = styled.div`
display: flex;
width: 100%;
height: 100vh;
flex-direction: row;

.col-2 {
    background: #1D1D47;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
}

@media (max-width: 2126px) {
        .col-2 {
            height: 120vh;
        }
    }

.cabecalho {
    display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}

h1 {
color: var(--383845, #383845);
text-align: center;
font-family: 'Roboto';
font-size: 3.5em;
font-style: normal;
font-weight: 500;
line-height: 22px;
letter-spacing: 0.46px;
text-transform: uppercase;
margin-bottom: 70px;
}

.seta{
width: 100px;
height: 100px;
flex-shrink: 0;
border-radius: 300px;
background: var(--00b8e4, #1D1D47);

}

.hora_data {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;s
    } 
    .card {
            width: 1450px;
            height: 60vh;
            margin-top: 60px;
            background-color: #fff;
            border: 1px solid #ccc;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        } 

    @media (max-width: 2126px) {
        .card {
            width: 80%;
            height: 120vh;
        }
    }

.inputs {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 60%;

    label {
        margin-right: 20px;
        color: var(--383845, #383845);
        text-align: center;
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 22px; /* 244.444% */
        letter-spacing: 0.46px;
        text-transform: uppercase;
    } 
    @media (max-width: 2126px) {
        label{
            margin-bottom: 0px;
            margin-top: 20px;
        }
  } 

    .label_horas {
        margin-left: 90px;
    } 
    @media (max-width: 2126px) {
            margin-left: 0px;
    }

    input {
        width: 100%;
        height: 40px;
        flex-shrink: 0;
        border-radius: 4px;
        border: 2px solid var(--383845, #383845);
        background: #FFF;
    }

    .date_input {
        width: 300px;
        height: 40px;
        flex-shrink: 0;
        border-radius: 4px;
        border: 2px solid var(--383845, #383845);
        background: #FFF;
    } 
    @media (max-width: 2126px) {
        .date_input {
            width: 100%;
        }
  } 


    .resume_input {
        width: 100%;
        height: 200px;
        flex-shrink: 0;
        border-radius: 4px;
        border: 2px solid var(--383845, #383845);
        background: #FFF;
        margin-top: 20px;
    }

    .organize_input {
        width: 100%;
        height: 50px;
        flex-shrink: 0;
        border-radius: 4px;
        border: 2px solid var(--383845, #383845);
        background: #FFF;
        margin-top: 20px;
    }
}

.buttongroup {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
    width: 50%;
    margin-top: 20px;
}

@media (max-width: 2126px) {
  .inputs {
    flex-direction: column;
  } 

  .col2 {
    background: #1D1D47;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
  }


    .hora_data {
        display: flex;
        flex-direction: column;
        width: 100%;
    } 
    .label_horas {
        margin-left: 0px;
    }
}
`
