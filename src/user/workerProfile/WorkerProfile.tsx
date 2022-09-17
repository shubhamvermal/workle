import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { BookmarkIcon, LeftArrowIcon, MessageIcon, PhoneIcon, SortIcon, StarIcon } from '../../assets/Icons'
import { DefaultCarousel } from '../../common/Carousel/DefaultCarousel'
import { Heading6 } from '../../common/Typography/Headings/Heading6'
import Paragraph from '../../common/Typography/Paragraphs/Paragraph'


const review = [
    { name: "shubham verma", date: '22/01/2020', rating: 4.5, review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
    { name: "shubham verma", date: '22/01/2020', rating: 4.5, review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
    { name: "shubham verma", date: '22/01/2020', rating: 4.5, review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
    { name: "shubham verma", date: '22/01/2020', rating: 4.5, review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." }
]
const WorkerProfile = () => {
    const [reviewList, setReviewList] = useState<any[]>([])
    // const history  = useHistory();
    const navigate = useNavigate();

    useEffect(() => {
        setReviewList(review)
    }, [])

    return (
        <>
            {/* Header */}
            <div className={"flex items-center p-4 gap-4 bg-white sticky top-0"}>
                <div onClick={() => navigate(-1)}><LeftArrowIcon className={"h-7 w-7"} /></div>
                <Heading6>Cleaning & Pest Control</Heading6>
                <BookmarkIcon />
            </div>

            {/* body */}
            <div className={"mt-[2px]"}>
                {/* details */}
                <div className={"p-4 bg-white"}>
                    <div className={"flex gap-4"}>
                        <img className="w-32 h-32 rounded-xl" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSga0ZLFmGU0r4EcnP8Y-Mso4OklGh2o542zg&usqp=CAU"} alt={""} />
                        <div>
                            <Heading6>Suresh verma</Heading6>
                            <Heading6>Skin & Hair care expert</Heading6>
                            <div>EXP: 10+ Year</div>
                            <div className={"flex gap-1"}>
                                <StarIcon className={"h-5"} />
                                <span>4.76 (978k)</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Heading6>About:-</Heading6>
                        <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, .</Paragraph>
                    </div>
                    <br />
                    <div className={"flex gap-4"}>
                        <div onClick={()=> navigate('/partner/1/chat')} className={"h-12 w-full bg-red-400 flex items-center justify-center rounded-xl gap-2"}>Message Me <MessageIcon/></div>
                        <div onClick={()=> navigate('/partner/2/call')} className={"h-12 w-full bg-red-400 flex items-center justify-center rounded-xl gap-2"}>Call Me<PhoneIcon/></div>
                    </div>
                </div>
                <br />
                {/* projects */}
                <div className={"bg-white p-4"}>
                    <Heading6>Projects:-</Heading6>
                    <DefaultCarousel />
                </div>
                <br />

                {/* reviewList */}
                <div className={"p-4 bg-white"}>
                    <div className={"flex justify-between"}>
                        <Heading6>Review:-</Heading6>
                        <SortIcon />
                    </div>
                    <div className={"flex flex-col gap-4"}>
                        {reviewList.map(({ name, date, review, rating }, index) => <div key={index}>
                            <div className={"flex justify-between"}>
                                <Heading6>{name}</Heading6>
                                <Heading6>{date}</Heading6>
                            </div>
                            <div className={"flex"}>
                                <Heading6>Rating:</Heading6>
                                <StarIcon className="h-5" />
                                <StarIcon className="h-5" />
                                <StarIcon className="h-5" />
                                <StarIcon className="h-5" />
                            </div>

                            <div>
                                <Heading6>Review: </Heading6>
                                <div className={"p-2"}>
                                    <Paragraph>{review}</Paragraph>
                                    <div className={"flex gap-2"}>
                                        <img className={"h-28 rounded-xl"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNoJTrlIUig_hZBqXU8r0NHuTAonHi2G3ccA&usqp=CAU" alt={""} />
                                        <img className={"h-28 rounded-xl"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBzpRW0Pb3INhjrC_4kkPdTyap20ohYi0ZA&usqp=CAU" alt={""} />
                                    </div>
                                </div>
                            </div>
                        </div>)}
                    </div>

                </div>
            </div>

        </>
    )
}

export default WorkerProfile
