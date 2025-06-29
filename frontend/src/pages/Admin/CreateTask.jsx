import React, { useEffect, useState } from 'react'
// import toast from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom';
import moment from 'moment';
import { LuTrash2 } from 'react-icons/lu';

import axiosInstance from '../../utils/axiosInstance';
import { DashboardLayout } from '../../components/layouts';
import { PRIORITY_DATA } from '../../utils/data';
import { API_PATHS } from '../../utils/apiPaths';
import { SelectDropdown, SelectUsers, ToDoListInput, AddAttachmnetsInput } from '../../components/inputs'
const CreateTask = () => {
    const location = useLocation();
    const { taskId } = location.state || {};
    const navigate = useNavigate();

    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        priority: "",
        dueDate: null,
        assignedTo: [],
        todoCheckList: [],
        attachments: [],
    });
    const [currentTask, setCurrentTask] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleValueChange = (key, value) => {
        setTaskData((prevData) => ({ ...prevData, [key]: value }));
    }
    const clearData = () => {
        // reset form 
        setTaskData({
            title: "",
            description: "",
            priority: "",
            dueDate: null,
            assignedTo: [],
            todoCheckList: [],
            attachments: [],
        })
    };
    // Create Task 
    const createTask = async () => { };
    // create Task
    const updateTask = async () => { };
    const handleSubmit = async () => { };
    // delete Task
    const deleteTask = async () => { };

    return (
        <DashboardLayout activeMenu="Create Task">
            <div className="mt-5">
                <div className="grid grid-cols-1 md:grid-cols-4 mt-4">
                    <div className="form-card col-span-3">
                        <div className="flex items-center justify-between">
                            <h2 className='text-xl md:text-xl font-medium'>
                                {taskId ? "Update Task" : "Create Task"}
                            </h2>
                            {taskId && (
                                <button
                                    className='flex items-center gap-1.5 text-[13px] font-medium text-rose-500 bg-rose-50 rounded px-2 py-1 border border-rose-100 hover:border-rose-300 cursor-pointer'
                                    onClick={() => setOpenDeleteAlert(true)}>
                                    <LuTrash2 className='' />
                                </button>
                            )}
                        </div>
                        <div className="mt-4">
                            <label className="text-xs font-medium text-slate-600" htmlFor="title">Task Title</label>
                            <input
                                placeholder='Create App UI'
                                className='form-input'
                                name='title'
                                value={taskData.title}
                                onChange={({ target }) =>
                                    handleValueChange("title", target.value)
                                }
                            />
                        </div>
                        <div className="mt-3">
                            <label className="text-xs font-medium text-slate-600" htmlFor="description">Description</label>
                            <textarea
                                placeholder='Describe Task'
                                className='form-input'
                                name='description'
                                row={4}
                                value={taskData.description}
                                onChange={({ target }) =>
                                    handleValueChange("description", target.value)
                                }
                            />
                        </div>
                        <div className="grid grid-cols-12 gap-12 mt-2">
                            <div className="col-span-12 lg:col-span-4">
                                <label className="text-xs font-medium text-slate-600" >Priority</label>
                                <SelectDropdown
                                    options={PRIORITY_DATA}
                                    value={taskData.priority}
                                    onChange={(value) => handleValueChange("priority", value)}
                                    placeholder='Select Priority'
                                />
                            </div>

                            <div className="col-span-12 lg:col-span-4">
                                <label className="text-xs font-medium text-slate-600" htmlFor="due-date">Due Date</label>
                                <input
                                    placeholder='Create App UI'
                                    className='form-input'
                                    name='due-date'
                                    value={taskData.dueDate}
                                    onChange={({ target }) =>
                                        handleValueChange("dueDate", target.value)
                                    }
                                    type='date'
                                />
                            </div>
                            <div className="col-span-12 lg:col-span-4">
                                <label className="text-xs font-medium text-slate-600" >Assigned To</label>
                                <SelectUsers
                                    selectedUsers={taskData.assignedTo}
                                    setSelectedUsers={(value) => handleValueChange("assignedTo", value)}
                                />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="" className='text-xs font-medium text-slate-600'> TODO CheckList</label>
                            <ToDoListInput
                                toDoList={taskData?.todoCheckList}
                                setToDoList={(value) => {
                                    handleValueChange("todoCheckList", value)
                                }}
                            />
                        </div>
                        <div className="">
                            <label htmlFor="" className="">Add Attachments</label>
                        </div>
                        <AddAttachmnetsInput />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}

export default CreateTask