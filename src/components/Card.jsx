import React from "react";
import { FaFileAlt } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { motion } from "motion/react"



function Card({ data,reference}){
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className="relative w-[210px] h-[280px] bg-zinc-300 rounded-3xl flex-shrink-0 text-black px-5 py-7 overflow-hidden mb-2">
      <FaFileAlt className="mb-4" />
      <p className="text-xs   ">{data.disc}</p>
      <div className="footer absolute bottom-0 w-full left-0  ">
        <div className="flex text-sm items-center justify-between mb-3 py-1 px-6 ">
          <span>{data.filesize}</span>
          <span className=" flex w-5 h-5 p-1 items-center justify-center text-center rounded-full bg-zinc-800  text-white">
            {data.isdownload ? (
              <BsDownload className="text-white" />
            ) : (
              <IoClose />
            )}{" "}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={` tag w-full h-10 ${
              data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"
            } flex justify-center items-center font-semibold`}
          >
            {data.tag.tagDisc}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
