import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AttachmentIcon, CameraIcon, DotMenu, LeftArrowIcon, SendIcon, SmileIcon } from '../../assets/Icons'

const ChatPage = () => {
    const navigate = useNavigate();
    return (
        <div className="w-full h-full bg-white rounded shadow-2xl">
            {/* header */}
            <nav className=" px-2 w-full h-14 bg-gray-900 rounded-tr rounded-tl flex justify-between items-center">
                <div className="flex justify-center items-center gap-2">
                    <div className={"w-6"} onClick={() => navigate(-1)}>
                        <LeftArrowIcon className={"fill-white"} /></div>
                    <img
                        alt={""}
                        src="https://i.imgur.com/IAgGUYF.jpg"
                        className="rounded-full ml-1 h-12 w-12"
                    />
                    <span className="text-xs font-medium text-gray-300 ml-1">
                        Alex cairo
                    </span>
                </div>
                <div className="flex items-center gap-4">
                    <div className="text-white bg-green-700 px-4 py-1 rounded-lg">Hire.</div>
                    <DotMenu className={"fill-white"} />
                </div>
            </nav>
            {/* body */}
            <div
                className="overflow-auto px-1 py-1"
                style={{ height: "calc(100vh - 120px)" }}
                id="journal-scroll"
            >
                <div className="flex justify-center">
                    <span className="text-gray-500 text-xs pt-4" style={{ fontSize: 8 }}>
                        Call started at 02:33 am
                    </span>
                </div>
                <div className="flex justify-center">
                    <span className="text-gray-500 text-xs" style={{ fontSize: 8 }}>
                        Call ended at 02:33 am
                    </span>
                </div>
                <div className="flex justify-end pt-2 pl-10">
                    <span
                        className="bg-green-900 p-2 h-auto text-gray-200 text-xs font-normal rounded-md items-end flex justify-end "
                        style={{ fontSize: 14 }}
                    >
                        yeah sure, go ahead?
                        <span className="text-gray-400 pl-1" style={{ fontSize: 8 }}>
                            02.30am
                        </span>
                    </span>
                </div>

                <div className="flex items-center pr-10 pt-2">
                    <img
                        alt={""}
                        src="https://i.imgur.com/IAgGUYF.jpg"
                        className="rounded-full shadow-xl"
                        width={24}
                        height={24}
                    />
                    <span
                        className="p-2 rounded-md flex ml-1 h-auto bg-gray-900 text-gray-200 text-xs font-normal items-end"
                        style={{ fontSize: 14 }}
                    >
                        I really had a scary feeling about this, can please advice some
                        tricks to overcome my anxiety?
                        <span className="text-gray-400 pl-1" style={{ fontSize: 8 }}>
                            01:25am
                        </span>
                    </span>
                </div>

            </div>
            {/* footer */}
            <div className="flex justify-between items-center py-0 px-4 fixed bottom-0 w-full bg-[#e9e9e9d4] h-16 gap-4">
                <div className="relative w-full">
                    <SmileIcon className="absolute top-2 left-2 fill-gray-400 h-[18px]" />
                    <input
                        type="text"
                        className={"rounded-full pl-10 pr-12 py-2 focus:outline-none  h-auto placeholder-gray-100 bg-gray-900 text-white w-full text-sm"}
                        placeholder="Type a message..."
                        id="typemsg"
                    />
                    {/* <i className="mdi mdi-paperclip absolute right-8 top-1 transform -rotate-45 text-gray-400" /> */}
                    <AttachmentIcon className={"absolute right-10 top-2 transform -rotate-90 h-5 fill-gray-400"} />
                    <CameraIcon className="absolute right-2 top-2 fill-gray-400 h-5" />
                </div>
                {/* <div className="w-7 h-7 rounded-full bg-blue-300 text-center items-center flex justify-center hover:bg-gray-900 hover:text-white">
                    <i className="mdi mdi-microphone " />
                </div>
                 */}
                <div className="min-w-[40px] min-h-[40px] rounded-full bg-blue-300 text-center items-center flex justify-center">
                    <button
                        className="w-8 h-8 rounded-full text-center items-center flex justify-center focus:outline-none hover:bg-gray-900 hover:text-white"
                        onClick={() => "sendbtn();"}
                    >
                        <SendIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatPage
