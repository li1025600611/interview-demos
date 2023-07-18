/*
 * Author  rhys.zhao
 * Date  2022-08-19 17:48:33
 * LastEditors  Vincy.Li
 * LastEditTime  2023-07-18 16:28:33
 * Description home页面
 */
import React, { useEffect } from "react";
import styles from "./index.scss";

const Home = () => {
  const arr = [1, 2, 3, 1, 1, 1, 2, 3, 4, 3, 2, false, true, false, false];

  useEffect(() => {
    getMap();
    getFilter();
    getNoRepeat();
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

  return <div className={styles.home}>这里是Home页面</div>;
};

export default Home;
