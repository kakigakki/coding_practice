//防抖:指定时间内,只执行最初或者最后的操作
function debounce(func, wait = 1000) {
  let time = null;
  return () => {
    let args = arguments;
    clearTimeout(time);
    time = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

//节点,一次执行完毕之前,无法继续执行
function trottle(func, wait) {
  let time = null;
  return () => {
    let args = arguments;
    if (!time) {
      time = setTimeout(() => {
        func.apply(this, args);
      }, wait);
    }
  };
}