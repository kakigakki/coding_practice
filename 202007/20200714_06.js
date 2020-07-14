//获取观察目标的函数
let observable = (obj) =>
  new Proxy(obj, {
    set: function(target, key, value) {
      queue.forEach((fn) => fn(key, value));
      return Reflect.set(target, key, value);
    },
  });

let queue = new Set();
//获取观察者的函数
let observer = (fn) => queue.add(fn);

let people = observable({
  name: "kaki",
  age: 18,
});

let print = function(k, v) {
  console.log(`${k}的值为${v}`);
};
observer(print);

people.name = "mikina";