
//styles
import{ThemeProvider} from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

export default function App({ Component, pageProps }) {
  return (
    <>
    <title>Hapu - Developer SkyDark-Mason</title>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

// desenvolvido por Paulo Daniel de Araújo - SkyDark - Mason