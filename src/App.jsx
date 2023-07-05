import {useState} from "react";
import './App.css';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

function App() {
  const [selected, setSelected] = useState("");

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }

  let month;
  if (selected) {
    month = selected.toString().slice(4, 7)
  }

  let day;
  if (selected) {
    day = parseInt(selected.toString().slice(8, 10));
  }
  
  console.log(selected);
  console.log("Month", month)
  console.log("Day", day);

  return (
    <div className="App">
      <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
    </div>
  );
}

export default App;
