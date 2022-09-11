import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Field, Form, reduxForm } from 'redux-form';
import { LeftArrowIcon } from '../../assets/Icons';
import ImageUploader from '../../common/Forms/FileInput/ImageUploader';
import InputField from '../../common/Forms/InputFields/InputField';
import { Heading4 } from '../../common/Typography/Headings/Heading4';
import Paragraph from '../../common/Typography/Paragraphs/Paragraph';
import useImagePreviewer from '../../hooks/useImagePreviewer';
import { addProfessionalDetails, getProfessionalDetails } from '../../store/partner/actions/professionalDetails';

const FORM_NAME = 'professional_details'

const certificates: any = [
    { id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU" },
    { id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU" },
    { id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU" },
    { id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU" },
    { id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU" },
    { id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU" },
    { id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU" },
    { id: "", img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShnRn_JvPEdXHYfOFApPxEc0mtWND7CWy0OA&usqp=CAU" },
]


const ProfessionalInfo = (props: any) => {
    const { handleSubmit, initialize } = props;
    const [setImgPrev, imagePreview]: any = useImagePreviewer()
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [previouslyAdded, setPreviouslyAdded] = useState(false)


    useEffect(() => {
        (async () => {
            const res = await dispatch(getProfessionalDetails())
            if (res.payload.success) {
                initialize(res.payload.data)
                setPreviouslyAdded(true)
            }
        })()
    }, [])


    const handleSignUpForm = async (values: any) => {
        console.log("🚀 ~ file: PartnerInfo.tsx ~ line 16 ~ handleSignUpForm ~ values", values)
        const response = await dispatch(addProfessionalDetails(values));
        console.log("🚀 ~ file: PartnerInfo.tsx ~ line 24 ~ handleSignUpForm ~ response", response)
        if (response.payload.success) {
            navigate('/partner/profile')
        }
    }


    return (
        <>
            {imagePreview}
            {/* header */}
            <div className="bg-white p-4 dark:bg-gray-700">
                <div onClick={() => navigate(-1)}>
                    <LeftArrowIcon className={"fill-blue-400"} />
                </div>
                <div className="mt-4">
                    <Heading4>Professional Profile</Heading4>
                    <Paragraph>Enter your bla bla details</Paragraph>
                </div>
            </div>

            <Form className="mt-8 space-y-3" onSubmit={handleSubmit(handleSignUpForm)}>
                {/*  body */}
                <div className="p-4">
                    <div>
                        <Field
                            component={InputField}
                            type={'text'}
                            label={'Username'}
                            placeholder={'John'}
                            name={'userName'}
                        />
                    </div>

                    <div className="flex gap-4 justify-between">
                        <div>
                            <Field
                                component={InputField}
                                type={'text'}
                                label={'phone number'}
                                placeholder={'+91 9876543210'}
                                name={'phone'}
                            />
                        </div>
                        <div>
                            <Field
                                component={InputField}
                                type={'date'}
                                label={'Date of Birth'}
                                placeholder={'20-01-1999'}
                                name={'DOB'}
                            />
                        </div>
                    </div>

                    <div>
                        <Field
                            component={InputField}
                            type={'text'}
                            label={'email'}
                            placeholder={'john@gmail.com'}
                            name={'email'}
                        />
                    </div>
                    <div className="flex gap-4 justify-between">
                        <div>
                            <Field
                                component={InputField}
                                type={'text'}
                                label={'catagory'}
                                placeholder={'Choose Catagory'}
                                name={'catagory'}
                            />
                        </div>
                        <div>
                            <Field
                                component={InputField}
                                type={'tel'}
                                label={'work'}
                                placeholder={'Choose Work'}
                                name={'profession'}
                            />
                        </div>
                    </div>
                    <div>
                        <Field
                            component={InputField}
                            type={'text'}
                            label={'Work Experience'}
                            placeholder={'House/flatt no, building name'}
                            name={'experience'}
                        />
                    </div>
                    <div>
                        <Field
                            component={InputField}
                            type={'text'}
                            label={'Graduate certificate'}
                            placeholder={'Enter'}
                            name={'education'}
                        />
                    </div>
                    <div className="flex gap-2 overflow-auto p-3">
                        <ImageUploader className={"!min-w-[120px] !h-[100px]"} label={"Add Photo"} />
                        {certificates.map(({ id, img_url }: any, index: number) => <img onClick={setImgPrev.bind(this)} className={"!min-w-[120px] !h-[100px]"} src={img_url} alt={""} />)}
                    </div>
                </div>

                {/* footer */}
                <div className={"h-12 flex justify-center items-center p-4 bg-white dark:bg-gray-700"}>
                    <button className={"bg-blue-800 rounded-2xl text-white px-8 py-2 w-full"}>submit details</button>
                </div>
            </Form>
        </>
    )
}

export default reduxForm({ form: FORM_NAME })(ProfessionalInfo);



// name
// catagory
// work
// experience
// phone number
// alternate number
// email
// highest schooling / degree / diploma certificate images