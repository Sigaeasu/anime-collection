import { css } from '@emotion/css'

const baseContainer = css`
    width: 25%;
    padding: 5px;
    @media (max-width: 480px) {
        width: 100%;
    }
`

const cardContainer = css`
    width: 100%;
    background-color: white;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
        transform: scale(1.2);
        transition: 0.2s;
    }
`

const linkContainer = css`
    width: 75%;
    padding: 5px;
    color: black;
    &:hover {
        color: black
    }
`

const iconContainer = css`
    width: 25%;
    display: flex;
    align-content: center;
`

const editContainer = css`
    color: #ffe100;
    width: 50%;
    text-align: center;
    transition: 0.2s;
    &:hover {
        transform: scale(2);
        transition: 0.2s;
    }
`

const deleteContainer = css`
    color: red;
    width: 50%;
    text-align: center;
    transition: 0.2s;
    &:hover {
        transform: scale(2);
        transition: 0.2s;
    }
`

const avatarContainer = css`
    width: 100%;
    background-color: white;
    display: flex;
    padding: 5px;
`

export default {
    baseContainer,
    cardContainer,
    linkContainer,
    iconContainer,
    editContainer,
    deleteContainer,
    avatarContainer,
}