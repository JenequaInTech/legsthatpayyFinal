
import { useUserAuth } from "@/context/userAuthContext";
import * as React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { getAuth } from "firebase/auth";  
import {useAuthState} from "react-firebase-hooks/auth";



interface IProtectedRoutesProps {}

const ProtectedRoutes: React.FunctionComponent<IProtectedRoutesProps> = (props) => {
  const auth = getAuth();
  const { user, loading } = useUserAuth(auth); // Assuming useUserAuth returns user and loading state

  const location = useLocation();

  // Render a loading indicator while authentication data is being fetched
  if (loading) {
    return <div>...Loading</div>;
  }

  // Render Outlet if user is authenticated, otherwise redirect to login page
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoutes;