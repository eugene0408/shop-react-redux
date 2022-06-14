import styled from 'styled-components'

export const MenuWrapper = styled.div`
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border-radius: 10px;  
    width: 150px;
`

export const MenuButton = styled.div`
    width: 150px;
    height: 35px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .5rem;
    cursor: pointer;
    & svg {
        height: 1.2rem;
        width: 1.2rem;
    }
`
export const MenuList = styled.ul` 
    border-radius: 10px;
    list-style: none;
    padding: .5rem;
    margin: 0;
`

export const MenuListItem = styled.li`
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: .2rem;
    & svg {
        height: 14px;
        margin-right: .5rem;
    }
    & svg path {
        fill: rgba(0,0,0, .6);
    }
`
