import '../styles/globals.css';
import Layout from "../Components/Layout";
import CssBaseline from "@mui/material/CssBaseline";
import {Provider} from "react-redux";
import store from "../store";
import {StyledEngineProvider} from "@mui/material";

import { ThemeProvider } from '@mui/material/styles';
import Theme from "../styles/theme";
import {Head} from "next/document";

function MyApp({ Component, pageProps }) {
  return (
      <StyledEngineProvider injectFirst>
          <Provider store={store}>
              <ThemeProvider theme={Theme}>
                <Layout>
                  <CssBaseline />
                  <Component {...pageProps} />
                </Layout>
              </ThemeProvider>
          </Provider>
      </StyledEngineProvider>

  )
}

export default MyApp
