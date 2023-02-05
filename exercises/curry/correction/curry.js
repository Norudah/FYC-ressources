export const curry =
  (fn) =>
  (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...moreArgs) => curry(fn)(...args, ...moreArgs);
    }
  };
