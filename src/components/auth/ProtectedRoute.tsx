import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps{
    children:ReactNode
    redirectPath:string;
    isAllowed:boolean;
    data?: unknown;
}

const ProtectedRoute = ({children , redirectPath, isAllowed, data}:IProps) =>{
    if (!isAllowed) return <Navigate to={redirectPath} replace state={data}/>
    
    return children;
}

export default ProtectedRoute;