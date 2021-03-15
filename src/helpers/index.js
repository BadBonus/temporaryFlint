export const periodOfNumbers = (maxNumber) => {
  const numbers = [];
  for (let index = 1; index <= maxNumber; index++) {
    numbers.push(index);
  }
  return numbers;
};

export const takeDatePeriodes = (date1, date2) => {
  const day1 = date1.getDate();
  const day2 = date2.getDate();
  const month1 = date1.getMonth();
  const month2 = date2.getMonth();
  const year1 = date1.getFullYear();
  const year2 = date2.getFullYear();
  let choosedMonthsWithDays = [];

  const countOfDays = (dynamicDate) =>
    33 -
    new Date(dynamicDate.getFullYear(), dynamicDate.getMonth(), 33).getDate();

  //разница месяцев
  function monthDiff(dateFrom, dateTo) {
    return (
      dateTo.getMonth() -
      dateFrom.getMonth() +
      12 * (dateTo.getFullYear() - dateFrom.getFullYear())
    );
  }

  //start вспомогательная функции
  const createMonthsObject = (date, differenceMonth) => {
    const months = [];
    for (let i = 0; i < differenceMonth; i++) {
      let dynamicDate = new Date(date.getTime());
      dynamicDate.setMonth(date.getMonth() + i);
      months.push({
        name: dynamicDate.toLocaleString("ru", { month: "long" }),
        days: periodOfNumbers(countOfDays(dynamicDate)),
      });
    }

    return months;
  };

  //end вспомогательные функции

  if (year1 > year2) {
    //Берем месяцы и дни в месяцах
    choosedMonthsWithDays = createMonthsObject(date2, monthDiff(date2, date1));
  }
  if (year1 < year2) {
    //Берем месяцы и дни в месяцах
    choosedMonthsWithDays = createMonthsObject(date1, monthDiff(date1, date2));
  }

  if (year2 === year1) {
    choosedMonthsWithDays.push({
      name: date1.toLocaleString("ru", { month: "long" }),
      days: periodOfNumbers(countOfDays(date1)),
    });
  }

  //Обрезание до стартового и после финишных чисел

  if (month1 === month2) {
    choosedMonthsWithDays[0].days = choosedMonthsWithDays[0].days.slice(
      day1 - 1,
      day2
    );
  } else {
    choosedMonthsWithDays[0].days = choosedMonthsWithDays[0].days.slice(
      day1 - 1
    );
    choosedMonthsWithDays[
      choosedMonthsWithDays.length - 1
    ].days = choosedMonthsWithDays[choosedMonthsWithDays.length - 1].days.slice(
      0,
      day2
    );
  }

  return choosedMonthsWithDays;
};
