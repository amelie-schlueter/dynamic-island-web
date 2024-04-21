import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <div className="flex mx-auto gap-2 items-center justify-center mt-6 text-muted-foreground">
      <Link
        href={"https://twitter.com/@amelieschltr"}
        className="underline hover:opacity-60 text-sm"
      >
        Github
      </Link>
      <Link
        href={"https://twitter.com/@amelieschltr"}
        className="underline hover:opacity-60 text-sm"
      >
        X
      </Link>
      <Link
        href={"https://twitter.com/@amelieschltr"}
        className="underline hover:opacity-60 text-sm"
      >
        Email
      </Link>
    </div>
  );
};

export default Socials;
