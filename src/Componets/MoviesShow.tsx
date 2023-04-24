import { useContext } from "react"
import { data } from "../App"




const MoviesShow = () => {
    const { json } = useContext(data)
    return (
        <>

            <div className="flex justify-between lg:mx-40 items-center">

                <div>
                    <img src="/src/assets/en (1).png" alt="" />
                </div>
                <div>
                    <h1 className="lg:text-4xl font-bold">{json.Watch}</h1>
                    <p className="lg:text-xl font-bold">{json.P}</p>

                </div>
            </div>
            <hr className="bg-[ #494949] mx-20 "></hr>

            <div className="flex justify-between lg:mx-20 items-center">


                <div>
                    <h1 className="lg:text-4xl font-bold">{json.child}</h1>
                    <p className="lg:text-xl font-bold">{json.childpara}</p>
                </div>

                <div>
                    <img src="/src/assets/en-GB.png" alt="" />
                </div>
            </div>
            <hr className="bg-[ #494949] mx-20 "></hr>
        </>

    )
}

export default MoviesShow
