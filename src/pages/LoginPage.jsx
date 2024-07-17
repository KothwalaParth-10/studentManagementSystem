import React, { useState } from 'react'

function LoginPage() {
    const [forgetPasswornd, setforgetPassword] = useState(false)
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="container flex justify-center items-center w-full">
                <div class="login-box bg-white p-6 rounded-lg loginshadow w-80">
                    <h1 class="text-center mb-6 text-2xl font-bold text-gray-800">Login</h1>
                    <form method="POST">
                        <div class="textbox mb-4">
                            <label for="email" class="block mb-1 text-gray-700 text-start font-semibold">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email" required class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 "></input>
                        </div>
                        <div>
                            {
                                forgetPasswornd ? <div class="textbox mb-4">
                                    <label for="password" class="block mb-1 text-gray-700 text-start font-semibold"> New Password</label>
                                    <input type="password" id="password" name="password" placeholder="Enter your password" required class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"></input>
                                    <button type="submit" class="btn w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mt-4" onClick={()=>{
                                        setforgetPassword(false)
                                    }}>Reset</button>
                                </div> : (
                                    <div>
                                        <div class="textbox mb-4">
                                            <label for="password" class="block mb-1 text-gray-700 text-start font-semibold">Password</label>
                                            <input type="password" id="password" name="password" placeholder="Enter your password" required class="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"></input>
                                        </div>
                                        <button type="submit" class="btn w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Login</button>
                                        <p class="forgot block text-center mt-4 text-blue-500 hover:underline cursor-pointer" onClick={() => {
                                            setforgetPassword(true)
                                        }}>Forgot Password?</p>
                                    </div>)
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage