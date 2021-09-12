//Building up the warehouse details compoenent.
import './DetailsWarehouse.scss';


const DetailsWarehouse = () => {

    return ( 
        <section className='details'>

            <section className='head'>
                <div className='head__main'>
                    <img className='head__arrow' src='http://localhost:8080/Assets/Icons/arrow_back-24px.svg' alt = 'arrow to go back'/>
                    <h2 className='head__title'>King West</h2>
                </div>
                <button className='head__action'>
                    <img className='head__edit' src='http://localhost:8080/Assets/Icons/edit-white-24px.svg' alt = 'editing symbol' />
                    <p className='head__edit-text'>Edit</p>
                </button>
            </section>

            <section className='info'>
                <div className='info__address'>
                    <h6 className='info__address-title'>WAREHOUSE ADDRESS:</h6>
                    <p className='info__address-text'>469 King Street West, <br/>Toronto, CAN</p>
                </div>
                <div className='info__contact'>
                    <div className='info__name'>
                        <h6 className='info__name-title'>CONTACT NAME:</h6>
                        <p className='info__name-text'>Graeme Lyon <br/>Warehouse Manager</p>
                    </div>
                    <div className='info__information'>
                        <h6 className='info__information-title'>CONTACT INFORMATION</h6>
                        <p className='details__information-text'>+1 (647) 504-0911<br/>glyon@instock.com</p>
                    </div>
                </div>
            </section>

            <section className='item'>

                <section className='option'>

                    <div className='option__class'>

                        <div className='option__inventory'>
                            <div className='option__inventory-status'>
                                <h6 className='option__inventory-title'>INVENTORY ITEM</h6>
                                <img classname='optoin__inventory-pic' src='http://localhost:8080/Assets/Icons/sort-24px.svg'/>
                            </div>
                            <div className='option__inventory-text'>
                                <p className='option__inventory-text--blue'>Television</p>
                                <img className='option__inventory-image' src='http://localhost:8080/Assets/Icons/chevron_right-24px.svg' alt='arrow to the right' />
                            </div>
                        </div>

                        <div className='option__category'>
                            <div className='option__catagory-status'>
                                <h6 className='option__catagory-title'>CATEGORY</h6>
                                <img classname='option__catagory-pic' src='http://localhost:8080/Assets/Icons/sort-24px.svg'/>
                            </div>
                            <p className='option__catagory-text'>Electronics</p>
                        </div>

                    </div>

                    <div className='option__property'>
                        <div className='option__status'>
                            <div className='option__stats'>
                                <h6 className='option__stats-title'>STATUS</h6>
                                <img classname='option__stats-pic' src='http://localhost:8080/Assets/Icons/sort-24px.svg'/>
                            </div>
                            <p className='option__status-text'>IN STOCK</p>
                        </div>

                        <div className='option__status-qty'>
                            <div className='option__qty'>
                                <h6 className='option__qty-title'>QTY</h6>
                                <img classname='option__qty-pic' src='http://localhost:8080/Assets/Icons/sort-24px.svg'/>
                            </div>
                            <p className='details__status-text'>500</p>
                        </div>
                    </div>

                </section>

                <section className='icons'>
                    <h6 className='icons-title'>ACTIONS</h6>
                    <div className='icons__pic'>
                        <img className='icons__trash'src='http://localhost:8080/Assets/Icons/delete_outline-24px.svg' alt ='trash can'/>
                        <img className='icons__pencil' src='http://localhost:8080/Assets/Icons/edit-24px.svg' alt='pencil symbol'/>
                    </div>
                </section>

            </section>

        </section>
     );
}
 
export default DetailsWarehouse;