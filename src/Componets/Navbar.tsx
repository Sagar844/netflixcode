import { useContext } from "react";
import Language from "./Language";
import { data } from "../App";
import backdropimage from "../assets/backdropimagae.jpg"
import logo from "../assets/icons8-netflix-48.png"



const Navbar = () => {


  const { json } = useContext(data)




  return (
    <div className="relative">
      <div className=" absolute top-0 left-0 right-0  container mx-auto">
        <div className="flex justify-between items-center lg:mx-12">
          <img
            className="lg:w-20 mx-5 max-w-28 cursor-pointer"
            src={logo}
            alt=""
          />

          <div>
            <Language />
            <button
              className="bg-[#e50914] px-4 py-1 text-white rounded-md mx-5 font-bold border border-1 border-white ">
              {json.sign}
            </button>
          </div>
        </div>
      </div>

      <div>
        <img className="w-full" src={backdropimage} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
