import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: white;
    align-items: center;

`

export const List = styled.div`
    margin-top: 5px;
    font-size: 12px;
    text-decoration: none;
    color: black;


    > h1 {
        text-align: center;
        color: black;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif
    }

    > Link {
        color: black;
    }
`