import { useEffect, useState } from 'react';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { LuUsers } from 'react-icons/lu';
import { IoPersonCircleSharp } from "react-icons/io5";
import Modal from '../Modal';
import AvatarGroup from '../AvatarGroup';

const SelectUsers = ({ selectedUsers, setSelectedUsers }) => {
    const [allUsers, setAllUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tempSelectedUsers, setTempSelectedUsers] = useState([]);

    const getAllUsers = async () => {
        try {
            const response = await axiosInstance.get(API_PATHS.USERS.GET_ALL_USERS);
            if (response.data?.usersWithTaskCounts?.length > 0) {
                setAllUsers(response.data.usersWithTaskCounts);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    const toggleUserSelection = (userId) => {
        setTempSelectedUsers((prev) =>
            prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev, userId]
        );
    };

    const handleAssign = () => {
        setSelectedUsers(tempSelectedUsers);
        setIsModalOpen(false);
    };

    const selectedUserAvatars = allUsers
        .filter((user) => selectedUsers.includes(user._id))
        .map((user) => user.profileImageUrl);

    useEffect(() => {
        getAllUsers();
    }, []);

    useEffect(() => {
        if (selectedUsers.length === 0) {
            setTempSelectedUsers([]);
        }
    }, [selectedUsers]);

    return (
        <div className='space-y-4 mt-2'>
            {selectedUserAvatars.length === 0 && (
                <button
                    className='card-btn'
                    onClick={() => {
                        if (allUsers.length === 0) {
                            getAllUsers();
                        }
                        setIsModalOpen(true);
                    }}
                >
                    <LuUsers className='text-xs' /> Add Members
                </button>
            )}
            {selectedUserAvatars.length > 0 && (
                <div
                    className='cursor-pointer'
                    onClick={() => {
                        setIsModalOpen(true);
                    }}
                >
                    <AvatarGroup avatars={selectedUserAvatars} maxVisible={3} className='text-xs' /> Add Members
                </div>
            )}
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Select Users"
            >
                <div className='space-y-4 h-[60vh] overflow-y-auto '>
                    {allUsers.map((user) => {
                        const hasImage = user.profileImageUrl && user.profileImageUrl.trim() !== "";
                        return (
                            <div
                                key={user._id}
                                className='flex items-center gap-4 p-3 border-b border-gray-200'
                            >
                                {hasImage ? (
                                    <img
                                        src={user.profileImageUrl}
                                        alt={user.name}
                                        className='w-10 h-10 rounded-full object-cover object-top'
                                    />
                                ) : (
                                    <IoPersonCircleSharp className='w-10 h-10 text-gray-400' />
                                )}

                                <div className="flex-1">
                                    <p className="font-medium text-gray-800 ">
                                        {user.name}
                                    </p>
                                    <p className='text-[13px] text-gray-500'>
                                        {user.email}
                                    </p>
                                </div>
                                <input
                                    type="checkbox"
                                    checked={tempSelectedUsers.includes(user._id)}
                                    onChange={() => toggleUserSelection(user._id)}
                                    className='w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded-sm outline-none'
                                />
                            </div>
                        );
                    })}

                </div>
                <div className='flex justify-end mt-4 gap-2'>
                    <button onClick={handleAssign} className='card-btn-fill'>
                        Done
                    </button>
                    <button onClick={() => setIsModalOpen(false)} className='card-btn'>
                        Cancel
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default SelectUsers;
