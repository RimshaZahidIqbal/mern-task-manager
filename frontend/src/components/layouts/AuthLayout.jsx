import React, { useEffect, useState } from 'react';
import img from '../../assets/images/login-image.jpg';
import img1 from '../../assets/images/login-img.svg';

const AuthLayout = ({ children }) => {
    const images = [img, img1];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='flex'>
            <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
                <h2 className='text-3xl font-bold text-[#1f92de]'>Task Manager</h2>
                {children}
            </div>

            <div className='hidden md:flex w-[60vw] h-screen items-center justify-center relative overflow-hidden'>
                {images.map((source, index) => (
                    <img
                        key={index}
                        src={source}
                        alt={`bg-img-${index}`}
                        className={`absolute w-64 lg:w-[90%] transition-opacity duration-1000 ease-in-out ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default AuthLayout;
