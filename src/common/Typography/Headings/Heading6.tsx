import classNames from 'classnames'
import React, { ReactNode } from 'react'

type Heading6Types = {
    children: ReactNode;
    className?: string;
}

export const Heading6 = (props: Heading6Types) => {
    const {children, className} = props
    return <h6 className={classNames("text-lg font-bold dark:text-white", className)}>{children}</h6>
}
