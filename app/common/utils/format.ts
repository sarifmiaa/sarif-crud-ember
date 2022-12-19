export function getDayOrdinalSuffix(day: number): 'th' | 'rd' | 'nd' | 'st' {
  const th = 'th';
  const rd = 'rd';
  const nd = 'nd';
  const st = 'st';

  if (day === 11 || day === 12 || day === 13) return th;

  let lastDigit = day.toString().slice(-1);

  switch (lastDigit) {
    case '1':
      return st;
    case '2':
      return nd;
    case '3':
      return rd;
    default:
      return th;
  }
}
