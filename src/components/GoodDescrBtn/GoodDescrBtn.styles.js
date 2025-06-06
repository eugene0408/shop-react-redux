import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    height: 3rem;
`

export const Counter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    border-radius: 10px;
    border: none;
    height: 100%;
    box-shadow: var(--card-shadow);
    background-color: #ffffff;
`

const CounterBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center; 
    font-size: 12px;
    height: 100%;
    width: 2rem;
    border: none;
    background: var(--orange);
    color: var(--btn-text);

`
export const CounterBtnLeft = styled(CounterBtn)`
    border-radius: 10px 0 0 10px;
`
export const CounterBtnRight = styled(CounterBtn)`
    border-radius: 0 10px 10px 0;
`

export const CounterValue = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    font-size: 16px;
    color: #000;
    width: 2.5em;
`

export const Button = styled.button`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: var(--orange);
    color: var(--btn-text);
    border: none;
    border-radius: 10px;
    width: 10rem;
    height: 3rem;
    padding: 0 2em;
    font-size: 12px;  
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    margin-left: 2em;
    & div {
        color: var(--btn-text);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 0 2em;
    }
`
