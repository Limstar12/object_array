let myname = "박혜지";
let [myemail, mycafe, mystudy] = ["phji0326@gmail.com", "cafe.naver.com/4thdraw", "react"];
let myinfo = ["phji0326@gmail.com", "cafe.naver.com/4thdraw", "react"]; //array
let myinfo2 = ["1", "2", "3", "4", "5"]; //array



let myArr = [...myinfo, ...myinf02]; //array 연결 es6
let myArr5 = [].concat(myinfo, myinfo2); // es5 array 연결함수 concat 이용
let [mymail, newmyinfoArr] = [myemail, ...myinfo]; //전개연산자 phji0326@gmail.com phji0326@gmail.com cafe.naver.com/4thdraw react

let [myarr0, myarr1, ...lastarra11] = myinfo2; // array를 단수변수로 갈라놓는거

console.log(myinfo[0]); // phji0326@gmail.com
console.log(myinfo); // phji0326@gmail.com cafe.naver.com/4thdraw react
console.log(myArr[5]); // 3
console.log(lastarra11[1]);// 4
