"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SlideInLeftProps = {
  children: ReactNode;
  className?: string;
};

const SlideInLeft = ({ children, className }: SlideInLeftProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default SlideInLeft;
