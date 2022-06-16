import styled from 'styled-components'

export const GoodImage = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    height: 250px;
    width: auto;
    border-radius: 10px;
    box-shadow: var(--card-shadow);
    margin-top: 4rem;
`

export const GoodTitle = styled.h3`
    font-size: 22px;
    font-weight: 700;
    color: rgba(0,0,0, 0.6);
    text-transform: uppercase;
`
export const GoodDescription = styled.p`
    font-size: var(--text-fz);
    white-space: pre-wrap;
`

export const GoodPrice = styled.p`
    font-size: 28px;
    font-weight: 700;
    text-align: right;
     &:after{
        content: '₴';
        font-size: 18px;
        font-weight: 700;
        color: rgba(0,0,0, 0.6);
    }
`



