import React, { useState, useEffect } from 'react'
import { HiMiniPlus, HiOutlineTrash } from "react-icons/hi2";

const ToDoListInput = ({ toDoList, setToDoList }) => {
    const [option, setOption] = useState("");
    // adding an option 
    const handleAddOption = () => {
        console.log("AddBtn clicked");
        if (option.trim()) {
            setToDoList([...toDoList, option.trim()]);
            setOption("");
        }
    }
    // deleting an option 
    const handleDeleteOption = (index) => {
        const updatedArr = toDoList.filter((_, idx) => idx !== index);
        setToDoList(updatedArr);
    }

    return (
        <>
            {toDoList.map((item, index) => (
                <div key={index}
                    className='flex justify-between bg-gray-50 border border-gray-100 px-3 p-2 rounded-md mb-3 mt-2'>
                    <p className='text-xs text-black '>
                        <span className='text-gray-400 font-semibold mr-2'>
                            {index < 9 ? `0${index + 1}` : index + 1}
                        </span>
                        {item}
                    </p>
                    <button className='cursor-pointer'
                        onClick={() => { handleDeleteOption(index); }}>
                        <HiOutlineTrash className='text-lg text-red-500' />
                    </button>
                </div>
            ))}
            <div className=' flex items-center gap-5 mt-4'>
                <input type="text"
                    placeholder='Enter Task'
                    value={option}
                    onChange={({ target }) => { setOption(target.value) }}
                    className='form-input'
                />
                <button
                    className='card-btn text-nowrap'
                    onClick={handleAddOption}
                    disabled={!option.trim()}
                >
                    <HiMiniPlus className=' text-lg ' /> Add
                </button>

            </div>
        </>
    )
}

export default ToDoListInput