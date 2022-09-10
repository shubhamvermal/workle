import React, { useState } from 'react'
import { BurgerMenuIcon, NotificationIcon, TranslateIcon } from '../../assets/Icons'
import { Heading5 } from '../../common/Typography/Headings/Heading5'

const jobs: any = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]

const JobsPage = () => {
    const [jobsList, setJobsList] = useState(jobs)
    return (
        <div className={"bg-white p-4 mt-1 dark:bg-gray-700"}>

            <ul className="divide-y divide-gray-200 dark:divide-gray-700 pb-[100px]">
                {jobsList.map(({ }: any, index: number) => <li key={index} className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                Neil Sims
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                email@windster.com
                            </p>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            $320
                        </div>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}

export default JobsPage


const Nojobs = () => <div
    className={"flex justify-center items-center h-full"}
    style={{ height: 'calc(100vh - 59px)' }}
>
    <Heading5>Welcome, No jobs available now.</Heading5>
</div>