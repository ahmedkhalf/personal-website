export default function (date: Date) {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  const daySuffix = (d: number) => {
    if (d > 3 && d < 21) return 'th'; // special case for 11th to 20th
    switch (d % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
    }
  };

  return `${month} ${day}<sup>${daySuffix(day)}</sup>, ${year}`;
}