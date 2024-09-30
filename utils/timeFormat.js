export const convertToAMPM = (time) => {
  let [hour, minute] = time.split(':');
  hour = parseInt(hour, 10);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12 || 12;
  return `${hour}:${minute} ${ampm}`;
};