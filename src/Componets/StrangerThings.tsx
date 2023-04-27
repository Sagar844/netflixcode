import { useContext } from "react";
import { data } from "../App";
import starang from "../assets/en (2).png";
import { motion } from "framer-motion";

const StrangerThings = () => {
  const { json } = useContext(data);
  return (
    <>
      <div className="flex justify-between lg:mx-40 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img className="w-full" src={starang} alt="" />
        </motion.div>
        <div className="font-bold ">
          <h1 className="lg:text-4xl ">{json.strengthings}</h1>
          <p className="lg:text-xl ">{json.strengthingspara}</p>
        </div>
      </div>
    </>
  );
};

export default StrangerThings;
