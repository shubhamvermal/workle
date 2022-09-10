import React, { useEffect, useState } from 'react'
import { TranslateIcon } from '../assets/Icons'
import { PopUp } from '../common/Modals/PopUp'
import { Heading4 } from '../common/Typography/Headings/Heading4'
import { Heading5 } from '../common/Typography/Headings/Heading5'
import { Heading6 } from '../common/Typography/Headings/Heading6'

const languages = [
    { id: "1", lang: "HINDI" },
    { id: "2", lang: "ENGLISH" },
    { id: "3", lang: "PUNJABI" },
    { id: "4", lang: "URDU" },
    { id: "5", lang: "HINDI" },
    { id: "6", lang: "ENGLISH" },
    { id: "7", lang: "PUNJABI" },
    { id: "8", lang: "URDU" },
    { id: "9", lang: "HINDI" },
    { id: "10", lang: "ENGLISH" },
    { id: "11", lang: "PUNJABI" },
    { id: "12", lang: "URDU" },
    { id: "13", lang: "HINDI" },
    { id: "14", lang: "ENGLISH" },
    { id: "15", lang: "PUNJABI" },
    { id: "16", lang: "URDU" },
    { id: "17", lang: "HINDI" },
    { id: "18", lang: "ENGLISH" },
    { id: "19", lang: "PUNJABI" },
    { id: "20", lang: "URDU" },
]
type LanguageSelectorTypes = {

}

const LanguageSelector = (props: LanguageSelectorTypes) => {
    const [dropdownState, setDropdownState] = useState(false)

    return <>
        <div onClick={() => setDropdownState(true)}><TranslateIcon /></div>
        <PopUp isOpen={dropdownState} onClose={() => {
            setDropdownState(false)
        }}>
            <Heading4>Choose Language</Heading4>
            <br />
            <ul className={" w-72 flex flex-col items-start h-80 overflow-auto"}>
                {languages.map(({ lang, id }: any, index: number) => <li onClick={() => { }} key={index} className="flex justify-between items-center w-full pr-3 mb-2">
                    <Heading6 className="!font-medium">{lang}</Heading6>
                    <input type="radio" />
                </li>)}
            </ul>
        </PopUp>
    </>
}

export default LanguageSelector
