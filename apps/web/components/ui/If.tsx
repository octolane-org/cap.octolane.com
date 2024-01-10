import { Fragment, useMemo } from "react";

type Condition<Value = unknown> = Value | Falsy;

function If<Value = unknown>({
  condition,
  children,
  fallback,
}: React.PropsWithoutRef<{
  condition: Condition<Value>;
  children: React.ReactNode | ((value: Value) => React.ReactNode);
  fallback?: React.ReactNode;
}>) {
  return useMemo(() => {
    if (condition) {
      if (typeof children === "function") {
        return <Fragment>{children(condition)}</Fragment>;
      }

      return <Fragment>{children}</Fragment>;
    }

    if (fallback) {
      return <Fragment>{fallback}</Fragment>;
    }

    return null;
  }, [condition, fallback, children]);
}

export default If;
