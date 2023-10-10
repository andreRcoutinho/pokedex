import { useState } from 'react';

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div>
        <button onClick={() => setClicked(!clicked)}>
          {clicked ? 'In progress...' : 'Hello'}
        </button>
      </div>
    </>
  );
}

export default App;
