import {  Route, Routes } from 'react-router-dom';
// component should be lazy import
import Home from "../user/home/Home";
import AllComponent from "../user/allComponent/AllComponent";
import ProfessionPage from "../user/profession/ProfessionPage";
import WorkerList from "../user/workerList/WorkerList";
import WorkerProfile from "../user/workerProfile/WorkerProfile";
import SearchPage from "../user/searchPage/SearchPage";
import CallPage from '../componets/chat&Call/CallPage';
import Login from '../user/auth/Login';
import OTPField from '../user/auth/OTPField';
import UserChat from '../user/chat/UserChat';
// import Register from '../user/auth/Register';
// import ForgotPass from '../user/auth/ForgotPass';



const userRoutes: any = [
    { path: '/', Component: AllComponent },
    // user auth
    { path: '/auth', Component: Login },
    { path: '/verify', Component: OTPField },
    // 
    { path: '/home', Component: Home },
    { path: '/professions/:professionId', Component: ProfessionPage },
    { path: '/professions/:professionId/partner', Component: WorkerList },
    { path: '/professions/:professionId/partner/:partnerId', Component: WorkerProfile },
    { path: '/partner/:partnerId/chat', Component: UserChat },
    { path: '/partner/:partnerId/call', Component: CallPage },
    { path: '/search', Component: SearchPage },
    { path: '*', Component: () => <div>404</div> }
]

const UserRoutes = () => {
    return (
        <Routes>
            {userRoutes.length > 0 && userRoutes.map(({ path, Component }: any, index: number) => <Route key={index} path={path} element={<Component />} />)}
        </Routes>

    )
}

export default UserRoutes
