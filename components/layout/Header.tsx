import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header flex", className)}>
      <Link href="/" className="md:flex-1">
        <Image
          alt="LOGO"
          src="/assets/icons/logo.svg"
          width={120}
          height={32}
          className="hidden md:block"
        ></Image>
        <Image
          alt="LOGO"
          src="/assets/icons/logo-icon.svg"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        ></Image>
      </Link>
      {children}
    </div>
  );
};
export default Header;
