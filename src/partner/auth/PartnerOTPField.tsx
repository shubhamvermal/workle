import { useState } from 'react'
import OtpInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Heading5 } from '../../common/Typography/Headings/Heading5'
import Paragraph from '../../common/Typography/Paragraphs/Paragraph'
import { verifyOtp } from '../../store/partner/actions/auth'

const PartnerOTPField = () => {
    const navigate = useNavigate();
    const auth = useSelector((state: any) => state.auth)
    const { user } = auth
    const dispatch = useDispatch();
    const [otp, setOtp] = useState<any>('')

    const handleChange = (e: any) => {
        setOtp(e)
    }

    const handleOTPSubmit = async () => {
        console.log("🚀 ~ file: PartnerOTPField.tsx ~ line 27 ~ handleOTPSubmit ~ otp", otp)
        const response = await dispatch(verifyOtp({phone: user.phone, otp}));
        if (response.payload.success){
            navigate('/partner/profile')
        }
    }


    return (
        <div>
            <div className="p-4">
                <div className={"mb-3"}>
                    <Heading5>Enter OTP</Heading5>
                    <Paragraph>OTP sent to {user.phone}</Paragraph>
                </div>
                <div className={"flex justify-center items-center "}>
                    <div className={"flex gap-2"}>
                        <OtpInput
                            value={otp}
                            onChange={handleChange}
                            numInputs={4}
                            separator={<span>-</span>}
                        />
                    </div>
                </div>
                <div className={"w-full flex justify-center items-center"}><Paragraph>Resend OTP in <b>00:30</b></Paragraph></div>
            </div>
            <div className={"absolute bottom-0 p-4 bg-white w-full"}>
                <div
                    className={"w-full flex justify-center items-center p-3 rounded-2xl bg-blue-300 text-blue-600"}
                    onClick={handleOTPSubmit}
                    > Verify OTP</div>
            </div>
        </div>
    )
}

export default PartnerOTPField
