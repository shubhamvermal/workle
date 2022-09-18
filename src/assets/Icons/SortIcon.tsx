import classNames from 'classnames'
import React from 'react'
import { IconTypes } from '.'

export const SortIcon = (props: IconTypes) => {
    const { className } = props
    return (
        <svg
            className={classNames('dark:fill-white', className)}
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 2.3053L19 2.3053" stroke="black" strokeWidth="3" />
            <path d="M6 7.44421L19 7.44421" stroke="black" strokeWidth="3" />
            <path d="M10.9985 12.6937H19.026" stroke="black" strokeWidth="3" />
        </svg>
    )
}
