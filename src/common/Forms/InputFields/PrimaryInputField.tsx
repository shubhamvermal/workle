import React from 'react'

type PrimaryInputFieldType = any;

const PrimaryInputField = (props: PrimaryInputFieldType) => {
    const {
        input,
        id,
        icon,
        type,
        label,
        disabled,
        placeholder,
        handleOnFocus,
        handleOnBlur,
        showFieldIcon = false,
        className,
        marginBottom = true,
        meta,
        errResp,
        height = 14,
        wrapperClass
      } = props
        // console.log("🚀 ~ file: PrimaryInputField.tsx ~ line 24 ~ PrimaryInputField ~ meta", meta)
      
    return (
        <div>
            <label htmlFor="email-address" className="sr-only">
                {label}
            </label>
            <input
                id="email-address"
                required
                placeholder={placeholder}
                // name={name}
                type={type}
                disabled={disabled}
                className="relative block w-full appearance-none rounded-none rounded-t-md rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                {...input}
            />
        </div>
    )
}

export default PrimaryInputField
