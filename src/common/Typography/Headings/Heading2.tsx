import React, { ReactNode } from 'react'

type Heading2Types = {
    children: ReactNode;
}

export const Heading2 = (props: Heading2Types) => {
    const { children } = props

    return <h2 className="text-4xl font-bold dark:text-white">{children}</h2>
}
