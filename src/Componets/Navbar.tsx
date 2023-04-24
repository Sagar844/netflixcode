import { useContext } from "react";
import Language from "./Language";
import { data } from "../App";

const Navbar = () => {

const {json} = useContext(data)

  return (
    <>
      <div className=" absolute top-0 left-0 right-0 container mx-auto">
        <div className="flex justify-between items-center ">
          <img
            className="lg:w-20 mx-5 max-w-28 cursor-pointer"
            src="/src/assets/icons8-netflix-48.png"
            alt=""
          />
          <div>
            <Language />
            <button className="bg-[#e50914] px-2 py-1 text-white rounded-md mx-5 ">
            {json.sign}
            </button>
          </div>
        </div>
      </div>

      <div>
        <img className="w-full" src="/src/assets/backdropimagae.jpg" alt="" />
      </div>
    </>
  );
};

export default Navbar;
