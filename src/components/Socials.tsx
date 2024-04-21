import Link from "next/link";
import React from "react";

const Socials = () => {
  return (
    <div className="flex mx-auto gap-2 items-center justify-center mt-6 text-muted-foreground">
      <Link
        href={"https://github.com/amelie-schlueter"}
        className="underline hover:opacity-60 text-sm"
        target="_blank"
      >
        Github
      </Link>
      <Link
        href={"https://twitter.com/@amelieschltr"}
        className="underline hover:opacity-60 text-sm"
        target="_blank"
      >
        X
      </Link>
      <Link
        href={"mailto:as@amelieschlueter.com"}
        className="underline hover:opacity-60 text-sm"
        target="_blank"
      >
        Email
      </Link>
    </div>
  );
};

export default Socials;
