import React, {useState, useEffect} from 'react';
import './App.css';
import useDebounce from "./utils/debounceHook";


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

  const debouncedSearchTerm = useDebounce(overtime, 2000);

  useEffect(() => {
    // document.title = "Wikipedia Searcher";
    if (!overtime) {
      return;
    }
    if (debouncedSearchTerm) {
        let a2 = overtime.hour * 60;
        let c = (((a2 + overtime.minute) * 1.5)/60).toString().split(".")
        let hours = c[0] 
        // console.log(c[1])
        let minutes = ((a2 + overtime.minute) * 1.5) % 60
        // console.log(minutes)
        let minutes2 = Math.floor(minutes)

        if (minutes < 10) {
          console.log(`you worked ${hours}:0${minutes2} hours of OT`)
          setConversion({
            hourConverted: hours,
            minuteConverted: minutes2
          })

          }
          else {
          console.log(`you worked ${hours}:${minutes2} hours of OT`)
          setConversion({
            hourConverted: hours,
            minuteConverted: minutes2
          })

          }
        
      
      
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
          <span>You worked {conversion.hourConverted}</span>
          <span> and {conversion.minuteConverted}</span>
          </div>
          </form>
    </div>  
  );
}

export default App;
