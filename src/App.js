import React from 'react';
import './App.css';

function App() {

  const [overtime, setOvertime] = useState({
    hour: 0,
    minute: 0,
    otHour: 0,
    otMinute: 0

  });

  return (

    <div className="App">
      <form className="form">
          <input
            value={this.state.hour}
            name="hour"
            onChange={this.handleInputChange}
            type="text"
            placeholder="hour"
          />
          <input
            value={this.state.minute}
            name="minute"
            onChange={this.handleInputChange}
            type="text"
            placeholder="minute"
          />
          </form>
    </div>  
  );
}

export default App;
