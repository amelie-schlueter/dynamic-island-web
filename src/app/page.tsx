import DynamicIslandWrapper from "@/components/DynanmicIsland/DynamicIslandWrapper";
import Socials from "@/components/Socials";
import { Button } from "@/components/ui/button";
import { Github, TwitchIcon, Twitter, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[700px] mx-auto p-4 md:my-6">
      <div className="md:mt-12">
        <div className="mb-6 ">
          <h2 className="text-md font-medium">Dynamic Island</h2>
          <p className="text-muted-foreground">
            This is a web-clone of the famous Dynamic Island. This component is
            crafted using{" "}
            <span className="underline hover:opacity-60">
              <Link href={"https://framer-motion.com"}>Framer Motion</Link>
            </span>{" "}
            and was build by{" "}
            <span className="underline hover:opacity-60">
              <Link href={"https://amelieschlueter.com"}>Amelie</Link>
            </span>
            . You can read more about the code{" "}
            <span className="underline hover:opacity-60">
              <Link
                href={"https://amelieschlueter.com/interactions/dynamic-island"}
              >
                Dynamic Island Clone for Web.
              </Link>
            </span>
          </p>
        </div>
        <div className="p-4 border-[1px] rounded-md">
          <DynamicIslandWrapper />
        </div>
      </div>
      <Socials />
    </main>
  );
}
