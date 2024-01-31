import React, { useEffect, useState } from "react";
import "./cursor.scss";
import {motion} from "framer-motion"
 
export const Cursor = () => {
  const [postion, setPositon] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMover = (e) => {
      setPositon({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMover);
    return () => {
      window.removeEventListener("mousemove", mouseMover);
    };

    
  },[]);

  console.log(postion);
  return <motion.div className="cursor" animate={{x:postion.x +5, y:postion.y+10}}></motion.div>;
};
