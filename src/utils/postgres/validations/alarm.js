import { containsEmptySpace, isEmpty } from "./commons.js";

export function validateName(value) {
  return isEmpty(value) && !containsEmptySpace()
}
