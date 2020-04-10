import React from 'react';
import DayPicker from 'react-day-picker';

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
    border: '1px solid #BDBDBD',
    margin: 0,
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
  return (
    <div>
      <DayPicker
        canChangeMonth={false}
        className="Birthdays"
        renderDay={renderDay}
      />
    </div>
  );
}
