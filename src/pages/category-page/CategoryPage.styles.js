import styled from 'styled-components'

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    & svg {
        height: 34px;
        width: 34px;
        padding: 5px;
        border: 1px dashed rgba(0,0,0, .5);
        border-radius: 50%;
    }
    & svg path {
        fill: var(--orange);
    }
`
export const HeaderTitle = styled.h2`
    font-size: 28px;
    font-weight: 700;  
    text-align: center;
    margin-left: .5rem;
    text-transform: capitalize;
`

