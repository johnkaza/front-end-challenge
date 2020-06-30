const bp = {
  xxs: 320,
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
};

export const mq = (n) => {
  const bpArray = Object.keys(bp).map((key) => [key, bp[key]]);

  const [result] = bpArray.reduce((acc, [name, size]) => {
    if (n === name) return [...acc, `@media (min-width: ${size}px)`];
    return acc;
  }, []);

  return result;
};
