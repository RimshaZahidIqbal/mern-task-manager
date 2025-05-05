import React, { useState } from 'react';
import { LuChevronDown } from 'react-icons/lu';

const SelectDropdown = ({ options, name, value, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false);
    }
    return (
        <div>
            {/* drop down button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className=''>
                {value ? options.find((opt) => opt.value === value)?.label : placeholder}
                <span className=''> {isOpen ? <LuChevronDown className="" /> : <LuChevronDown />} </span>
            </button>
            {/* 3:07:12 */}
        </div>
    );
};

export default SelectDropdown;
