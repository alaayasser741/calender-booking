import { useState } from 'react';
import Calendar from 'react-calendar';
import './App.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const isDisabled = ({ date }) => {
    const disabledDays = [1, 6, 8, 10, 13, 16, 18, 20, 22, 27, 29];
    return !disabledDays.includes(date.getDate());
  };

  const tileClassName = ({ date }) => {
    if (date instanceof Date) {
      const uniqueColorDays = [1, 6, 8, 10, 13, 16, 18, 20, 22, 27, 29];
      if (uniqueColorDays.includes(date.getDate())) {
        return 'available__days';
      }
    }
    return '';
  };

  const handleClickDay = (date) => {
    if (date && !isDisabled({ date })) {
      const formattedDate = date.toLocaleDateString('en-US');
      setSelectedDate(formattedDate);
      console.log(formattedDate);
    }
  };

  return (
    <div>
      <Calendar
        minDate={new Date()}
        className="calendar"
        view="month"
        onClickDay={handleClickDay}
        tileDisabled={isDisabled}
        tileClassName={tileClassName}
        value={selectedDate}
      />
    </div>
  );
}

export default App;
