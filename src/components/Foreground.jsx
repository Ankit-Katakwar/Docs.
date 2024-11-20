import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
 const ref = useRef()
  const data = [
    {
      disc: "Hello, My name is Ankit Katakware",
      filesize: "0.6Mb",
      isdownload: true,
      tag: { isOpen: true, tagDisc: "Download Now", tagColor: "green" },
    },
    {
      disc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil perspiciatis corrupti explicabo laboriosam cum impedit tenetur cumque earum voluptatibus. ",
      filesize: "0.9Mb",
      isdownload: false,
      tag: { isOpen: true , tagDisc: "Upload Now", tagColor: "blue" },
    },
    {
      disc: "Hello, My name is Ankit Katakware",
      filesize: "0.6Mb",
      isdownload: true ,
      tag: { isOpen: true, tagDisc: "Download Now", tagColor: "green" },
    },
  ];

  return (
    <div ref={ref} className="fixed z-[3] w-full h-screen p-5 flex flex-wrap gap-5">
      {data.map((item) => (
        <Card data={item} reference ={ref}/>
      ))}
    </div>
  );
};

export default Foreground;
