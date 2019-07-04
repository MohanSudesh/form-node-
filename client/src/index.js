import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core'
import { green, purple, red } from '@material-ui/core/colors'
import { ApolloProvider } from "react-apollo"
import { client } from "./apollo"
import App from './modules/App'
import * as serviceWorker from './serviceWorker'

const theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: {
          main: '#fff',
        },
        lockIcon: {
          main: "#f50057"
        },
        error: red,
        success: green,
    },
})

const renderApp = Component => {
    ReactDOM.render(
          <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
              <Component />
            </ApolloProvider>
          </ThemeProvider> , document.getElementById("root"))
}
  
renderApp(App)

if (module.hot) {
    module.hot.accept('./modules/App', () => {
      const NextApp = require('./modules/App').default;
      renderApp(NextApp);
    });
  }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()