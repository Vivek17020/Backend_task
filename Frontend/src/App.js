import React, { useState, useEffect } from 'react';
import { getData } from './api';
import CryptoData from './CryptoData';
import './styles.css';

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [displayData, setDisplayData] = useState(false);

  const fetchData = async () => {
    try {
      const data = await getData();
      setCryptoData(data);
      setDisplayData(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const resetData = () => {
    setCryptoData([]);
    setDisplayData(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="heading">Crypto Data</h1>
      {!displayData && <button className="button" onClick={fetchData}>Get Data</button>}
      {displayData && (
        <div className="card">
          <button className="button" onClick={resetData}>Reset Data</button>
          <CryptoData data={cryptoData} />
        </div>
      )}
    </div>
  );
}

export default App;
