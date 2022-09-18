import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { BurgerMenuIcon, NotificationIcon, TranslateIcon } from '../../assets/Icons'
import { RightConeIcon } from '../../assets/Icons/RightConeIcon'
import { Heading5 } from '../../common/Typography/Headings/Heading5'
import { Heading6 } from '../../common/Typography/Headings/Heading6'
import Paragraph from '../../common/Typography/Paragraphs/Paragraph'

const detailsList = [
    { title: "Personal Information", subtitle: "Email, projects, Profile Picture", Icon: RightConeIcon, link: '/partner/info' },
    { title: "Onboaeding documents", subtitle: "Pan, address proof, documents loan", Icon: RightConeIcon, link: '/partner/documents' },
    { title: "Professional Information", subtitle: "video about how to work with us", Icon: RightConeIcon, link: '/partner/professionalInfo' },
    { title: "Projects Photos", subtitle: "Add your awards and certificates here", Icon: RightConeIcon, link: '/partner/projects' },
    { title: "Verify Vacination status", subtitle: " import for health safity", Icon: RightConeIcon, link: '' },
]

const PartnerProfile = () => {
    const navigate = useNavigate();
    return (
        <div className={"bg-white p-4 mt-1 dark:bg-gray-700"}>
            <Heading5>Complete training and profile</Heading5>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700 mt-2">
                {detailsList.map(({ title, subtitle, Icon, link }, index) => <li onClick={()=>navigate(link)} key={index} className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                            <Heading6 className="!font-medium text-base">{title}</Heading6>
                            <Paragraph
                                className="text-sm text-gray-500 truncate dark:text-gray-400"
                            >
                                {subtitle}
                            </Paragraph>
                        </div>
                        <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                            <Icon />
                        </div>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}

export default PartnerProfile
