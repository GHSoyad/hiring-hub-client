import React from 'react';

const ConfirmModal = ({ data, action, updating }) => {

    return (
        <div>
            <input type="checkbox" id="confirm-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="confirm-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Delete {data.role}?</h3>
                    <p className="py-8">Are you sure you want to delete <span className='font-bold text-primary'> {data.role}</span> from <span className='font-bold text-primary'> {data.location}</span>.<br></br> This action cannot be undone.</p>
                    <div className='flex gap-2 justify-end'>
                        <button onClick={() => action(data._id)} className='btn bg-rose-500 text-white border-0 hover:bg-red-600' disabled={updating}>Delete</button>
                        <label htmlFor="confirm-modal" className='btn btn-outline'>Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal;