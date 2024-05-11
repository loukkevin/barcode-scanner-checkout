import './App.css';
import Scanner from './Components/BarcodeScanner';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CustomerTotal from './Components/CustomerTotal';
import ScanList from './Components/ScanList';

function App() {

  const [scannedValue, setScannedValue] = useState('');
  const [totalValue, setTotalValue] = useState(0);
  const [scannedCodes, setScannedCodes] = useState([]);
  const [isReset, setIsReset] = useState(false)
  const regex = /\d{1,3}\-\$\d*/gm;
  const overrideRegex = /9{3}\-\$\d*/gm;

  const handleCapture = (detected) => {

    const value = detected.rawValue;

    if (regex.test(value)){
      if (!isReset) {
        if (value !== scannedValue && (scannedCodes.length === 0 || !scannedCodes.includes(value) || overrideRegex.test(value))) {
          setScannedValue(value);
          const numberValue = parseInt(value.split("$")[1]);
          setTotalValue(totalValue + numberValue);
  
          addCode(value);
        } else {
          console.log("duplicate code!");
        }
      } else { //handle resetting scanner
        setIsReset(false); 
      }
    } else {
      console.log("Detected invalid code!", value);
    }
  }

  const addCode = item => {
    
    setScannedCodes(currentCodes => [...currentCodes, item]);
  };

  const handleReset = () => {
    setIsReset(true);
    setTimeout(null, 5000);
    setScannedCodes([]);
    setTotalValue(0);
  }

  return (
    <div className="App">
      <header className="App-header">
        <CustomerTotal
          lastScanned={scannedValue}
          totalCount={scannedCodes.length}
          totalValue={totalValue}
        />
        <Button onClick={handleReset} variant='outlined'>
          {isReset ? "RESETTING" : "RESET"}
        </Button>
        <div style={{ "height": "10px" }}></div>
        <div style={{ "height": "10px" }}></div>
        <div style={{ "height": "200px" }}>
          <Scanner
            onCapture={handleCapture}
          />
        </div>
      </header>
      <ScanList items={scannedCodes} />
    </div>
  );
}

export default App;
