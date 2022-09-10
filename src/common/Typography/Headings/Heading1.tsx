import React, { ReactNode } from 'react'

type Heading1Types = {
    children: ReactNode;
}

export const Heading1 = (props: Heading1Types) => {
    const { children } = props

    return <h1 className="text-5xl font-extrabold dark:text-white">{children}</h1>
}
