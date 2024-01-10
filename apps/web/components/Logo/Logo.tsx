import Link from "next/link";
import React from "react";

import LogoImage from "./LogoImage";

const Logo: React.FCC<{ href?: string; className?: string }> = ({
  href,
  className,
}) => {
  return (
    <Link href={href ?? "/"}>
      <LogoImage className={className} />
    </Link>
  );
};

export default Logo;
