import React from "react";
import RejectCall from "./RejectCall";
import SuccessCall from "./SuccessCall";

const CallInfoWrapper = () => {
  return (
    <div className="flex text-base  gap-2 justify-center items-center  ">
      <RejectCall />
      <SuccessCall />
    </div>
  );
};

export default CallInfoWrapper;
