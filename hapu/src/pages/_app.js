
//styles
import{ThemeProvider} from 'styled-components';
import theme from '../styles/theme';
import GlobalStyle from '../styles/global';

export default function App({ Component, pageProps }) {
  return (
    <>
    <title>Hapu</title>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
