import React from 'react';

class Warehouse extends Component {
    render() {
        return (
            <div>
                <h1>Warehouses</h1>
                <input type='search' placeholder='Search...'/>
                <Link path='/add'>+ Add New Warehouse</Link>
            </div>
        )
    }
}

export default Warehouse;