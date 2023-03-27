import {getCurrentDate, dateConvert,timeInterval } from './index.js';

const checkFunc = () => {
  console.log(getCurrentDate());
  console.log(dateConvert("2022-02-25T10:41:51.000Z"));
  console.log(dateConvert(new Date()));
  console.log(timeInterval(new Date("2022-02-25T10:41:51.000Z"), new Date("2022-02-27T09:44:51.000Z")));
}

checkFunc()