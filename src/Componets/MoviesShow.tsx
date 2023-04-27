import { useContext } from "react";
import { data } from "../App";
import en1 from "../assets/en (1).png";
import engb from "../assets/en-GB.png";
import { motion } from "framer-motion";

const MoviesShow = () => {
  const { json } = useContext(data);
  return (
    <>
      <div className="flex justify-between lg:mx-40 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={en1} alt="" />
        </motion.div>
        <div>
          <h1 className="lg:text-4xl font-bold">{json.Watch}</h1>
          <p className="lg:text-xl font-bold">{json.P}</p>
        </div>
      </div>
      <hr className="bg-[ #494949] mx-20 "></hr>

      <div className="flex justify-between lg:mx-20 items-center  ">
        <div>
          <h1 className="lg:text-4xl font-bold">{json.child}</h1>
          <p className="lg:text-xl font-bold">{json.childpara}</p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={engb} alt="" />
        </motion.div>
      </div>
      <div>
        <hr className="bg-[#494949] mx-20 "></hr>
      </div>
    </>
  );
};

export default MoviesShow;
