import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import ShoppingList from './shopping-list.jsx';
import AddItem from './add-item.jsx';
import store from './store.js';

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <div className="App">
            <AppBar position="relative">
              <Toolbar>
                <h1><Link to="/" style={{textDecoration: 'none', color: 'white'}}>Shopping List</Link></h1>
              </Toolbar>
            </AppBar>
            <Switch>
              <Route exact path="/" component={ShoppingList}/>
              <Route path="/add" component={AddItem}/>
              <Route component={NoMatch}/>
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
