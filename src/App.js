import './App.css';
// import './css/Navbar.css'
import ClipLoader from "react-spinners/CircleLoader";
import Hero from './components/Hero';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
  return (
    <div className='app'>
    {
      loading? 
      <ClipLoader color={'#E87DA4'} loading={loading} size={120} />
      :
      <Hero/>
    }
      
    </div>
  );
}

export default App;
