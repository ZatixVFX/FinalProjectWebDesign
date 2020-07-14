let date = new Date();

date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

const moment = require("moment");

date = new Date(date);

date = moment().format("YYYY/MM/DD");

let time = new Date();

time = time.getHours + ":" + time.getMinutes();

time = moment().format("hh:mm");

console.log(time);
