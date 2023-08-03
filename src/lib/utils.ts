function formatTimeWithLeadingZeros(value: number) {
  return value < 10 ? "0" + value : value;
}

export function getCurrentTime24HourFormat() {
  const currentTime = new Date();
  const hours = formatTimeWithLeadingZeros(currentTime.getHours());
  const minutes = formatTimeWithLeadingZeros(currentTime.getMinutes());
  return [hours, minutes];
}
