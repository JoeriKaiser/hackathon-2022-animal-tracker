import { useState } from 'react';
import './App.css';
import MainLayout from './components/layouts/MainLayout';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <MainLayout />
    </div>
  );
}

export default App;
