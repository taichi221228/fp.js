import { numbers } from "$constants/numbers.ts";
import { product } from "./product.ts";

const main = () => {
  /**
   * @returns {120}
   */
  console.log(product(numbers));
};

main();
