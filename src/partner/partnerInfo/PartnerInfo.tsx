import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Field, Form, reduxForm } from 'redux-form'
import { LeftArrowIcon } from '../../assets/Icons'
import ImageUploader from '../../common/Forms/FileInput/ImageUploader'
import InputField from '../../common/Forms/InputFields/InputField'
import { Heading4 } from '../../common/Typography/Headings/Heading4'
import Paragraph from '../../common/Typography/Paragraphs/Paragraph'
import { verifyOtp } from '../../store/partner/actions/auth'
import { addPartnerPersonalDetails } from '../../store/partner/actions/personalDetails'

const FORM_NAME = 'partner_info'

const PartnerInfo = (props: any) => {
    const { handleSubmit } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSignUpForm = async (values: any) => {
        console.log("🚀 ~ file: PartnerInfo.tsx ~ line 16 ~ handleSignUpForm ~ values", values)
        const response = await dispatch(addPartnerPersonalDetails(values));
        console.log("🚀 ~ file: PartnerInfo.tsx ~ line 24 ~ handleSignUpForm ~ response", response)
        // if (response.payload.success){
        //     navigate('/partner/profile')
        // }
    }

    return (
        <div>
            {/* header */}
            <div className="bg-white p-4 dark:bg-gray-700">
                <div onClick={() => navigate(-1)}>
                    <LeftArrowIcon className={"fill-blue-400"} />
                </div>
                <div className="mt-4">
                    <Heading4>Profile</Heading4>
                    <Paragraph>Enter some bla bla details</Paragraph>
                </div>
            </div>

            {/*  body */}
            <Form className="mt-8 space-y-3" onSubmit={handleSubmit(handleSignUpForm)}>
                <div className="p-4">


                    <div className="flex gap-4 justify-between">
                        <Field
                            type={'file'}
                            label={'Add Photo'}
                            // placeholder={'Enter'}
                            on
                            name={'profile'}
                            component={ImageUploader}
                        />

                        {/* <ImageUploader label={"Add Photo"} /> */}
                        <div>
                            <div>
                                <Field
                                    type={'text'}
                                    label={'FIRST NAME'}
                                    placeholder={'Enter'}
                                    name={'firstName'}
                                    component={InputField}
                                />
                            </div>
                            <div>
                                <Field
                                    component={InputField}
                                    type={'text'}
                                    label={'LAST NAME'}
                                    placeholder={'Enter'}
                                    name={'lastName'}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <Field
                            component={InputField}
                            type={'tel'}
                            label={'ENTER MOBILE'}
                            placeholder={'Enter mobile number'}
                            name={'phone'}
                        />
                    </div>
                    <div>
                        <Field
                            component={InputField}
                            type={'text'}
                            label={'ADDRESS LINE 1'}
                            placeholder={'House/flatt no, building name'}
                            name={'address'}
                        />
                    </div>
                    <div>
                        <Field
                            component={InputField}
                            type={'text'}
                            label={'ADDRESS LINE 2'}
                            placeholder={'Block no., Area name'}
                            name={'address2'}
                        />
                    </div>
                    <div>
                        <Field
                            component={InputField}
                            type={'text'}
                            label={'PINCODE'}
                            placeholder={'Enter'}
                            name={'pinCode'}
                        />
                    </div>
                    <div className="flex gap-4">
                        <div>
                            <Field
                                component={InputField}
                                type={'text'}
                                label={'STATE'}
                                placeholder={'Haryana'}
                                name={'state'}
                            />
                        </div>
                        <div>
                            <Field
                                component={InputField}
                                type={'text'}
                                label={'CITY'}
                                placeholder={'Enter'}
                                name={'city'}
                            />
                        </div>
                    </div>
                </div>
                {/* footer */}
                <div className={"h-12 flex justify-center items-center p-4 bg-white dark:bg-gray-700"}>
                    <button type={"submit"} className={"bg-blue-800 rounded-2xl text-white px-8 py-2 w-full"}>submit details</button>
                </div>
            </Form>

        </div>
    )
}

export default reduxForm({ form: FORM_NAME })(PartnerInfo);
