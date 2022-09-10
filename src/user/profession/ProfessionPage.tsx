import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftArrowIcon } from '../../assets/Icons'
import { Heading6 } from '../../common/Typography/Headings/Heading6'

const profession = [
    {id: '1', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '2', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '3', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '4', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '5', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '6', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '7', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '8', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '9', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '1', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '2', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '3', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '4', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '5', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '6', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '7', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '8', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '9', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '1', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '2', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '3', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '4', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '5', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '6', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '7', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '8', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '9', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '1', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '2', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '3', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '4', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '5', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '6', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '7', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '8', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
    {id: '9', img_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkOz29qz2zSgNcH2eQxlv1ITBLsl1AfjXoFQ&usqp=CAU', label: 'some work'},
]

const ProfessionPage = () => {
const [professionState, setProfessionState] = useState(profession)
const navigate = useNavigate()

    return (
        <div>
            {/* header */}
            <div className={"flex items-center p-4 gap-4 bg-white sticky top-0"}>
                <div onClick={()=>navigate('/home')}><LeftArrowIcon className={"h-7 w-7"}/></div>
                <Heading6>Cleaning & Pest Control</Heading6>
            </div>
            <br/>
            {/* body */}
            <div className={"bg-white p-4 flex flex-wrap gap-4 mt-[1px]"}>
                {professionState.map(({img_url, label}, index)=><div
                onClick={()=> navigate('partner')}
                key={index}
                className={"w-24 flex flex-col item-center"}>
                <img loading="lazy" src={img_url} alt="" />
                <h6>{label}</h6>
                </div>)}
            </div>
            
        </div>
    )
}

export default ProfessionPage
