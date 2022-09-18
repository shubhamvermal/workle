import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { BurgerMenuIcon, MessageIcon, MoonIcon, SunIcon, NotificationIcon, TaskIcon, UserIcon } from '../../assets/Icons'
import LanguageSelector from '../../componets/LanguageSelector'
import { toggleTheme } from '../../helpers/themeFunc'
import ChatsPage from '../chat/ChatPage'
import JobsPage from '../jobs/JobsPage'
import PartnerProfile from '../profile/PartnerProfile'

const dashboardRoutes = [
    { path: 'profile', Component: PartnerProfile },
    { path: 'jobs', Component: JobsPage },
    { path: 'chats', Component: ChatsPage },
]

const dashboardTabs = [
    { Icon: UserIcon, link: 'profile' },
    { Icon: TaskIcon, link: 'jobs' },
    { Icon: MessageIcon, link: 'chats' },
]

const PartnerDashboard = () => {
    const navigate = useNavigate();
    return (
        <>
        
            <div className={"flex justify-between p-4 bg-white sticky top-0 dark:bg-gray-700"}>
                <div>
                    <BurgerMenuIcon />
                </div>
                <div className={"flex gap-4"}>
                    <div onClick={toggleTheme}>
                        <SunIcon className={"hidden dark:block"} />
                        <MoonIcon className={"block dark:hidden"} />
                    </div>
                    <LanguageSelector/>
                    <NotificationIcon />
                </div>
            </div>
            <Routes>
                {dashboardRoutes.map(({ path, Component }, index) => <Route key={index} path={path} element={<Component />} />)}
            </Routes>
            <div className={"h-16 flex fixed bottom-0 w-full bg-white dark:bg-gray-700 border-t-2"}>
                {dashboardTabs.map(({ link, Icon }, index) => <div
                    key={index}
                    className={"flex w-full items-center justify-center"}
                    onClick={() => navigate(link)}>
                    <Icon />
                </div>)}
            </div>
        </>
    )
}

export default PartnerDashboard

