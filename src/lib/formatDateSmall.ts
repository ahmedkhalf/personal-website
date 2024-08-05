function pad(str: string) {
  if (str.length === 2) return str;
  return pad('0' + str);
}

export default function (date: Date) {
  const day = pad(date.getUTCDate().toString());
  const month = pad((date.getUTCMonth() + 1).toString());
  const year = date.getUTCFullYear().toString();

  return `${year}-${month}-${day}`;
}
