import React from "react";
import { motion } from "framer-motion";
import "./tabButton.scss"

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {

  return (
      <button onClick={selectTab} className="tab-button">
      <p>
        {children}
      </p>
      {active && (
          <motion.div
            animate={active ? "active" : "default"}
            variants={variants}
            style={{height: "2px",
              backgroundColor: "#ffff",
              marginTop: "10px",
              marginRight: "0px",}}
          ></motion.div>
        )}
    </button>
  );
};

export default TabButton;