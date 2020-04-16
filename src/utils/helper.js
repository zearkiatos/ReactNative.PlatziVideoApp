export const secondToTime = seconds => {
  const date = new Date(seconds * 1000);
  let h = ('0' + date.getUTCHours().toString()).slice(-2);
  let m = ('0' + date.getUTCMinutes().toString()).slice(-2);
  let s = ('0' + date.getUTCSeconds().toString()).slice(-2);
  return `${m}:${s}`;
};
