import Link from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  className?: string;
  activeClassName?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, href, children, onClick, ...props }, ref) => {
    return (
      <Link
        ref={ref}
        href={href}
        className={cn(className)}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

export { NavLink };
