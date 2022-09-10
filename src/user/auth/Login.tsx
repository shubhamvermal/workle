import React from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { Field, Form, reduxForm } from 'redux-form';
import PrimaryInputField from '../../common/Forms/InputFields/PrimaryInputField';
import { Heading4 } from '../../common/Typography/Headings/Heading4';
import { loginUser, authUser } from '../../store/partner/actions/auth';
import { AppDispatch } from '../../store/store';

const FORM_NAME = "auth_form";

type LoginTypes = any

const Login = (props: LoginTypes) => {
    const navigate = useNavigate()
    const dispatch: AppDispatch = useDispatch();
    const { handleSubmit, } = props;

    const handleSignUpForm = async (val: any) => {
        console.log("🚀 ~ file: Login.tsx ~ line 16 ~ handleSignUpForm ~ val", val)
        const response = await dispatch(authUser(val));

        navigate('/verify')
        console.log("🚀 ~ file: Login.tsx ~ line 19 ~ handleSignUpForm ~ response", response)

    }

    return (
        <div className="min-h-screen flex items-center flex-col justify-center">
            <div className={"w-full p-4 bg-white"}>
                <Heading4>Register / signup</Heading4>
                <Form className="mt-8 space-y-3" onSubmit={handleSubmit(handleSignUpForm)}>
                    <div className="-space-y-px rounded-md shadow-sm">
                        <Field
                            label={"Enter mobile number"}
                            name="email"
                            type="tel"
                            showFieldIcon={true}
                            placeholder="Enter mobile number"
                            // handleOnFocus={handleOnFocus}
                            // validate={[emailRequire, email]}
                            component={PrimaryInputField}
                        />
                    </div>
                    <div className="flex items-center justify-between">
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Log in / Sign up
                        </button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default reduxForm({ form: FORM_NAME })(Login);

