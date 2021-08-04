/* Get best pallates colors in https://coolors.co

/*
 * 0 - Light Theme
 * 1 - Dark Theme
*/

export interface ITheme {
    background: string;
    text: string;
    main: string;
    footer: string;
    button: string;
    link: string;
}

const Themes : ITheme[] = [
    {
        background: '#faf8f2',
        text: '#0a0a0a',
        main: '#4ef58b',
        footer: 'linear-gradient(90deg, #4ef58b, #9effc1)',
        button: '#33ff7e',
        link: '#33ff4b'
    }
]

export default Themes;
