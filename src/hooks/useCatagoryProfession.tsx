import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCatagoryList } from '../store/common/actions/catagory'
import { getProfessionList } from '../store/common/actions/profession';

const useCatagoryProfession = () => {
    const dispatch = useDispatch();
    const [catagoryList, setCatagoryList] = useState([])
    const [  professionList, setProfessionList] = useState([])

    const getCatagory = async() =>{
        const res = await dispatch(getCatagoryList())
        if(res.payload.success){
            setCatagoryList(res.payload.data)
        }
    }
    const getProfession = async() =>{
        const res = await dispatch(getProfessionList())
        if(res.payload.success){
            setProfessionList(res.payload.data)
        }
    }

    useEffect(() => {
        catagoryList.length === 0 && getCatagory()
        professionList.length === 0 && getProfession()
        // eslint-disable-next-line
    },[])

    return { catagoryList, professionList };
}

export default useCatagoryProfession
