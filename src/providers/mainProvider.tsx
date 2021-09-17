import React, { useState, createContext, ReactNode } from 'react'

import Themes from '../themes'

import { ITheme, IMainProvider, IProviderData } from '../interfaces/mainInterfaces'

export const MainContext = createContext({});

export const MainProvider = ({children} : IMainProvider) => {

	const [theme, setTheme] = useState<ITheme>(Themes[0])
	const [balance, setBalance] = useState<number>(0)

	let providerData : IProviderData = {
		data: {
			theme: theme,
			balance: balance, // Or somy balance,
		},
		setData: {
			setTheme: setTheme, // Or somy setTheme,
			setBalance: setBalance,
		}
	}

	return (<MainContext.Provider value={providerData}>{children}</MainContext.Provider>)
}
