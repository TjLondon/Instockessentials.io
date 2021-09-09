import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import warehouse from './pages/Home/Home'

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={warehouse} />
          <Route path='/:id' exact component={detailsWarehouse} />
          <Route path='/:id/edit' exact component={editWarehouse} />
          <Route path='/add' exact component={addWarehouse} />
          <Route path='/:id/inventory' exact component={inventory} />
          <Route path='/:id/inventory/:itemId' exact component={detailsInventory} />
          <Route path='/:id/inventory/:itemId/edit' exact component={editInventory} />
          <Route path='/:id/inventory/add' exact component={addInventory} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
