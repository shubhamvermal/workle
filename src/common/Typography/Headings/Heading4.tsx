import React, { ReactNode } from 'react'

type Heading4Types = {
    children: ReactNode;
}

export const Heading4 = (props: Heading4Types) => {
    const { children } = props
    return <h4 className="text-2xl font-bold dark:text-white">{children}</h4>

}
