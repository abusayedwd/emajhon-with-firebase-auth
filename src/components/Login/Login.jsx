import React, { useContext, useState } from 'react';
import './Loging.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../SignUp/AuthProvider/AuthProvider';


const Login = () => {
  const { signIn} = useContext(AuthContext)
 const [success, setSuccess] = useState('')
  const navigate = useNavigate();
const location = useLocation();
console.log(location)

const from = location.state?.from?.pathname || '/';

  const loginhandle = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)

    signIn(email, password)
    .then(result => {
      const Login = result.user;
      console.log(Login)
      setSuccess('login successfully')
      form.reset('');
      navigate(from, {replace:true})
    })
    .catch(error => {
      console.log(error)
      
    })
  }

  return (

    <div>


      <form onSubmit={loginhandle} className='w-2/5 mx-auto mt-12 bg-sky-200 p-8'>
        <h3 className='font-bold font-serif text-2xl text-center'>Login!!!</h3>
        <div className="mb-6 ">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
          <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
          <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <p className='mb-6'>New to ema jhon?  <small><Link to="/signup">Sign Up</Link></small></p>


        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
          </div>
          <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>

        <p>{success}</p>
      </form>
    </div>


  );
};

export default Login;