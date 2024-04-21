"use client";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import DynamicCall from "./DynamicCall";
import DynamicIsland, { DynamicIslandTypes } from "./DynamicIsland";
import DynamicEvent from "./DynamicEvent";

const DynamicIslandWrapper = () => {
  const [active, setActive] = useState<DynamicIslandTypes>("default");
  return (
    <div className="relative p-4 min-h-[250px] h-full flex items-start w-full justify-center">
      <DynamicIsland active={active}>
        {active === "call" && <DynamicCall />}
        {active === "event" && <DynamicEvent />}
      </DynamicIsland>
      <div className="absolute bottom-4 flex gap-2">
        <Button
          variant={"secondary"}
          onClick={() => {
            setActive(() => "default");
          }}
        >
          Default
        </Button>
        <Button variant={"secondary"} onClick={() => setActive(() => "call")}>
          Call
        </Button>
        <Button variant={"secondary"} onClick={() => setActive(() => "event")}>
          Calendar Event
        </Button>
      </div>
    </div>
  );
};

export default DynamicIslandWrapper;
