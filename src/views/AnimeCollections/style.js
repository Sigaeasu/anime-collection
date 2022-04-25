import { css } from '@emotion/css'

const buttonStyle = css`
    float: right;
    background-color: #6140FF;
    color: white;
    transition: 0.2s;
    padding: 5px;
    border-radius: 5px;
    &:hover {
        background-color: #8369ff;
        color: white;
        transform: scale(1.5);
        transition: 0.2s;
    }
`

export default {
    buttonStyle
}