import {createGlobalStyle} from 'styled-components'

import { ITheme } from '../themes'

declare module 'styled-components' {
  interface DefaultTheme extends ITheme{}
}

export default createGlobalStyle`
    *{
        font-family: 'Poppins';
        color: ${props => props.theme.text};
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        border: 0;
    }

    html, body{
        background: ${props => props.theme.background};
    }

    a{
        text-decoration: none;
        color: ${props => props.theme.link}
    }
    
    .display-flex{
        display: flex;
        justify-content: center;
        align-items: center;
    }
` 