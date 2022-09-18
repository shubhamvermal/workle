import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LeftArrowIcon, SortIcon, StarIcon } from '../../assets/Icons';
import SearchField from '../../common/Forms/InputFields/SearchField';
import { Heading6 } from '../../common/Typography/Headings/Heading6'

const workers = [
    { id: '1', name: 'suresh', profession: 'skin care expert', rating: 3.8, userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yewVzACTb6NmKCvLuiNGywvjedur5SEf3w&usqp=CAU' },
    { id: '1', name: 'monu', profession: 'skin care expert', rating: 3.8, userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yewVzACTb6NmKCvLuiNGywvjedur5SEf3w&usqp=CAU' },
    { id: '1', name: 'shubham', profession: 'skin care expert', rating: 3.8, userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yewVzACTb6NmKCvLuiNGywvjedur5SEf3w&usqp=CAU' },
    { id: '1', name: 'goru', profession: 'skin care expert', rating: 3.8, userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yewVzACTb6NmKCvLuiNGywvjedur5SEf3w&usqp=CAU' },
    { id: '1', name: 'gourav', profession: 'skin care expert', rating: 3.8, userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yewVzACTb6NmKCvLuiNGywvjedur5SEf3w&usqp=CAU' },
    { id: '1', name: 'test', profession: 'skin care expert', rating: 3.8, userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yewVzACTb6NmKCvLuiNGywvjedur5SEf3w&usqp=CAU' },
    { id: '1', name: 'user', profession: 'skin care expert', rating: 3.8, userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yewVzACTb6NmKCvLuiNGywvjedur5SEf3w&usqp=CAU' },
    { id: '1', name: 'user', profession: 'skin care expert', rating: 3.8, userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yewVzACTb6NmKCvLuiNGywvjedur5SEf3w&usqp=CAU' },
    { id: '1', name: 'user', profession: 'skin care expert', rating: 3.8, userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yewVzACTb6NmKCvLuiNGywvjedur5SEf3w&usqp=CAU' },
    { id: '1', name: 'user', profession: 'skin care expert', rating: 3.8, userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yewVzACTb6NmKCvLuiNGywvjedur5SEf3w&usqp=CAU' },
    { id: '1', name: 'user', profession: 'skin care expert', rating: 3.8, userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yewVzACTb6NmKCvLuiNGywvjedur5SEf3w&usqp=CAU' },
    { id: '1', name: 'user', profession: 'skin care expert', rating: 3.8, userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yewVzACTb6NmKCvLuiNGywvjedur5SEf3w&usqp=CAU' },
    { id: '1', name: 'user', profession: 'skin care expert', rating: 3.8, userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yewVzACTb6NmKCvLuiNGywvjedur5SEf3w&usqp=CAU' },
    { id: '1', name: 'user', profession: 'skin care expert', rating: 3.8, userImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-yewVzACTb6NmKCvLuiNGywvjedur5SEf3w&usqp=CAU' },
]

const WorkerList = () => {
    const navigate = useNavigate();
    const [workersList, setWorkersList] = useState(workers)
    
    useEffect(()=>{
        setWorkersList(workers)
    }, [])
    return (
        <div>
            <div className={"flex items-center p-4 gap-4 bg-white sticky top-0"}>
                <div onClick={() => navigate(`/professions/${'2'}`)}><LeftArrowIcon className={"h-7 w-7"} /></div>
                <Heading6>Cleaning & Pest Control</Heading6>
            </div>
            {/* <br /> */}
            <div className={"p-4 bg-white mt-[2px]"}>
                <div className={"flex items-center gap-4 mb-4  sticky top-0 pt-2"}>
                    <SearchField/>
                    <SortIcon/>
                </div>
                <div className={"flex flex-col gap-4"}>
                    {workersList.map(({ id, name, profession, rating, userImg}, index) => <div
                    key={index}
                    className={"flex w-full h-[72px] bg-[#F8F8F8] rounded-xl gap-2"}
                    onClick={()=>navigate(`${id}`)}
                    >
                        <img className={"h-full rounded-xl"} src={userImg} alt="" />
                        <div>
                            <Heading6>{name}</Heading6>
                            <Heading6>{profession}</Heading6>
                            <div className={"flex items-center"}>
                                <StarIcon className={"h-5"} />
                                <Heading6>{rating}</Heading6>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default WorkerList
