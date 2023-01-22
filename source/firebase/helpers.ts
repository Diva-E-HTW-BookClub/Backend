import { intervalToDuration } from "date-fns";


function getDistanceInterval(firstDate: string, lastDate: string) {
    let first = new Date(firstDate);
    let last = new Date(lastDate);
    return intervalToDuration({ start: first, end: last });
    // => { years: y, months: M, days: d, hours: H, minutes: m, seconds: s }
  }
  
function getDistanceInMinutes(firstDate: string, lastDate: string) {
    let interval = getDistanceInterval(firstDate, lastDate);
    let distance = interval.minutes || 0;
    if (interval.hours) {
      distance = distance + interval.hours * 60;
    }
    return distance;
  }

export {getDistanceInMinutes}