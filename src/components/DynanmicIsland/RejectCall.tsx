import React from "react";
import CallIcon from "./CallIcon";

const RejectCall = () => {
  return (
    <div className="h-11 w-11 bg-red-500 rounded-full items-center justify-center flex">
      <CallIcon className="rotate-[135deg]" />{" "}
    </div>
  );
};

export default RejectCall;
