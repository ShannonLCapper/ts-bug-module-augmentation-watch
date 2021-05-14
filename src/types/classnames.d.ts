import { Argument } from "classnames";

declare module "classnames" {
  const fn: (...args: Argument[]) => number;
  export = fn;
}
