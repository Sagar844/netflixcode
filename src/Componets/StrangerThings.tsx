import { useContext } from "react"
import { data } from "../App"

const StrangerThings = () => {

    const { json } = useContext(data)
    return (
        <>
            <div className="flex justify-between lg:mx-40 items-center">
                <div className="">

                    <img className="w-full" src="/src/assets/en (2).png" alt="" />
                </div>
                <div className="font-bold">
                    <h1 className="lg:text-4xl ">{json.strengthings}</h1>
                    <p className="lg:text-xl ">{json.strengthingspara}</p>
                </div>

            </div>

        </>

    )
}

export default StrangerThings
