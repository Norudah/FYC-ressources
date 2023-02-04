export const curry = (fn) => {
  return (...args) => {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return (...moreArgs) => {
        return curry(fn)(...args, ...moreArgs);
      };
    }
  };
};
