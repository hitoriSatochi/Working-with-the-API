import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import './styleCurrency.css'

function CurrencyMain() {
  const apiUrl = `https://www.cbr-xml-daily.ru/daily_json.js`;
  // State
  const [apiData, setApiData] = useState({});
  // Side effect
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data.Valute));
  }, [apiUrl]);

  return (
    <div className="text-center">
      <Table bordered striped hover variant="dark" size="sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">ID</th>
            <th scope="col">NumCode</th>
            <th scope="col">CharCode</th>
            <th scope="col">Nominal</th>
            <th scope="col">Name</th>
            <th scope="col">Value</th>
            <th scope="col">Previous</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(apiData).map(([key, subject], i) => (
            <tr key = {i}>
              <td>{i + 1}</td>
              <td>{subject.ID}</td>
              <td>{subject.NumCode}</td>
              <td>{subject.CharCode}</td>
              <td>{subject.Nominal}</td>
              <td>{subject.Name}</td>
              <td>{subject.Value}</td>
              <td>{(subject.Value - subject.Previous).toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CurrencyMain;