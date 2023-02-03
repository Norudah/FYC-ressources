const Just = (value) => ({
  map: (fn) => Maybe(fn(value)),
  chain: (fn) => fn(value),
  of: () => value,
  getOr: () => value,
  filter: (fn) => (fn(value) ? Just(value) : Nothing()),
  type: "just",
});

const Nothing = () => ({
  map: (fn) => Nothing(),
  chain: (fn) => fn(),
  of: () => Nothing(),
  getOr: (substitute) => substitute,
  filter: () => Nothing(),
  type: "nothing",
});

const Maybe = (value) => (value === null || value === undefined || value.type === "nothing" ? Nothing() : Just(value));
