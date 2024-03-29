// import React from 'react';
// import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
// import Spinner from '../Components/Spinner';
// import { AuthContext } from '../Context/AuthProvider';
// import useAdmin from '../Hooks/useAdmin';

import { useSelector } from 'react-redux';
import { selectIsAdmin } from '../Redux/Reducer';

const AdminRoute = ({ children }) => {
    const isAdmin = useSelector(state => selectIsAdmin(state));

    // const {user, loading} = useContext(AuthContext);
    // const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    // const location = useLocation();
    // console.log(isAdmin);
    // if(loading || isAdminLoading){
    //     return <Spinner></Spinner>;
    // }

    if (isAdmin) {
        return children;
    }
    // return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    return <Navigate to='/login'></Navigate>;
};

export default AdminRoute;