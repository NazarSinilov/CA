const getCurrentDate = () => {
  return new Date();
}

const dateConvert = (date) => {
  if(typeof date === 'string') {
      return new Date(date);
  } else {
      return date.toDateString();
  }
}

const timeInterval = () => {
  const date1 = new Date("2022-02-25T10:41:51.000Z").getTime(); 
  const date2 = new Date("2022-02-27T09:44:51.000Z").getTime(); 
  const ms = Math.abs(date1 - date2);
  const diffDays = Math.floor(ms / (1000 * 60 * 60 * 24)); 
  const restHour =  Math.abs(diffDays * (1000 * 60 * 60 * 24) - ms);
  const diffHour = Math.floor(restHour / (1000 * 60 * 60));
  const restMin = Math.abs(diffHour * (1000 * 60 * 60) - restHour);
  const diffMin = Math.floor(restMin / (1000 * 60));
  return `diff date: ${diffDays} DD, ${diffHour} HH, ${diffMin} MM`;
}

console.log(timeInterval());

module.exports = {
  getCurrentDate,
  dateConvert,
  timeInterval,
}