import styled from 'styled-components'

export const GoodImage = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    height: 250px;
    width: auto;
    border-radius: 10px;
    box-shadow: var(--card-shadow);
`

export const GoodTitle = styled.h3`
    font-size: 22px;
    font-weight: 700;
`
export const GoodDescription = styled.p`
    font-size: var(--text-fz);
`

export const GoodPrice = styled.p`
    font-size: 18px;
    font-weight: 700;
     &:after{
        content: '₴';
        font-size: var(--text-fz);
        font-weight: 700;
    }
`



