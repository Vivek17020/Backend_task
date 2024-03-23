import React from 'react';
import './styles.css';

function CryptoData({ data }) {
  return (
    <div className="data-container">
      {data.map((item, index) => (
        <div key={index} className="data-item">
          <table className="data-table">
            <thead>
              <tr>
                <th colSpan="2">Volume</th>
              </tr>
            </thead>
            <tbody>
            
              <tr>
                <td>m5</td>
                <td>{item.volume.m5}</td>
              </tr>
              <tr>
                <td>h1</td>
                <td>{item.volume.h1}</td>
              </tr>
              <tr>
                <td>h6</td>
                <td>{item.volume.h6}</td>
              </tr>
              
              <tr>
                <td>h24</td>
                <td>{item.volume.h24}</td>
              </tr>
            </tbody>
          </table>
          <table className="data-table">
            <thead>
              <tr>
                <th colSpan="2">Price Change</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>m5</td>
                <td>{item.priceChange.m5}</td>
              </tr>
              <tr>
                <td>h1</td>
                <td>{item.priceChange.h1}</td>
              </tr>
              <tr>
                <td>h6</td>
                <td>{item.priceChange.h6}</td>
              </tr>
              <tr>
                <td>h24</td>
                <td>{item.priceChange.h24}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default CryptoData;
