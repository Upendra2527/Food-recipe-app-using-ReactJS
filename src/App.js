// App.js
import React, { useState } from 'react';
import Products from './Products';
import './App.css';

const App = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=13ee28f5&app_key=dbc27c91b0b03697518e107c5dce3d53&from=0&to=30&calories=591-722&health=alcohol-free`);
      const result = await response.json();
      setData(result.hits);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="app-container">
      <center>
        <div>
          <h3>Food Recipe App</h3>
          <form onSubmit={submitHandler} className="search-form">
            <label htmlFor="recipe">Enter the Recipe You Want to Search</label>
            <input
              type="text"
              id="recipe"
              name="recipe"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <br />
            <input type="submit" value="Search" name="submit" className="btn btn-primary" />
          </form>
          {data && data.length >= 1 ? <Products data={data} /> : <p>No data available.</p>}
        </div>
      </center>
    </div>
  );
};

export default App;
