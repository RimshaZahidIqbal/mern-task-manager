import React, { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';

const SelectDropdown = ({ options, value, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false);
    }
    return (
        <div className=''>
            {/* drop down button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className='w-full text-sm text-black outline-none bg-white border  border-slate-200 px-2.5 py-3 rounded-md flex justify-between items-center'
            >
                {value ? options.find((opt) => opt.value === value)?.label : placeholder}
                <span className='ml-2'> {isOpen ? <LuChevronDown className="rotate-180" />
                    : <LuChevronDown />} </span>
            </button>
            {/* Drop Down */}
            {isOpen && (
                <div className='absolute w-full bg-white border-slate-200 rounded-md mt-1 shadow-md z-10'>
                    {options.map((option) => (
                        <div
                            key={option.value}
                            onClick={() => handleSelect(option.value)}
                            className='py-3 px-3 text-sm cursor-pointer hover:bg-gray-100'
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SelectDropdown;
