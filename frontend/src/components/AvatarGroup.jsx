import React from 'react'
import { IoPersonCircleSharp } from 'react-icons/io5'

const AvatarGroup = ({ avatars, maxVisible }) => {
    return (
        <div className='flex items-center'>
            {avatars.slice(0, maxVisible).map((avatar, index) => (
                avatar ? (
                    <img
                        key={index}
                        src={avatar}
                        alt={`avatar${index}`}
                        className='w-9 h-9 rounded-full object-cover object-top border-2 border-white -ml-3 first:ml-0'
                    />
                ) : (
                    <div
                        key={index}
                        className='w-9 h-9 flex items-center justify-center bg-gray-100 text-gray-400 rounded-full border-2  object-cover object-top border-white -ml-3 first:ml-0'
                    >
                        <IoPersonCircleSharp size={36} />
                    </div>
                )
            ))}
            {avatars.length > maxVisible && (
                <div className='w-9 h-9 flex items-center justify-center bg-blue-50 text-sm font-medium rounded-full border-2 border-white -ml-3'>
                    + {avatars.length - maxVisible}
                </div>
            )}
        </div>
    )
}

export default AvatarGroup
