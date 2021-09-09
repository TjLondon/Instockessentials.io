import { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import addWarehouse from './pages/AddWarehouse/addWarehouse';
import warehouse from './pages/Warehouse/warehouse';
// import detailsWarehouse from './pages/DetailsWarehouse/detailsWarehouse';
import editWarehouse from './pages/EditWarehouse/editWarehouse';
import inventory from './pages/Inventory/inventory';
import detailsInventory from './pages/DetailsInventory/detailsInventory';
import editInventory from './pages/EditInventory/editInventory';
import addInventory from './pages/AddInventory/addInventory';

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={warehouse} />
          {/* <Route path='/:id' exact  component={detailsWarehouse} /> */}
          <Route path='/:id/edit'  component={editWarehouse} />
          <Route path='/add'  component={addWarehouse} />
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
