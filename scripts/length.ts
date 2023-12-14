import { tail } from "./tail.ts";

export const length = <T>(xs: T[]): number =>
  xs.length === 0 ? 0 : 1 + length(tail(xs));
