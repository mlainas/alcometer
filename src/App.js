
import './App.css';
import { useState } from 'react';
import FillOptions from './FillOptions';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [time, setTime] = useState(0);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);


  function calculate(e) {
    e.preventDefault();
    const litres = bottles * 0.33;
    const grams = litres * 8 * 4.5;
    const burning = weight / 10;
    const gramsLeft = grams - (burning * time);
    
    let tulos = 0;
    if (gender === 'male') {
      tulos = (gramsLeft / (weight * 0.7));
    } else {
      tulos = (gramsLeft / (weight * 0.6));
    }
    setResult(tulos);
  }




  return (
    <div id="container">
      <h3>Calculating alcohol blood level</h3>
      <form onSubmit={calculate}>
        <div>
          <label>Weight </label>
          <input type="number"
            value={weight}
            onChange={e => setWeight(e.target.value)}/>
        </div>
        <div>
          <label>Bottles (0.33l) </label>
          <select type="number"
            value={bottles}
            onChange={e => setBottles(e.target.value)}>
            <FillOptions />
          </select>
        </div>
        <div>
          <label>Time (hour) </label>

          <select type="number"
            value={time}
            onChange={e => setTime(e.target.value)}>
            <FillOptions />
          </select>
        </div>

        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male"
            defaultChecked onChange={e => setGender(e.target.value)} />
          <label>Male</label>

          <input type="radio" name="gender" value="female" 
            onChange={e => setGender(e.target.value)} />
          <label>Female</label>
        </div>

        <div>
          <output>{result.toFixed(2)}</output>

          <button >Calculate</button>
        </div>
      </form>
    </div>
  );
}

export default App;
