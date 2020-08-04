import React, {useState, useEffect} from 'react';
import './App.css';
import useDebounce from "./utils/debounceHook";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '33%',
    },
  },
  header: {
    marginTop: 5,
    marginBottom: 10,
    margin: "auto",
    backgroundColor: "#00C9A7",
    border: "#4B4453 solid 2px",
    borderRadius: "10px",
    color: "white",
    padding: 10,
    width: "90%"
  },
  textField: {
    backgroundColor: "#FEFEDF",
    color: "#4B4453",
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
    value: false
  });


  const debouncedSearchTerm = useDebounce(overtime, 2000);

  useEffect(() => {
    // document.title = "Wikipedia Searcher";
    if (!conversion.value) {
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
            minuteConverted: d,
            value: true
          })

          }
          else {
          // console.log(`you worked ${hours}:${minutes2} hours of OT`)
          setConversion({
            hourConverted: c,
            minuteConverted: d,
            value: true
          })

          }
        
      
      
    }
  }, [debouncedSearchTerm]);



  const handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    // Updating the input's state
    setOvertime(
      {...overtime, [name]: value})
    
    setConversion({...overtime, value:true})


  };

  const classes = useStyles();

  return (

    <div className="App">
      <h1 className={classes.header}>Overtime Calculator</h1>
      <h2>How many hours of Overtime did you complete?</h2>
      <form className={classes.root}>
          <TextField className={classes.textField}
            value={overtime.initialHour}
            name="initialHour"
            onChange={handleInputChange}
            type="number"
            placeholder="hour"
            label="Hours"
            id="filled-basic" variant="filled"
          />
          <TextField className={classes.textField}
            value={overtime.initialMinute}
            name="initialMinute"
            onChange={handleInputChange}
            type="number"
            placeholder="minute"
            label="Minutes"
            id="filled-basic" variant="filled"
          />
          </form>
          {conversion.value ? 
          
          <h1 className={classes.header}>
          <span>You worked {conversion.hourConverted} hours</span>
          <span> and {conversion.minuteConverted} minutes!</span>
          </h1>
          :
          <h1 className={classes.header}>Type some numbas!</h1>
        }
          

    </div>
  );
}

export default App;
