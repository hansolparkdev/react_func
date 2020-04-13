import React, { useState } from 'react';
import DayPicker from 'react-day-picker';
import { Helmet } from 'react-helmet';

const birthdays = {
  3: ['보험', 'Gianni'],
  8: ['보험'],
  9: ['보험'],
  12: ['보험', 'Giorgia'],
  18: ['보험'],
  22: ['보험', 'Luigi'],
  25: ['보험'],
  26: ['보험'],
};
const foo = (date) => {
  console.log(date, '에 할일 목록 출력');
};

function renderDay(day) {
  const date = day.getDate();
  const dateStyle = {
    position: 'absolute',
    color: 'lightgray',
    top: 0,
    left: '10px',
    fontSize: 20,
    fontWeight: 500,
  };
  const birthdayStyle = {
    fontSize: '0.8em',
    textAlign: 'right',
  };
  const cellStyle = {
    height: '150px',
    width: '150px',
    margin: 0,
    padding: 0,
    position: 'relative',
  };
  const toList = {
    position: 'absolute',
    color: 'lightgray',
    bottom: '10px',
    right: '10px',
    fontSize: 20,
    fontWeight: 500,
  };
  return (
    <div style={cellStyle}>
      <div style={dateStyle}>
        <button type="button" onClick={() => { foo(date); }}>
          {date}
        </button>
      </div>
      <div style={toList}>
        {birthdays[date]
          && birthdays[date].map((name, i) => (
            <div key={i} style={birthdayStyle}>
              <button type="button">{name}</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default function Example() {
  const modifiers = {
    allday: { daysOfWeek: [0, 1, 2, 3, 4, 5, 6] },
    birthday: new Date(2020, 3, 10),
    disabled: { daysOfWeek: [6] },
    monday: { daysOfWeek: [1] },
  };
  const modifiersStyles = {
    allday: {
      padding: '0px',
    },
  };
  const MONTHS = [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ];
  const WEEKDAYS_LONG = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  const WEEKDAYS_SHORT = ['일', '월', '화', '수', '목', '금', '토'];

  return (
    <div>
      <Helmet>
        <style>
          {`
            .DayPicker-Day{
              border: 1px solid #BDBDBD;
            }
            .DayPicker-Weekday {
              border: 1px solid #BDBDBD;
            }
          `}
        </style>
      </Helmet>
      <DayPicker
        canChangeMonth={false}
        modifiers={modifiers}
        className="Birthdays"
        renderDay={renderDay}
        months={MONTHS}
        weekdaysLong={WEEKDAYS_LONG}
        weekdaysShort={WEEKDAYS_SHORT}
        modifiersStyles={modifiersStyles}
        locale="ko"
      />
    </div>
  );
}
