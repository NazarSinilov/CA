export const getCurrentDate = () => {
  return new Date();
}

export const dateConvert = (date) => {
  if(typeof date === 'string') {
      return new Date(date);
  } else {
      return date.toDateString();
  }
}

export const timeInterval = (date1, date2) => {
  const date1InMs = date1.getTime(); 
  const date2InMs = date2.getTime(); 
  const ms = Math.abs(date1 - date2);
  const diffDays = Math.floor(ms / (1000 * 60 * 60 * 24)); 
  const restHour =  Math.abs(diffDays * (1000 * 60 * 60 * 24) - ms);
  const diffHour = Math.floor(restHour / (1000 * 60 * 60));
  const restMin = Math.abs(diffHour * (1000 * 60 * 60) - restHour);
  const diffMin = Math.floor(restMin / (1000 * 60));
  return `diff date: ${diffDays} DD, ${diffHour} HH, ${diffMin} MM`;
}

// module.exports = {
//   getCurrentDate,
//   dateConvert,
//   timeInterval,
// }