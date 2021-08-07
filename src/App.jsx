import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';

import ShoppingList from './shopping-list.jsx';
import AddItem from './add-item.jsx';
import store from './store.js';


const NoMatch = ({ location }) => (
  <div>
    <h3>Page not found: {location.pathname}</h3>
  </div>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <header>
            <h1><Link to="/">Shopping List</Link></h1>
          </header>
          <Switch>
            <Route exact path="/" component={ShoppingList}/>
            <Route path="/add" component={AddItem}/>
            <Route component={NoMatch}/>
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
