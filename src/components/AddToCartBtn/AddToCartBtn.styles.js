import styled from 'styled-components'

export const Button = styled.button`
    font-size: 12px;  
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background: var(--orange);
    color: #fff;
    border: none;
    border-radius: 10px;
    width: 8rem;
    height: 2.2rem;
    font-weight: 700;
    text-transform: uppercase;
`

export const IconWrapper = styled.div`
    position: relative;
    height: 100%;
    margin-right: .8rem;
    display: flex;
    align-items: center;
    & svg {
        width: 1.5rem;       
    }
    & svg path {
        fill: rgba(256,256,256, .8);;
    }
`

export const IconAmount = styled.span`
    position: absolute;
    top: 12%;
    left: 32%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.6em;
    width: 1.6em;
    color: white;
    border: 1px solid rgba(256,256,256, .6);
    border-radius: 50%;
    text-align: center;
    font-size: 8px;
`

