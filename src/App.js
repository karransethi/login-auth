import './App.css';
import SignUp from './components/SignUp';
import { AuthContextProvider } from './services/auth';

function App() {
  return (
    <AuthContextProvider>
    <div className="app">
      <div className='inner'>
      <div className='left-content'>
        <span className='head' style={{color:"#3b2f2f" }}>
        The best offer
       </span>
       <span className='head' style={{color:'#0033FF'}}>
        for your buisness
       </span>
       <p className='para'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
       </p>
      </div>
      </div>
      <div className='inner'>
          <div className='form-content'>
             <SignUp />
          </div>
      </div>
    </div>
    </AuthContextProvider>
  );
}

export default App;
