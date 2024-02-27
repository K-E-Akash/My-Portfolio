import { useState } from "react";
import { motion } from "framer-motion";

const Test = () => {

    return (
    <>
    <div className="w-full h-screen flex items-center justify-center">
    <motion.div
      className="box bg-red-700 w-20 h-20"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["20%", "0%", "50%", "0%", "50%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
      }}
    />
    </div>
    </>
    );
};

export default Test;
