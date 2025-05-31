import React, { useEffect, useState } from 'react'
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { LuUsers } from 'react-icons/lu';
import Modal from '../Modal';

const SelectUsers = ({ selectedUsers, setSelectedUsers }) => {
    const [allUsers, setAllUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [tempSelecedUsers, setTempSelectedUsers] = useState([]);

    const getAllUsers = async () => {
        try {
            const response = await axiosInstance.get(API_PATHS.USERS.GET_ALL_USERS);
            if (response.data?.length > 0) {
                setAllUsers(response.data);
            }
        } catch (error) {
            console.error("Error fetch users:", error)
        }
    };

    const toggleUserSelection = (userId) => {
        setTempSelectedUsers((prev) =>
            prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
        );
    };

    const handleAssign = () => {
        setSelectedUsers(tempSelecedUsers);
        setIsModalOpen(false);
    };

    const selectedUserAvatar = allUsers
        .filter((user) => selectedUsers.includes(user._id))
        .map((user) => user.profileImageUrl);

    useEffect(() => {
        if (selectedUsers.length === 0) {
            setSelectedUsers([]);
        }
        return () => { };
    }, [selectedUsers]);

    return (
        <div className='space-y-4 mt-2'>
            {selectedUserAvatar.length === 0 && (
                <button className='card-btn' onClick={() => setIsModalOpen(true)}>
                    <LuUsers className='text-xs' /> Add Members
                </button>
            )}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Select Users"
            >
                <div className='space-y-4 h-[60vh] overflow-y-auto'>
                    {allUsers.map((user) => (
                        <div
                            key={user._id}
                            className='flex items-center gap-4 p-3 border-b border-gray-200'>

                            <img
                                src={user.profileImageUrl}
                                alt={user.name}
                                className='w-10 h-10 rounded-full'
                            />
                            <div className="flex-1">
                                <p className=" font-medium text-gray-800 dark:text-white">
                                    {user.name}
                                </p>
                                <p className='text-[13px] text-gray-500'>
                                    {user.email}
                                </p>
                            </div>
                            <input type="checkbox"
                                checked={tempSelecedUsers.includes(user._id)}
                                onChange={() => toggleUserSelection(user._id)}
                                className='w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded-sm outline-none'
                            >
                            </input>

                        </div>
                    ))}
                </div>
            </Modal>
        </div>
    )
}

export default SelectUsers;