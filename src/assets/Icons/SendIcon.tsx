import classNames from 'classnames';
import React from 'react'
import { IconTypes } from '.';

export const SendIcon = (props: IconTypes) => {
    const { className } = props;
    return <svg
        className={classNames('dark:fill-white', className)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
    </svg>
}
