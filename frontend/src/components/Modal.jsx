import React from 'react';

const Modal = ({ children, isOpen, onClose, title }) => {
    if (!isOpen) return;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center items-start w-full h-full bg-black/50 overflow-y-auto py-8">
            <div className="relative w-full max-w-2xl bg-white rounded-lg shadow ">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200  rounded-t">
                    <h3 className="text-lg font-medium text-gray-900 ">
                        {title}
                    </h3>
                    <button
                        type='button'
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-900 hover:bg-gray-200  rounded-lg w-8 h-8 flex items-center justify-center"
                    >
                        <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* Modal Body */}
                <div className="p-4 space-y-4">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
