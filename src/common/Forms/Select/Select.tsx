import React from 'react'
import classNames from 'classnames'

type SelectTypes = any

const Select = (props: SelectTypes) => {
    const { options, selected, disabled, onChange, labelClass, label,
        error,
        success,
        input,
    } = props
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

            <select
                disabled={disabled}
                onChange={onChange}
                className="block p-2 mb-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...input}
            >
                <option disabled selected>Select an option</option>
                {options.map(({ value, label }: any) => <option selected={value === selected} value={value}>{label}</option>)}
            </select>
        </>
    )
}

export default Select
