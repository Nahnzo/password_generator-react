import React, {} from "react";
import './App.css';
import Password from "./components/password/Password";

function App() {

  return (
      <div className="App">
        <div className='wrapper'>
          <Password/>
          <p className='lowerCaseLetters'>a</p>
          <p className='symbols'>!</p>
        </div>
      </div>
  );
}

export default App;
