import classNames from "clsx";

type HeadingType = 1 | 2 | 3 | 4 | 5 | 6;

const Heading: React.FCC<{ type?: HeadingType; className?: string }> = ({
  type,
  children,
  className,
}) => {
  switch (type) {
    case 1:
      return (
        <h1
          className={classNames(
            `font-heading scroll-m-20 text-4xl font-bold tracking-tight dark:text-white`,
            className,
          )}
        >
          {children}
        </h1>
      );
    case 2:
      return (
        <h2
          className={classNames(
            `font-heading scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0`,
            className,
          )}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={classNames(
            "font-heading scroll-m-20" +
              " text-2xl font-semibold tracking-tight",
            className,
          )}
        >
          {children}
        </h3>
      );
    case 4:
      return (
        <h4
          className={classNames(
            "font-heading scroll-m-20 text-xl font-semibold tracking-tight",
            className,
          )}
        >
          {children}
        </h4>
      );
    case 5:
      return (
        <h5
          className={classNames(
            "scroll-m-20 font-heading text-lg font-medium",
            className,
          )}
        >
          {children}
        </h5>
      );
    case 6:
      return (
        <h6
          className={classNames(
            "scroll-m-20 font-heading text-base" + " font-medium",
            className,
          )}
        >
          {children}
        </h6>
      );

    default:
      return <Heading type={1}>{children}</Heading>;
  }
};

export default Heading;
