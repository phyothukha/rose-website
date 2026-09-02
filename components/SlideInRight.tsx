"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SlideInRightProps = {
  children: ReactNode;
  className?: string;
};

const SlideInRight = ({ children, className }: SlideInRightProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default SlideInRight;
