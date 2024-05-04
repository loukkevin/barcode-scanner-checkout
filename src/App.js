import './App.css';
import Scanner from './Components/BarcodeScanner';
import { useState } from 'react';
import { Container } from '@mui/material'
import Button from '@mui/material/Button';

function App() {

  const [scannedValue, setScannedValue] = useState('Initial Value');
  const [totalValue, setTotalValue] = useState(0);
  const [scannedCodes, setScannedCodes] = useState([]);

  const handleCapture = (detected) => {

    console.log(scannedCodes.length);

    const value = detected.rawValue
    console.log(value);
    setScannedValue(value);

    if (scannedCodes.length === 0 || !scannedCodes.includes(value)) {
      console.log("new code!");
      const numberValue = parseInt(value.split("$")[1]);
      console.log("Number value", numberValue);
      setTotalValue(totalValue + numberValue);

      addCode(value);
    } else {
      console.log("duplicate code!");
    }
  }

  const addCode = item => {
    setScannedCodes(currentCodes => [...currentCodes, item]);
};

  const handleReset = () => {
    console.log("Scanned codes: ", scannedCodes);
  }

  return (
    <div className="App">
      <header className="App-header">
        {scannedValue}
        <Scanner
          onCapture={handleCapture}
        />
      </header>
      <Container>
        <Button onClick={handleReset}>
          ${totalValue}
        </Button>
      </Container>
    </div>
  );
}

export default App;
