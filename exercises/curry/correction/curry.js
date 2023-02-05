export const curry =
  (fn) =>
  (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...moreArgs) => curry(fn)(...args, ...moreArgs);
    }
  };

// Version avec console.log pour tester :
/* export const curry = (fn) => {
  console.log("fn length", fn.length);
  return (...args) => {
    console.log("args", args);
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...moreArgs) => curry(fn)(...args, ...moreArgs);
    }
  };
}; */
