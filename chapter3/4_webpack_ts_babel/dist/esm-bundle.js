const o = (o) => {
  console.log(
    (() => {
      console.log("add", 1, 2);
      for (let o = 0; o < 10; o++) console.log(o);
      return 3;
    })()
  ),
    console.log(`Hello, ${o}!`);
};
o("World");
export { o as greet };
