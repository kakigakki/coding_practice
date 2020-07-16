function add(n) {
  let res = 0;
  res += n;
  let fn = (n) => {
    res += n;
    return fn;
  };
  fn.valueOf = () => res;
  return fn;
}

console.log(add(3)(4).valueOf());