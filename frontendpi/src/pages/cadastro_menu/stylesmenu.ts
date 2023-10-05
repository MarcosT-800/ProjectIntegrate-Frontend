import styled from 'styled-components';

export const Header = styled.div`
display: flex;
flex-direction: row;
margin-left: 25px;
`

export const Container = styled.div`
display: flex;
width: 100%;
flex-direction: row;

.col-1 {
    display: flex;
    justify-content: center;
    width: 40%;
}

.col-2 {
    background: #1D1D47;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 65%;
    padding-bottom: 5%;
}

h1 {
    font-family: 'Roboto';
    font-size: 45px;
    padding-top: 40px;
    padding-bottom: 5px;
}
    .card {
            width: 500px;
            height: 400px;
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
    flex-direction: column;
}

.buttongroup {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
    width: 50%;
}
`
