import styled from 'styled-components'
import { Container } from 'react-grid-system'


export const ToplineWrapper = styled.div`
    position: sticky;
    top: 0;
    width: 100%;
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    z-index: 2;
`

export const ToplineContainer = styled(Container)`
    display: flex;
    justify-content: center;
`

export const ToplineNav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 3rem;
    width: 100%;  
    padding: 0 .8rem;
`
export const SelectWrapper = styled.div`
    position: fixed;
    top: 3.5rem;
    width: 100%;
    z-index: 2;
`
export const SelectContainer = styled(Container)`
`
export const CartButtonWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
`
export const CartAmount = styled.span`
    position: absolute;
    left: 38%;
    top: 15%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    height: 1.1em;
    width: 1.1em;
    font-size: 10px;
    border-radius: 50%;
    background: var(--yellow);

`