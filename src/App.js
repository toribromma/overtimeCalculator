import React, {useState, useEffect} from 'react';
import './App.css';
import useDebounce from "./utils/debounceHook";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '35ch',
    },
  },
  header: {
    marginTop: 200
  }
}));


function App() {

  const [overtime, setOvertime] = useState({
    initialHour: 0,
    initialMinute: 0,
  });

  const [conversion, setConversion] = useState({
    hourConverted: 0,
    minuteConverted: 0,
  });


  const debouncedSearchTerm = useDebounce(overtime, 2000);

  useEffect(() => {
    // document.title = "Wikipedia Searcher";
    if (!overtime) {
      return;
    }
    if (debouncedSearchTerm) {

        let hour = parseInt(overtime.initialHour)
        let minute = parseInt(overtime.initialMinute)
      
        let c = Math.floor((((hour * 60 + minute) * 1.5)/60))
        
        
        console.log(hour)
        console.log(minute)
        console.log(c)

        let d = Math.floor(((hour * 60 + minute) * 1.5) % 60)
        console.log(d)

        if (d < 10) {
          // console.log(`you worked ${hours}:0${minutes2} hours of OT`)
          setConversion({
            hourConverted: c,
            minuteConverted: d
          })

          }
          else {
          // console.log(`you worked ${hours}:${minutes2} hours of OT`)
          setConversion({
            hourConverted: c,
            minuteConverted: d
          })

          }
        
      
      
    }
  }, [debouncedSearchTerm]);



  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    setOvertime({...overtime, [name]: value })

  };

  const classes = useStyles();

  return (

    <div className="App">
      <h1 className={classes.header}>Overtime Calculator</h1>
      <h2>How many hours of Overtime did you complete?</h2>
      <form className={classes.root}>
          <TextField
            value={overtime.initialHour}
            name="initialHour"
            onChange={handleInputChange}
            type="text"
            placeholder="hour"
            label="Hours"
            id="outlined-basic" variant="outlined"
          />
          <TextField
            value={overtime.initialMinute}
            name="initialMinute"
            onChange={handleInputChange}
            type="text"
            placeholder="minute"
            label="Minutes"
            id="outlined-basic" variant="outlined"
          />
          </form>
          <h1>
          <span>You worked {conversion.hourConverted} hours</span>
          <span> and {conversion.minuteConverted} minutes!</span>
          </h1>
    </div>  
  );
}

export default App;
