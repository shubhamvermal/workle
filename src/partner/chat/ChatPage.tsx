import React from 'react'
import { useNavigate } from 'react-router-dom';

const chatList = [
    { id: "1", userName: "Rizwan shah", img_url: "https://flowbite.com/docs/images/people/profile-picture-1.jpg", email: "email@windster.com" },
    { id: "2", userName: "Deepanshu", img_url: "https://flowbite.com/docs/images/people/profile-picture-2.jpg", email: "email@windster.com" },
    { id: "3", userName: "rahul", img_url: "https://flowbite.com/docs/images/people/profile-picture-3.jpg", email: "email@windster.com" },
    { id: "4", userName: "priyanshu", img_url: "https://flowbite.com/docs/images/people/profile-picture-4.jpg", email: "email@windster.com" },
    { id: "5", userName: "vikas", img_url: "https://flowbite.com/docs/images/people/profile-picture-5.jpg", email: "email@windster.com" },
    { id: "6", userName: "shallu", img_url: "https://flowbite.com/docs/images/people/profile-picture-6.jpg", email: "email@windster.com" },
    { id: "7", userName: "Prateek", img_url: "https://flowbite.com/docs/images/people/profile-picture-1.jpg", email: "email@windster.com" },
    { id: "8", userName: "Shubham verma", img_url: "https://flowbite.com/docs/images/people/profile-picture-2.jpg", email: "email@windster.com" },
    { id: "9", userName: "Monu verma", img_url: "https://flowbite.com/docs/images/people/profile-picture-3.jpg", email: "email@windster.com" },
    { id: "10", userName: "Manubhav Batra", img_url: "https://flowbite.com/docs/images/people/profile-picture-4.jpg", email: "email@windster.com" },
    { id: "11", userName: "vivek", img_url: "https://flowbite.com/docs/images/people/profile-picture-5.jpg", email: "email@windster.com" },
]

const ChatPage = () => {
    const navigate = useNavigate();

    return (<div className="bg-white p-4 mt-1 dark:bg-gray-700">
        <ul className="divide-y divide-gray-200 dark:divide-gray-600 pb-[100px]">
            {chatList.map(({ userName, email, img_url, id }, index) => <li key={index} onClick={()=> navigate(`/partner/chats/${id}`)} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img
                            className="w-8 h-8 rounded-full"
                            src={img_url}
                            alt=""
                        />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                            {userName}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                            {email}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white" />
                </div>
            </li>)}
        </ul>
    </div>)
}

export default ChatPage
