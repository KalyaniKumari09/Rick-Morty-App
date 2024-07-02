import React, { useState } from 'react';
import CharacterCard from './CharacterCard';
import '../components/CharacterList.css';

const CharacterList = ({ characters }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredCharacters = characters
    .filter((character) => character.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => sortOrder === 'asc' ? a.id - b.id : b.id - a.id);

  return (
    <div className="container">
      <div className="filters">
        <h2>Filters</h2>
        <div>
          <h3>Species</h3>
          <ul>
            <li><input type="checkbox" /> Human</li>
            <li><input type="checkbox" /> Mytholog</li>
            <li><input type="checkbox" /> Other Species...</li>
          </ul>
        </div>
        <div>
          <h3>Gender</h3>
          <ul>
            <li><input type="checkbox" /> Male</li>
            <li><input type="checkbox" /> Female</li>
          </ul>
        </div>
        <div>
          <h3>Origin</h3>
          <ul>
            <li><input type="checkbox" /> Unknown</li>
            <li><input type="checkbox" /> Post-Apocalyptic Earth</li>
            <li><input type="checkbox" /> Nuptia 4</li>
            <li><input type="checkbox" /> Other Origins...</li>
          </ul>
        </div>
      </div>
      <div className="main-content">
        <div className="search-sort">
          <div className="selected-filters">
            <h2>Selected Filters</h2>
            <span className="filter-tag">Human <button>X</button></span>
            <br />
            <span className="filter-tag">Nuptia 4 <button>X</button></span>
          </div>
          <div className="search">
            <input
              type="text"
              placeholder="Search by Name"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button>Search</button>
          </div>
          <div className="sort">
            
            <select value={sortOrder} onChange={handleSortOrderChange}>
            
              <option value="asc"> Ascending</option>
              <option value="desc"> Descending</option>
            </select>
          </div>
        </div>
        <div className="character-grid">
          {filteredCharacters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterList;
