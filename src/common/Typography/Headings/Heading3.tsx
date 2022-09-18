import React, { ReactNode } from 'react'

type Heading3Types = {
    children: ReactNode;
}

export const Heading3 = (props: Heading3Types) => {
    const { children } = props
    return <h3 className="text-3xl font-bold dark:text-white">{children}</h3>

}
