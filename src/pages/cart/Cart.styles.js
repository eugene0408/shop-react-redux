import styled from 'styled-components'

export const CartHeader = styled.h2`
    width: 100%;
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 2.5rem;
`

export const TotalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 2.5rem;
`

export const TotalLabel = styled.h3`
    text-align: end;
`

export const TotalValue = styled.p`
    font-size: 24px;
    margin-top: .3rem;
    font-weight: 700;
     &:after{
        content: '₴';
        font-size: 18px;
        font-weight: 700;
    }
`