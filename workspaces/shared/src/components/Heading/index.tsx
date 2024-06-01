import { ComponentPropsWithRef, createElement, ReactNode } from "react";
import clsx from "clsx";
import styles from "./style.module.css";

type Size = "small" | "medium" | "large";

type Props = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  size?: Size;
  children: ReactNode;
} & ComponentPropsWithRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

export const Heading = ({
  level,
  className,
  children,
  size = "medium",
  ...props
}: Props) => {
  return createElement(
    `h${level}`,
    {
      className: clsx(styles.title, styles[size], className),
      ...props,
    },
    children,
  );
};
