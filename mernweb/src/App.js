import './App.css';
import Navbar from './components/Navbar';
function App() {

  // Check If User is Logged In

  
  return (
    <>
      <Navbar></Navbar>
    </>
  );
}

export default App;


// Now we have to Procted Out Route Like Without Login
// You can not go to Dashboard
// And After login you can not login again
// We need Protected Routes

// We Cant Acces Them If Auth is False

// Now we need to Change Navbar Dynamically