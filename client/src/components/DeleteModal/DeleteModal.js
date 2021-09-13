import React from 'react'
import './DeleteModal.scss';

const DeleteModal = ({ selectedWarehouse, toggleModal, warehouseDelete, closeWarehouseModal }) => {
    if (selectedWarehouse === null || !toggleModal) {
        return null;
    }
    return (
        <div className='modal'>
            <div className='modal__content'>
                <button className='modal__close' onClick={closeWarehouseModal} />
                <div className='modal__header'>
                    <h1 className='modal__title'>  Delete King West warehouse?</h1>
                </div>
                <div className='modal__body'>
                    Please confirm that you’d like to delete the King West from the list of warehouses. You won’t be able to undo this action.
                </div>
                <div className='modal__footer'>
                    <button className='modal__footer-cancel' onClick={closeWarehouseModal}>Cancel</button>
                    <button className='modal__footer-delete' onClick={() => warehouseDelete(selectedWarehouse.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
