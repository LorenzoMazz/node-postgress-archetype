export function isEmpty(value) {
  return value === "" || value === undefined || value === null
}

export function containsEmptySpace(value) {
  return value.includes(" ")
}
