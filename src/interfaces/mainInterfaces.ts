import React, { ReactNode } from 'react'

export interface ITheme {
    background: string;
    text: string;
    main: string;
    footer: string;
    button: string;
    link: string;
}

export interface IMainProvider {
	children: ReactNode
}

export interface IProviderData {
	data: {
		theme: ITheme,
		balance: number,
	},
	setData: {
		setTheme: React.Dispatch<React.SetStateAction<ITheme>>,
		setBalance: React.Dispatch<React.SetStateAction<number>>,
	}
}
