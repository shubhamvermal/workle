import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Field, Form, reduxForm } from 'redux-form';
import { LeftArrowIcon } from '../../assets/Icons'
import ImageUploader from '../../common/Forms/FileInput/ImageUploader'
import InputField from '../../common/Forms/InputFields/InputField'
import { Heading4 } from '../../common/Typography/Headings/Heading4'
import { Heading6 } from '../../common/Typography/Headings/Heading6'
import Paragraph from '../../common/Typography/Paragraphs/Paragraph'
import { addPartnerDocuments, getPartnerDocuments } from '../../store/partner/actions/partnerDocuments';


const FORM_NAME = 'partner_document'



const PartnerDocuments = (props: any) => {
    const { handleSubmit, initialize } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [previouslyAdded, setPreviouslyAdded] = useState(false)


    useEffect(() => {
        (async () => {
            const res = await dispatch(getPartnerDocuments())
            if (res.payload.success) {
                initialize(res.payload.data)
                setPreviouslyAdded(true)
            }
        })()
        //eslint-disable-next-line
    }, [])


    const handleSignUpForm = async (values: any) => {
        console.log("🚀 ~ file: PartnerInfo.tsx ~ line 16 ~ handleSignUpForm ~ values", values)
        const response = await dispatch(addPartnerDocuments(values));
        console.log("🚀 ~ file: PartnerInfo.tsx ~ line 24 ~ handleSignUpForm ~ response", response)
        if (response.payload.success){
            navigate('/partner/profile')
        }
    }

    return (
        <>
            {/* header */}
            <div className="bg-white p-4 dark:bg-gray-700 sticky top-0">
                <div onClick={() => navigate(-1)}>
                    <LeftArrowIcon className={"fill-blue-400"} />
                </div>
                <div className="mt-4">
                    <Heading4>Documents</Heading4>
                    <Paragraph>Your Documents</Paragraph>
                </div>
            </div>
            <hr />
            <Form className="mt-8 space-y-3" onSubmit={handleSubmit(handleSignUpForm)}>
                {/* body */}
                <div className={"p-4"}>
                    <div>
                        <Heading6 className="!font-medium text-base">Enter Aadhar number</Heading6>
                        {/* <InputField placeholder="1234-5678-9123" /> */}
                        <Field
                            type={'text'}
                            placeholder={"1234-5678-9123"}
                            name={'aadharNumber'}
                            component={InputField}
                        />
                        <div className={"flex gap-4"}>
                            <ImageUploader label={"Front Side"} />
                            <ImageUploader label={"Back Side"} />
                        </div>
                    </div>
                    <br />
                    <div>
                        <Heading6 className="!font-medium text-base">Enter Pan number</Heading6>
                        {/* <InputField placeholder="ABCDE1234F" /> */}
                        <Field
                            type={'text'}
                            placeholder={"ABCDE1234F"}
                            name={'panNumber'}
                            component={InputField}
                        />
                        <div className={"flex gap-4"}>
                            <ImageUploader label={"Front Side"} />
                            {/* <ImageUploader label={"Back Side"} /> */}
                        </div>
                    </div>
                </div>
                <div className={"h-12 flex justify-center items-center p-4 bg-white dark:bg-gray-700"}>
                    <button type={"submit"} className={"bg-blue-800 rounded-2xl text-white px-8 py-2 w-full"}>{
                        previouslyAdded ?
                            "update details" :
                            "submit details"
                    }</button>
                </div>
            </Form>

        </>
    )
}

export default reduxForm({ form: FORM_NAME })(PartnerDocuments);