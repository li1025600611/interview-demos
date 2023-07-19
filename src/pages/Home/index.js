/*
 * Author  rhys.zhao
 * Date  2022-08-19 17:48:33
 * LastEditors  Vincy.Li
 * LastEditTime  2023-07-19 15:30:59
 * Description home页面
 */
import React, { useEffect } from "react";
import styles from "./index.scss";

const Home = () => {
  const arr = [1, 2, 3];
  const str = "abcdefg";
  const num = 123;
  const obj = [{ name: "vincy" }, { age: 18 }];

  useEffect(() => {
    // getMap();
    // getFilter();
    // getNoRepeat();
    // changeArr();
    // judgeType();
    // baseArray();
    // deepClone();
  }, []);

  // 手写map
  function getMap() {
    // 传入的是一个callback 对arr执行这个callback return的是一个数组
    Array.prototype._map = function (callback) {
      const newArr = [];
      for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i));
      }
      return newArr;
    };
    // console.log(arr._map((item) => item + 1));
  }

  // 手写filter
  function getFilter() {
    Array.prototype._filter = function (callback) {
      const newArr = [];
      for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i)) {
          newArr.push(this[i]);
        }
      }
      return newArr;
    };
    // console.log(arr._filter((item) => item > 1));
  }
  // 常见数组去重方法
  function getNoRepeat() {
    // ES6
    function unique(arr) {
      return Array.from(new Set(arr));
      // or return [...new Set(arr)]
    }

    // ES5
    function unique2(arr) {
      for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[j] === arr[i]) {
            arr.splice(j, 1);
            j--;
          }
        }
      }
      return arr;
    }

    console.log(unique(arr), unique2(arr));
  }

  // 常用的字符串转数组、数组转字符串方法
  function changeArr() {
    // 翻转字符串
    console.log(str.split("").reverse().join(""));
    console.log([...str].reverse().join(""));
    console.log(Array.from(str).reverse().join(""));
    // 找出任意网页的所有不重复的html标签
    const noRepeatHtml = [...new Set([...document.querySelectorAll("*")].map((item) => item.tagName))];
  }

  // 常用判断数据类型的方法
  function judgeType() {
    // 第一种：通过typeof判断 只能判断简单类型 复杂类型都是object 并且null==object
    console.log(typeof "str"); // string
    console.log(typeof 2); // number
    console.log(typeof [1, 2]); // object
    console.log(typeof { a: 1 }); // object
    console.log(typeof null); // object
    console.log(typeof undefined); // undefined
    console.log(typeof true); // boolean
    console.log(typeof Symbol(1)); // symbol

    // 第二种 通过instanceof instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
    console.log([1] instanceof Array); // true
    console.log({} instanceof Object); // true

    // 第三种 Object.prototype.toString.call()
    console.log(Object.prototype.toString.call(arr)); // [object Array]
    console.log(Object.prototype.toString.call(str)); // [object String]
    console.log(Object.prototype.toString.call(1)); // [object Number]
    console.log(Object.prototype.toString.call({})); // [object Object]
    console.log(Object.prototype.toString.call(/^abc/)); // [object RegExp]
    console.log(Object.prototype.toString.call(new Date())); // [object Date]
    console.log(Object.prototype.toString.call(() => {})); // [object Function]
  }

  // 常用数组基础用法
  function baseArray() {
    // let addNum = arr.push(4, 4);
    // console.log("addNum,arr :>> ", addNum, arr);
    // let addNum = arr.unshift(0);
    // console.log("arr :>> ", arr, addNum);
    // let del = arr.splice(2, 1); // 删除下标为2的元素
    // console.log("del :>> ", del, arr); // [3] [1,2]
    // let delAndReplace = arr.splice(2, 1, 4); // 用4替换3
    // console.log("delAndReplace :>> ", delAndReplace, arr); // [3] [1,2,4]
    // let newArr = arr.concat([4, 5, 6], [7, 8, 9]);
    // console.log("arr,newArr :>> ", arr, newArr); // [1,2,3] [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // let lastDel = arr.pop();
    // console.log("lastDel :>> ", lastDel, arr); // 3 [1,2]
    // let firstDel = arr.shift();
    // console.log("firstDel :>> ", firstDel, arr); // 1 [2,3]
    // let newArr = arr.slice(0, 2);
    // console.log("newArr :>> ", newArr); // [1,2]
    // console.log(arr.some((item) => item <= 2)); // true
    // console.log(arr.some((item) => item === 4)); // false
    // console.log(arr.every((item) => item <= 3)); // true
    // console.log(arr.every((item) => item <= 2)); // false
    // console.log(arr.join("and")); // 1and2and3
    // console.log([1].join("and")); // 1
    // console.log(str.slice(0, 3)); // abc 不包含3
    // console.log(str.slice(-3, -1)); // ef
    // console.log(str.slice(-3)); // efg
    // console.log(str.repeat(3)); // abcdefgabcdefgabcdefg
    // console.log(str.padStart(10, "a")); // aaaabcdefg
    // console.log(str.padEnd(10, "a")); // abcdefgaaa
    // console.log(str.toUpperCase()); // ABCDEFG
    // console.log(str.toLowerCase()); // abcdefg
    // console.log(str.charAt(0)); // a
    // console.log("123456".charAt(2)); // 2
    // console.log(str.at(0), str.at(-3)); // a e
    // console.log(str.indexOf("e")); // 4
    // console.log(str.split("")); // ['a', 'b', 'c', 'd', 'e', 'f', 'g']
    // console.log(str.split("e")); // ['abcd', 'fg']
    // console.log(Number("1234"));
    // console.log(parseInt("1234"));
    // console.log("1234" - 0, "1234" * 1);
    // console.log(String(123));
    // console.log(123 + "");
    // console.log(num.toString());
    // console.log(+true, true && 1); // 1
    // console.log(+false, false || 0); // 0
    // console.log(!!1, !!str, !!true, !![], Boolean(1)); // true true true true true
    // console.log(!!0, !!null, !!undefined, Boolean(0)); // false false false false
    // console.log(null == undefined); // true
    // console.log(null === undefined); // false
  }

  // 手写深拷贝
  function deepClone(obj) {
    if (typeof obj !== "object" || obj === null) {
      return obj;
    }

    let result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj instanceof Array || obj instanceof Object) {
        if (typeof obj[key] === "object") {
          result[key] = deepClone(obj[key]);
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }

  console.log(deepClone(obj));

  return <div className={styles.home}>这里是Home页面</div>;
};

export default Home;
