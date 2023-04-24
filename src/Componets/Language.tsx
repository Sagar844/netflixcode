import { useContext, useEffect, useState } from "react";
import { data } from "../App";
import Translate from "./Data.json"

const getthem = () => {
    return localStorage.getItem("Language") || "English";
};

const Language = () => {
    const { setjson } = useContext(data)
    const [language, setlanguage] = useState(getthem())

    useEffect(() => {
        if (language == "English") {
            setjson(Translate.English)
        } else if (language == 'हिंदी') {
            setjson(Translate.हिंदी)
        }
    }, [language, setjson])

    useEffect(() => {
        localStorage.setItem("Language", language)
    }, [language])

    return (

        <>
            <select
                value={language}
                onChange={(e) => setlanguage(e.target.value)}
                className="px-2 py-1 rounded-md cursor-pointer text-black lg:text-white"
            >
                <option>English</option>
                <option>हिंदी</option>
            </select>
        </>

    );
};

export default Language;
