import React, { useContext } from 'react';
import { AuthContext } from '../components/SignUp/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
        const {user,loading} = useContext(AuthContext);
        const location =  useLocation();
            console.log(location)
        if(loading){
              return <progress className="progress text-center mt-8 progress-primary w-56" value="70" max="100"></progress>

        }
        if(user){
                return children;
        }

        return  <Navigate to = "/login" state={{from : location}} replace></Navigate>
};

export default PrivateRoute;