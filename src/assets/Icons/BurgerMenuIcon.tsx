import classNames from 'classnames';
import React from 'react'
import { IconTypes } from '.'

export const BurgerMenuIcon = (props: IconTypes) => {
    const { className } = props;
    return <svg
        className={classNames('dark:fill-white', className)}
        clipRule="evenodd"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        height={24}
        width={24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fillRule="nonzero" />
    </svg>
}
