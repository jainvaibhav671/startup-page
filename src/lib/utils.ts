function formatTimeWithLeadingZeros(value: number) {
  return value < 10 ? "0" + value : value;
}

export function getCurrentTime24HourFormat() {
  const currentTime = new Date();
  const hours = formatTimeWithLeadingZeros(currentTime.getHours());
  const minutes = formatTimeWithLeadingZeros(currentTime.getMinutes());
  return [hours, minutes];
}

export const notion_token = process.env.NEXT_PUBLIC_NOTION_TOKEN;
export const database_id = process.env.NEXT_PUBLIC_DATABASE_ID;
