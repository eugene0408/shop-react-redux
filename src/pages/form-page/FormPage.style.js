import styled, {css} from "styled-components";

const inputStyles = css`
    width: 100%;
    height: 3rem;
    border: none;
    border-radius: 10px;
    box-shadow: var(--card-shadow);
    margin-top: .2rem;
    margin-bottom: .5rem;
    font-size: 18px;
    padding-left: .8em;
`

export const Label = styled.label`
    font-size: var(--text-fz);
    color: var(--text-col);
`

export const Input = styled.input`
    ${inputStyles}
`

export const TextArea = styled.textarea`
    ${inputStyles}
    height: 5em;
    padding-top: .8em;
    resize: none;
`

export const ButtonWrapper = styled.div`
    margin-top: 2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`