import classNames from 'classnames';
import React from 'react'
import { IconTypes } from '.';

export const BookmarkIcon = (props: IconTypes) => {
    const { className } = props;
    return <svg
        className={classNames('dark:fill-white', className)}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path d="M19 24l-7-6-7 6v-24h14v24z" />
    </svg>
}
