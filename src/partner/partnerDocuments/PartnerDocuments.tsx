import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LeftArrowIcon } from '../../assets/Icons'
import ImageUploader from '../../common/Forms/FileInput/ImageUploader'
import InputField from '../../common/Forms/InputFields/InputField'
import { Heading4 } from '../../common/Typography/Headings/Heading4'
import { Heading5 } from '../../common/Typography/Headings/Heading5'
import { Heading6 } from '../../common/Typography/Headings/Heading6'
import Paragraph from '../../common/Typography/Paragraphs/Paragraph'

const PartnerDocuments = () => {
    const navigate = useNavigate();
    return (
        <>
            {/* header */}
            <div className="bg-white p-4 dark:bg-gray-700 sticky top-0">
                <div onClick={() => navigate(-1)}>
                    <LeftArrowIcon className={"fill-blue-400"} />
                </div>
                <div className="mt-4">
                    <Heading4>Documents</Heading4>
                    <Paragraph>Your Documents</Paragraph>
                </div>
            </div>
            <hr />
            {/* body */}
            <div className={"p-4"}>
                <div>
                    <Heading6 className="!font-medium text-base">Enter Aadhar number</Heading6>
                    <InputField placeholder="1234-5678-9123" />
                    <div className={"flex gap-4"}>
                        <ImageUploader label={"Front Side"} />
                        <ImageUploader label={"Back Side"} />
                    </div>
                </div>
                <br/>
                <div>
                    <Heading6 className="!font-medium text-base">Enter Pan number</Heading6>
                    <InputField placeholder="ABCDE1234F" />
                    <div className={"flex gap-4"}>
                        <ImageUploader label={"Front Side"} />
                        {/* <ImageUploader label={"Back Side"} /> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnerDocuments
