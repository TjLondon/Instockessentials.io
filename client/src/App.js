import { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Warehouse from './pages/Warehouse/Warehouse'
import DetailsWarehouse from './pages/DetailsWarehouse/DetailsWarehouse'
import EditWarehouse from './pages/EditWarehouse/EditWarehouse'
import AddWarehouse from './pages/AddWarehouse/AddWarehouse'
import Inventory from './pages/Inventory/Inventory'
import DetailsInventory from './pages/DetailsInventory/DetailsInventory'
import EditInventory from './pages/EditInventory/EditInventory'
import AddInventory from './pages/AddInventory/AddInventory';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';


class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path='/:id/inventory/add' exact component={AddInventory} />
          <Route path='/' exact component={Warehouse} />
          <Route path='/add' exact render={(routerProps) => <AddWarehouse component={<Header />}{...routerProps} />} />
          <Route path='/:id' exact component={DetailsWarehouse} />
          <Route path='/:id/edit' exact component={EditWarehouse} />
          <Route path='/:id/inventory' exact component={Inventory} />
          <Route path='/:id/inventory/:itemId' exact component={DetailsInventory} />
          <Route path='/:id/inventory/:itemId/edit' exact component={EditInventory} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
