import classNames from 'classnames';
import React, { ReactNode } from 'react'

type ParagraphTypes = {
    children: ReactNode;
    className?: string;
}
const Paragraph = (props: ParagraphTypes) => {
    const { children, className } = props;
    return <p className={classNames("font-light text-gray-500 dark:text-gray-400", className)}>{children}</p>
}

export default Paragraph;