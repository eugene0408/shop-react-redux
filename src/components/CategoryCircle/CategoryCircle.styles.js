import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1;
    cursor: pointer;
`
export const Image = styled.div`
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    border-radius: 50%;
    height: 120px;
    width: 120px;
`

export const Title = styled.h3`
    color: var(--text-col);
    text-align: center;
`