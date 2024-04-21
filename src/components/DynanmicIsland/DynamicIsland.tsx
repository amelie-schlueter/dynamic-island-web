"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export type DynamicIslandTypes = "event" | "call" | "default";

interface DynamicIslandProps {
  children?: React.ReactNode;
  className?: string;
  active: DynamicIslandTypes;
}

const DynamicIsland = ({
  children,
  active,
  className = "min-w-[125px] min-h-10",
}: DynamicIslandProps) => {
  return (
    <motion.div
      className={cn(
        `relative  bg-black ${
          active === "event" ? "rounded-3xl" : "rounded-full"
        } px-3 py-2.5 text-white border-[1px]  flex items-start justify-start`,
        className
      )}
      layout
      style={{ transformOrigin: "top", originX: 0.5, originY: 0 }}
      transition={{
        layout: {
          duration: 0.3,
          stiffness: 110,
          damping: 12,
          type: "spring",
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default DynamicIsland;
