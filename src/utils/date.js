/* eslint-disable */
const MONTHS = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export function isSameDay(a_date, b_date) {
  const date = new Date(a_date);
  const now = new Date(b_date);

  date.setHours(0, 0, 0, 0);
  now.setHours(0, 0, 0, 0);

  return date.getTime() === now.getTime();
}

function isToday(_date) {
  return isSameDay(_date, new Date());
}

function isYesterday(_date) {
  return isSameDay(_date, +new Date() - 24 * 60 * 60 * 1000);
}

export function isAfter(oneDay, otherDay) {
  if (new Date(oneDay) >= new Date(otherDay)) {
    return true;
  }
  return false;
}

function getComponents(_date) {
  const date = _date;

  const h = date.getHours();
  const HH = h < 10 ? `0${h}` : h;

  const m = date.getMinutes();
  const mm = m < 10 ? `0${m}` : m;

  return {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear(),
    hours: HH,
    minutes: mm,
  };
}

function getYear(year) {
  const date = new Date();
  if (+year === date.getFullYear()) {
    return '';
  }
  return ` ${year}`;
}

export function format(_date, format = null) {
  const date = _date ? new Date(_date) : new Date();
  const { hours: h, minutes: m, day, month, year } = getComponents(new Date(date));
  const time = `${h}:${m}`;

  if (format == null || format == '') {
    if (isToday(_date)) {
      return `сегодня в ${time}`;
    }

    if (isYesterday(_date)) {
      return `вчера в ${time}`;
    }
    return `${day} ${MONTHS[month]}${getYear(year)}, ${time}`;
  }

  return `${day} ${MONTHS[month]}${getYear(year)}, ${time}`;
}

export function formatToRFC3339(_date = new Date()) {
  const date = new Date(_date);

  const [m, d, year] = date.toLocaleDateString('en-US').split('/');
  const month = Number(m).toLocaleString(undefined, { minimumIntegerDigits: 2 });
  const day = Number(d).toLocaleString(undefined, { minimumIntegerDigits: 2 });

  const dateTime = `${year}-${month}-${day}T${date.toLocaleTimeString('ru-RU')}`;
  const offset = date.getTimezoneOffset() / 60;

  const dateStr = `${dateTime}${offset < 0 ? '+' : ''}${(-1 * offset).toLocaleString(undefined, {
    minimumIntegerDigits: 2,
  })}:00`;
  return dateStr;
}
