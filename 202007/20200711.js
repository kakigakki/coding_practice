/* 用class继承数组,封装版本控制功能的数组 */

class myArray extends Array {
  constructor() {
    super()
  }

  history = []

  commit() {

    //使用slice() 对数组进行拷贝(当没有引用类型时,就是深拷贝)
    this.history.push(this.slice())
    this.splice(0, this.length)
  }

  revert() {
    this.splice(0, this.length, ...this.history[this.history.length - 1])
  }
}


let myarr = new myArray()
myarr.push(1)
myarr.push(2)
myarr.push(3)
myarr.push(4)
console.log(myarr);
myarr.commit()
console.log(myarr);
myarr.push(5)
console.log(myarr);


/* 使用promise,顺序获取异步请求并输出内容*/

function orderOutput(urls) {
  //遍历获取所有异步请求的响应内容(promises对象),放入textPromises
  const textPromises = urls.map(url => fetch(url).then(response => response.text()))

  //遍历内容,输出内容

  textPromises.reduce((chain, textPromise) => {
      chain.then(() => textPromise).then(text => console.log(text))
    }, Promise.resolve()) //Promise.resolve() 可以直接返回一个resolved的Promise对象,直接调用then
}


/* 使用async函数,顺序获取异步请求并输出内容(继发版本) */

async function orderOutput2(urls) {
  for (const url of urls) {
    const response = fetch(url)
    console.log(await response.text());
  }
}

/*使用async函数,顺序获取异步请求并输出内容(并发版本)   */

async function orderOutput3(urls) {
  let responses = urls.map(async url => await fetch(url))
  for (const res of responses) {
    console.log(await res.text());
  }
}


/* 使用async实现一个睡眠函数 */

async function sleep(sec) {
  for (let i = 1; i <= sec; i++) {
    //每个一秒钟打印一次
    console.log(i);
    await new Promise(res => {
      setTimeout(res, 1000)
    })
  }
}

console.log(sleep(5));