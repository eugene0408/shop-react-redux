import styled from 'styled-components'

export const CardWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    overflow: hidden;
    height: 17rem;
    width: 100%;
    box-shadow: var(--card-shadow);
`
export const CardImage = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    height: 60%;
    width: 100%;
`
export const CardContent = styled.div`
    border-radius: 0 15px 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:0 .3rem .3rem .3rem;
    background: var(--card-bg);
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
`
export const Title = styled.h3`
    width: 100%;
    height: 2.2rem;
    margin: .3em;
    text-align: left;
    color: rgba(0,0,0, .6);
    display: inline-block;
    position: relative;
    text-transform: capitalize;
    font-size: 16px;
`

export const PriceWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 0;
`

export const Size = styled.p`
    margin: 0;
    font-size: 16px;
    &::after{
        content: "г.";
        font-size: 12px;
        color: rgba(0,0,0, .8);
    }
`
export const Price = styled.p`
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    &:after{
        content: '₴';
        font-size: var(--text-fz);
        color: rgba(0,0,0, .6);
        font-weight: 700;
    }
`

export const CardButton = styled.button`
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
    /* background: rgba(0,0,0, .1); */
    border: 1px solid rgba(256,256,256, .6);
    border-radius: 50%;
    text-align: center;
    font-size: 8px;
`

export const LinkArea = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 85%;
`
