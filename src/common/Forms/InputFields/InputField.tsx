import React from 'react'
import classNames from 'classnames'

type InputFieldTypes = {
    label?: string;
    placeholder?: string;
    onChange?: (e: any) => any;
    disabled?: boolean;
    error?: boolean;
    errorMessage?: string;
    success?: boolean;
    successMessage?: string;
    type?: "text" | "tel" | "url" | "number" | "email" | "password" | "checkbox" | "submit" | "date";
    name?: string;
    required?: boolean;
    labelClass?: string;
    inputClass?: string;
    input?: any;
}

const InputField = (props: InputFieldTypes) => {
    const {
        label,
        placeholder,
        onChange,
        disabled,
        error,
        errorMessage,
        success,
        successMessage,
        type,
        name,
        required,
        labelClass,
        inputClass,
        input,
        ...rest
    } = props
    // console.log("🚀 ~ file: InputField.tsx ~ line 36 ~ InputField ~ props", props)
    
    return (
        <>
            <label
                htmlFor="first_name"
                className={classNames("block mb-1 text-xs font-medium text-gray-900 dark:text-gray-300",
                    { "text-green-700 dark:text-green-500": success },
                    { "text-red-700 dark:text-red-500": error },
                    labelClass)}
            >
                {label}
            </label>
            <input
                name={name}
                className={classNames("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none",
                    { "border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-green-500": success },
                    { "border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500": error },
                    inputClass)}
                type={type}
                placeholder={placeholder}
                required={required}
                onChange={onChange}
                disabled={disabled}
                autoComplete={'off'}
                {...input}
            />
            <p className={classNames("mt-2 text-sm ", { "text-green-600 dark:text-green-500": success }, { "text-red-600 dark:text-red-500": error })}>
                {error && errorMessage}
                {success && successMessage}
            </p>
        </>
    )
}

export default InputField
