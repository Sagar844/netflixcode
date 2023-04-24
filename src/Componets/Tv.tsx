import { useContext } from "react"
import { data} from "../App"


const Tv = () => {
    const { json } = useContext(data)


    return (
        <div className=" ">
            <div className="flex justify-between items-center  lg:mx-40">
                <div className=" mt-2 space-y-4">
                    <h1 className=" font-bold lg:text-4xl ">{json.title}</h1>
                    <p className="lg:text-2xl font-bold ">{json.para}</p>
                </div>

                <div className="">
                    <img className="w-full h-full" src="/src/assets/en.png" alt="" />
                </div>
            </div >
            <hr className="bg-[ #494949] mx-20"></hr>
        </div>

    )
}

export default Tv
