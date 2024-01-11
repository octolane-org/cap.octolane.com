import { cn } from "@/lib/utils/common";

const Container: React.FCC<{ className?: string }> = ({
  children,
  className,
}) => {
  return (
    <div className={cn("container mx-auto px-5", className)}>{children}</div>
  );
};

export default Container;
