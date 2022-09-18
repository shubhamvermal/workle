import classNames from 'classnames';
import React from 'react'
import { IconTypes } from '.'

export const RightConeIcon = (props: IconTypes) => {
    const { className } = props;
    return <svg
        className={classNames('dark:fill-white', className)}
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
        viewBox="0 0 24 24">
        <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
    </svg>
}
