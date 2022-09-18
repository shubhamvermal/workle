import React from 'react'
import { Heading5 } from '../../common/Typography/Headings/Heading5'
import { Heading6 } from '../../common/Typography/Headings/Heading6'
import Paragraph from '../../common/Typography/Paragraphs/Paragraph'

const OTPField = () => {
    return (
        <div>
            <div className="p-4">
                <div className={"mb-3"}>
                    <Heading5>Enter Verification Code</Heading5>
                    <Paragraph>we have sent you 4 digit verification code on </Paragraph>
                    <Heading6>+91 9991447575</Heading6>
                </div>
                <div className={"flex justify-center items-center "}>
                    <div className={"flex gap-2"}>
                    <input className={"h-12 w-12 bg-white flex items-center justify-center border rounded-2xl"} placeholder={"*"} />
                    <input className={"h-12 w-12 bg-white flex items-center justify-center border rounded-2xl"} placeholder={"*"} />
                    <input className={"h-12 w-12 bg-white flex items-center justify-center border rounded-2xl"} placeholder={"*"} />
                    <input className={"h-12 w-12 bg-white flex items-center justify-center border rounded-2xl"} placeholder={"*"} />
                    </div>
                </div>
                <div className={"w-full flex justify-center items-center"}><Paragraph><b>00:30</b></Paragraph></div>
            </div>
            <div className={"absolute bottom-0 p-4 bg-white w-full"}>
                <div className={"w-full flex justify-center items-center p-3 rounded-2xl bg-blue-300 text-blue-600"}>Log In</div>
            </div>
        </div>
    )
}

export default OTPField
