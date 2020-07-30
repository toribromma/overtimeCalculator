import React, {useState, useEffect} from 'react';
import './App.css';
import useDebounce from "./utils/debounceHook";
import Overtime from "./utils/overtimecalc"

function App() {

  const [overtime, setOvertime] = useState({
    hour: 0,
    minute: 0,
  });

  const [conversion, setConversion] = useState({
    hourConverted: 0,
    minuteConverted: 0,
  });

  const [error, setError] = useState("");

  const debouncedSearchTerm = useDebounce(overtime, 500);

  useEffect(() => {
    // document.title = "Wikipedia Searcher";
    if (!overtime) {
      return;
    }
    if (debouncedSearchTerm) {
      
      
    }
  }, [debouncedSearchTerm]);



  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // if (name === "password") {
    //   value = value.substring(0, 15);
    // }

    // Updating the input's state
    setOvertime({...overtime, [name]: value })

  };



  return (

    <div className="App">
      <form className="form">
          <input
            value={overtime.hour}
            name="hour"
            onChange={handleInputChange}
            type="text"
            placeholder="hour"
          />
          <input
            value={overtime.minute}
            name="minute"
            onChange={handleInputChange}
            type="text"
            placeholder="minute"
          />
          <div>
          <span>{conversion.hourConverted}</span>
          <span>{conversion.minuteConverted}</span>
          </div>
          </form>
    </div>  
  );
}

export default App;
