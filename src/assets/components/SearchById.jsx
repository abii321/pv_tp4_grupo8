import { useState } from 'react';

function SearchById({ setSearchId }) {
  const [inputId, setInputId] = useState('');

  const buscar = (e) => {
    e.preventDefault();
    setSearchId(inputId);
  };

  return (
    <form onSubmit={buscar}>
      <input
        type="number"
        placeholder="Buscar producto por ID"
        value={inputId}
        onChange={(e) => setInputId(e.target.value)}
        required
      />
      <button type="submit">Buscar</button>
    </form>
  );
}

export default SearchById;