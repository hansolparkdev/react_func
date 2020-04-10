import React from 'react';
import DayPicker from 'react-day-picker';

const birthdays = {
  3: ['보험', 'Gianni'],
  8: ['Elena'],
  9: ['Irene'],
  12: ['Paolo', 'Giorgia'],
  18: ['Claudia'],
  22: ['Maria', 'Luigi'],
  25: ['Simone'],
  26: ['Marta'],
};
const foo = () => {
  console.log('foo');
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
      <div style={dateStyle}>{date}</div>
      <div style={toList}>
        {birthdays[date]
          && birthdays[date].map((name, i) => (
            <div key={i} style={birthdayStyle}>
              <button type="button" onClick={foo}>{name}</button>
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
