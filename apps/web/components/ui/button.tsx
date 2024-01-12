import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils/common";

import If from "./If";
import Spinner from "./Spinner";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  block?: boolean;
  round?: boolean;
  loading?: boolean;
  href?: Maybe<string>;
  target?: Maybe<React.HTMLAttributeAnchorTarget | undefined>;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      href,
      target,
      loading,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        <InnerButtonContainerElement
          href={href}
          target={target}
          disabled={props.disabled}
        >
          <span
            className={cn(`flex w-full flex-1 items-center justify-center`)}
          >
            <If condition={loading}>
              <Animation />
            </If>

            {children}
          </span>
        </InnerButtonContainerElement>
      </Comp>
    );
  },
);
Button.displayName = "Button";

function Animation() {
  return (
    <span className={"mx-2"}>
      <Spinner className={"mx-auto !h-4 !w-4 fill-white dark:fill-white"} />
    </span>
  );
}

function InnerButtonContainerElement({
  children,
  href,
  target,
  disabled,
}: React.PropsWithChildren<{
  href: Maybe<string>;
  target: Maybe<React.HTMLAttributeAnchorTarget | undefined>;
  disabled?: boolean;
}>) {
  const className = `flex w-full h-full items-center transition-transform duration-500 ease-out`;

  if (href && !disabled) {
    return (
      <Link className={className} href={href} target={target}>
        {children}
      </Link>
    );
  }

  return <span className={className}>{children}</span>;
}

export { Button, buttonVariants };
