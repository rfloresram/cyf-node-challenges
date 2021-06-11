import logo from './logo.svg';
import harrow from './data/Harrow.json'
import './App.css';


function App() {

fetch("http://localhost:5000/pharmacies")
  .then((response) => response.json())
  .then((data) => console.log(data));

  return (
    <div className="App">
      <h1>London mini guide</h1>

      <div></div>

      <label for="cities">Choose a city: </label>

      <select name="cities" id="cities">
        <option value="harrow">Harrow</option>
        <option value="heathrow">Heathrow</option>
        <option value="stratford">Statford</option>
      </select>

      <div>
        <button>Pharmacies</button>
        <button>Schools & Colleges</button>
        <button>Hospitals</button>
        <button>Doctors</button>
      </div>

      {/* table with fake data */}

      <div>
        <table>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Website</th>
            </tr>
          </thead>

          <tbody>
            {harrow.pharmacies.map((entry, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td>{entry.name}</td>
                  <td>{entry.phone}</td>
                  <td>{entry.address}</td>
                  <td>{entry.website}</td>
                </tr>
              );
            })}
        
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
