import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LocationIcon } from '../../assets/Icons'
import { DefaultCarousel } from '../../common/Carousel/DefaultCarousel'
import SearchField from '../../common/Forms/InputFields/SearchField'

const catagories = [
    {
        title: "Cleaning & Pest Controll",
        professions: [
            { img_url: "https://broomberg.in/images/banner/broomberg-bathroom-cleaning-service.jpg", link: '', id: '1', label: 'pest contorll' },
            { img_url: "https://broomberg.in/images/banner/broomberg-bathroom-cleaning-service.jpg", link: '', id: '2', label: 'pest contorll' },
            { img_url: "https://broomberg.in/images/banner/broomberg-bathroom-cleaning-service.jpg", link: '', id: '3', label: 'pest contorll' },
            { img_url: "https://broomberg.in/images/banner/broomberg-bathroom-cleaning-service.jpg", link: '', id: '4', label: 'pest contorll' },
        ]
    }, {
        title: "Cleaning & Pest Controll",
        professions: [
            { img_url: "https://broomberg.in/images/banner/broomberg-bathroom-cleaning-service.jpg", link: '', id: '1', label: 'pest contorll' },
            { img_url: "https://broomberg.in/images/banner/broomberg-bathroom-cleaning-service.jpg", link: '', id: '2', label: 'pest contorll' },
            { img_url: "https://broomberg.in/images/banner/broomberg-bathroom-cleaning-service.jpg", link: '', id: '3', label: 'pest contorll' },
            { img_url: "https://broomberg.in/images/banner/broomberg-bathroom-cleaning-service.jpg", link: '', id: '4', label: 'pest contorll' },
        ]
    }, 
]

const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            {/* Header */}
            <div className="bg-white p-4 sticky z-[21] top-0">
                <div className={"flex"}>
                    <LocationIcon />
                    <h6>New Delhi, Delhi11038, India</h6>
                </div>
                <SearchField disabled onClick={()=> navigate('/search')}/>
            </div>
            <br />
            {/*  body */}
            <div className="">
                <div>
                    <DefaultCarousel />
                </div>
                <br />
                {catagories.map(({ title, professions }, index) => <div key={index}><div className={"bg-white p-4"}>
                    <div>{title}</div>
                    <div className={"flex flex-wrap gap-2"}>
                        {professions.map(({ img_url, label, id }, index) => <div key={index} onClick={()=> navigate(`/professions/${id}`)} className={"w-[48%]"}>
                            <img loading="lazy" src={img_url} alt="" />
                            <h6>{label}</h6>
                        </div>)}
                    </div>
                </div><br />
                </div>)}
            </div>
        </div>
    )
}

export default Home