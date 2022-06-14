import styled from 'styled-components'

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    & svg {
        height: 28px;
    }
    & svg path {
        fill: rgba(0,0,0, .5)
    }
`
export const HeaderTitle = styled.h2`
    font-size: 28px;
    font-weight: 600;  
    text-align: center;
    margin-left: .5rem;
    text-transform: uppercase;
`

