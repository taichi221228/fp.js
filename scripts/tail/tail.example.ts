import { numbers } from "../../constants/numbers.ts";
import { tail } from "./tail.ts";

const main = () => {
  /**
   * @returns {[2, 3, 4, 5]}
   */
  console.log(tail(numbers));
};

main();
