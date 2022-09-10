import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
// component should be lazy import
import PartnerDashboard from '../partner/dashboad/PartnerDashboard';
import PartnerInfo from '../partner/partnerInfo/PartnerInfo';
import PartnerProjects from '../partner/partnerProjects/PartnerProjects';
import PartnerDocuments from '../partner/partnerDocuments/PartnerDocuments';
import ProfessionalInfo from '../partner/professionalInfo/ProfessionalInfo';
import PartnerChat from '../partner/chat/PartnerChat';
import PartnerLogin from '../partner/auth/PartnerLogin';
import PartnerOTPField from '../partner/auth/PartnerOTPField';
import { checkPartnerAvailbility } from '../store/partner/actions/auth';
import CallPage from '../componets/chat&Call/CallPage';
// import PartnerRegister from '../partner/auth/PartnerRegister';
// import PartnerForgotPass from '../partner/auth/PartnerForgotPass';

const publicRoutes = [
    // user auth
    { path: '/partner/auth', Component: PartnerLogin },
    { path: '/partner/verify', Component: PartnerOTPField },
]
const protectedRoutes = [
    // user auth
    // { path: '/partner/auth', Component: PartnerLogin },
    // { path: '/partner/verify', Component: PartnerOTPField },
    // // { path: '/partner/register', Component: PartnerRegister },
    // { path: '/partner/forgot', Component: PartnerForgotPass },

    { path: '/partner/*', Component: PartnerDashboard },
    { path: '/partner/chats/:userId', Component: PartnerChat },
    { path: '/partner/call/:userId', Component: CallPage },
    { path: '/partner/info', Component: PartnerInfo },
    { path: '/partner/documents', Component: PartnerDocuments },
    { path: '/partner/professionalInfo', Component: ProfessionalInfo },
    { path: '/partner/projects', Component: PartnerProjects },
    { path: '*', Component: () => <div>404</div> }
]



const PartnerRoutes = () => {
    const dispatch = useDispatch();
    const { isPartnerLoggedIn, loading } = useSelector((state: any) => state.auth);

    useEffect(() => {
        (async () => {
            await dispatch(checkPartnerAvailbility());
        })();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <div className="w-screen h-screen flex items-center justify-center bg-[#e2e2e2] text-3xl font-extrabold">LOADING...</div>
    }

    return (
        <Routes>
            {publicRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)}
            {protectedRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={
                isPartnerLoggedIn ?
                    <Component /> :
                    <Navigate to="/partner/auth" />
            } />)}
        </Routes>
    )
}

export default PartnerRoutes