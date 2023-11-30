import styled from 'styled-components';

export const Header = styled.div`
display: flex;
flex-direction: row;
margin-left: 25px;

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
    padding: 20px;
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
    .card {
            width: 70%;
            height: 70vh;
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

    .label_horas {
        margin-left: 90px;
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


    .resume_input {
        width: 100%;
        height: 200px;
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
}
`
