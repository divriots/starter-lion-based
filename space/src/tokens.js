const _space = [0, 4, 8, 16, 32, 64];

const base = {
  xxs: "0.125rem",
  xs: ".25rem",
  s: ".5rem",
  m: "1rem",
  l: "2rem",
  xl: "4rem",
  default: "{space.m.value}",
};
Object.assign(_space, { ...base });

_space.stack = Object.keys(base).reduce((a, c) => {
  a[c] = `0 0 {space.${c}.value} 0`;
  return a;
}, {});

_space.inline = Object.keys(base).reduce((a, c) => {
  a[c] = `0 {space.${c}.value} 0 0`;
  return a;
}, {});

_space.inset = Object.keys(base).reduce((a, c) => {
  a[c] = ` {space.${c}.value}`.repeat(4);
  return a;
}, {});

_space["inset-squish"] = Object.keys(base).reduce((a, c, i, arr) => {
  if (i - 1 < 0 || i + 1 >= arr.length) return a;
  a[c] = `{space.${arr[i - 1]}.value} {space.${c}.value} {space.${
    arr[i - 1]
  }.value} {space.${c}.value}`;
  return a;
}, {});

_space["inset-stretch"] = Object.keys(base).reduce((a, c, i, arr) => {
  if (i - 1 < 0 || i + 1 >= arr.length) return a;
  a[c] = `{space.${c}.value} {space.${
    arr[i - 1]
  }.value} {space.${c}.value} {space.${arr[i - 1]}.value}`;
  return a;
}, {});

export const space = _space;
export default { space: { ..._space } };
