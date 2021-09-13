import React from 'react'
import './DeleteModal.scss';

const DeleteModal = ({ warehouses, toggleModal, warehouseModal, warehouseDelete, hideWarehouseModal }) => {
    if (warehouses === null || !toggleModal) {
        return null;
    }
    return (
        <div className='modal'>
            <div className='modal__content'>
                <button className='modal__close' />
                <div className='modal__header'>
                    <h1 className='modal__title'>  Delete King West warehouse?</h1>
                </div>
                <div className='modal__body'>
                    Please confirm that you’d like to delete the King West from the list of warehouses. You won’t be able to undo this action.
                </div>
                <div className='modal__footer'>
                    <button className='modal__footer-cancel'>Cancel</button>
                    <button className='modal__footer-delete' onClick={() => warehouseDelete(warehouses.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal
