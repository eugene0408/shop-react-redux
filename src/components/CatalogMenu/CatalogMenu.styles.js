import styled from 'styled-components'

export const MenuWrapper = styled.div`
    background: var(--glass-bg);
    backdrop-filter: blur(10px);
    border-radius: 10px;  
    width: ${props => props.expanded ? "220px": "150px"};
`

export const MenuButton = styled.div`
    width: 100%;
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .9rem;
    cursor: pointer;
    & svg {
        height: 1.2rem;
        width: 1.2rem;
    }
`
export const MenuList = styled.ul` 
    border-radius: 10px;
    list-style: none;
    padding: .9rem;
    margin: 0;
`

export const MenuListItem = styled.li`
    cursor: pointer;

    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: .8rem;
    & a {
        display: flex;
        align-items: center;
        justify-content: start;
    }
    & svg {
        height: 32px;
        margin-right: .5rem;
        padding: .2rem;
        border: 1px dashed var(--orange);
        border-radius: 50%;
    }
    & svg path {
        fill: rgba(0,0,0, .7);
    }
`
