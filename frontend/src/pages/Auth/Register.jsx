import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from '../../components/layouts/AuthLayout';
import { validateEmail } from '../../utils/helper';
import { ProfilePhotoSelector, Input } from '../../components/inputs';

const Register = () => {
    const [profilePic, setProfilePic] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adminInviteToken, setAdminInviteToken] = useState("");

    const [error, setError] = useState(null);
    const handleRegister = async (e) => {
        e.preventDefault();
        if (!fullName) {
            setError("Please enter full name");
            return;
        }
        if (!validateEmail(email)) {
            setError("Please enter a valid email address.");
            return;
        }
        if (!password) {
            setError("Please enter the password");
            return;
        }
        setError("");
        // Register api calling
    }
    return (
        <AuthLayout>
            <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-black"> Create a new Account</h3>
                <p className='text-xs text-slate-700 mt-[5px] mb-6'>
                    Join us today by entering your details below.
                </p>
                <form onSubmit={handleRegister}>
                    <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Input
                            value={fullName}
                            onChange={({ target }) => setFullName(target.value)}
                            label="Full Name"
                            placeholder="Full Name"
                            type="text"
                        />
                        <Input
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            label="Email Address"
                            placeholder="email@example.com"
                            type="text"
                        />
                        <Input
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                            label="Password"
                            placeholder="Min 8 Characters"
                            type="password"
                        />
                        <Input
                            value={adminInviteToken}
                            onChange={({ target }) => setAdminInviteToken(target.value)}
                            label="Admin Invite Token"
                            placeholder="Min 6 Characters"
                            type="password"
                        />
                    </div>
                    {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p>}
                    <button type="submit" className='btn-primary'>
                        Register
                    </button>
                    <p className=' text-[13px] text-slate-800 mt-3 '>
                        Already have an account? {" "}
                        <Link className="font-medium text-primary underline" to="/login">
                            Login
                        </Link>
                    </p>
                </form>
            </div>

        </AuthLayout>
    )
}

export default Register