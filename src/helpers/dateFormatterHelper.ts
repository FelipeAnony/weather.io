export const dateFormatter = (timestamp: number) => {
  const date = new Date(timestamp * 1000);

  let tempWeekDay = date.getDay();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month =
    date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

  let weekDay = '';

  switch (tempWeekDay) {
    case 1:
      weekDay = 'Monday';
      break;
    case 2:
      weekDay = 'Tuesday';
      break;
    case 3:
      weekDay = 'Wednesday';
      break;
    case 4:
      weekDay = 'Thursday';
      break;
    case 5:
      weekDay = 'Friday';
      break;
    case 6:
      weekDay = 'Saturday';
      break;
    case 7:
      weekDay = 'Sunday';
      break;
  }

  return `${weekDay}, ${day}/${month}`;
};
