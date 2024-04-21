"use client";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Video } from "lucide-react";
import React from "react";

const DynamicEvent = () => {
  return (
    <motion.div
      className="min-w-[225px] flex flex-col px-2 py-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.3, delay: 0.1 } }}
    >
      <div className="flex items-center justify-between">
        <Badge variant={"green"}>In 5 min</Badge>
        <Badge variant={"tertiary"}>
          <Video strokeWidth={1.5} size={18} />
        </Badge>
      </div>
      <div className="flex mt-2 justify-between items-center">
        <div className="flex flex-col gap-.5">
          <p className="font-medium">Daily Coffee ☕</p>
          <p className="text-xs text-zinc-500">10:00 → 11:00 </p>
        </div>
        <div className="flex ">
          {Array.from({ length: 3 }).map((_, i) => (
            <Avatar className="h-6 w-6 ml-[-10px]" key={i}>
              <AvatarFallback>AS</AvatarFallback>
              <AvatarImage src="https://avatar.vercel.sh/rauchg" />
            </Avatar>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DynamicEvent;
