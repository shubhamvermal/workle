import classNames from 'classnames';
import React, { ReactNode } from 'react'

type Heading5Types = {
    children: ReactNode
    className?: string
}

export const Heading5 = (props: Heading5Types) => {
    const { children, className } = props;
    return <h5 className={classNames("text-xl font-bold dark:text-white", className)}>{children}</h5>
}
