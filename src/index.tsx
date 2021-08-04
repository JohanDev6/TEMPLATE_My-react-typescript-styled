import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components'

import { MainProvider, MainContext, IProviderData } from './providers/mainProvider'

import Routes from './routes';
import GlobalStyles from './styles/globalStyles'

const Root = () => {

  const { data, setData } : IProviderData | any = useContext(MainContext)

  return(
    <MainProvider>
      <ThemeProvider theme={data.theme}>
          <GlobalStyles/>
          <Routes/>
      </ThemeProvider>
    </MainProvider>
  )
}

ReactDOM.render(
  <Root/>
  ,
  document.getElementById('root')
);
