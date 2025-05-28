import React from 'react'

const Modal = ({ children, isOpen, onClose, title }) => {
    if (!isOpen) return;
    return (
        <div className=''>
            <div className="">
                {/* Model context */}
                <div className="">
                    <h3 className=''> {title}</h3>
                    <button type='button'
                    className=''
                    onClick={onClose}
                    >
                        <svg className=''
                        aria-hidden ="true"
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 14 14'>
<path
stroke = "currentColor"
strokeLinecap='round'
strokeLinejoin='round'
strokeWidth="2"/>
                        </svg>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Modal;