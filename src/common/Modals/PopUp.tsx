import classNames from 'classnames'
import { ReactNode } from 'react'

type PopUpTypes = {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: ()=> void;
}

export const PopUp = (props: PopUpTypes) => {
    const { children, className, isOpen, onClose } = props;

    if(!isOpen) return null;

    return (<>
        <div
            id="popup-modal"
            tabIndex={-1}
            className={classNames("overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full justify-center items-center flex h-full bg-[#00000094]")}
            onClick={(e) => { }}
            aria-modal="true"
            role="dialog"
        >
            <div className={classNames("relative p-4 w-full max-w-md h-full md:h-auto flex items-center justify-center")}>
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button
                        onClick={()=> {
                            console.log("🚀 ~ file: PopUp.tsx ~ line 29 ~ PopUp ~ onClose");
                            onClose && onClose()
                        }}
                        type="button"
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-toggle="popup-modal"
                    >
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-6 text-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
