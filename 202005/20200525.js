//模拟一个call函数
Function.prototype.call2 = function(obj, ...arg) {
    var context = obj || window; //当obj传null时，默认this指向window，所以默认为window
    context.fn = this;
    var result = context.fn(...arg);
    delete context.fn;
    return result;
};

var foo = function(a, b) {
    console.log(this.a);
    return a + b;
};

var bar = {
    a: 4,
};

//模拟一个apply函数
Function.prototype.apply2 = function(obj, arg) {
    let context = obj || window
    context.fn = this
    let res = context.fn(...arg)
    Reflect.deleteProperty(context, fn)
    return res
}


console.log(foo.call2(bar, 10, 1006));