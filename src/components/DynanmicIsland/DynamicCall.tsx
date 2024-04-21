"use client";
import { motion } from "framer-motion";
import React from "react";
import KontaktImage from "./KontaktImage";
import KontaktInfo from "./KontaktInfo";
import CallInfoWrapper from "./CallInfoWrapper";
import { cn } from "@/lib/utils";
import { DynamicIslandTypes } from "@/lib/types/dynamicIsland";

interface DynamicCallProps {
  active?: DynamicIslandTypes;
}

const DynamicCall = ({ active }: DynamicCallProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
      className={cn(
        "flex justify-between  items-center w-[300px] origin-center"
      )}
    >
      <div className="flex gap-4 ">
        <KontaktImage />
        <KontaktInfo />
      </div>
      <CallInfoWrapper />
    </motion.div>
  );
};

export default DynamicCall;
