export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export default function () {
  const msg = { 1: "Hello,", 2: "Module" };
  console.log({ ...msg, 3: "System!" });
}
