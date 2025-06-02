import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hand Cricket 
          Plan of action - <br/>
          1) Make a similar frontend as in zomato <br/>
          2) Inplace of just adding 2 members in a room, we'll make a room in which you can add upto 10 players<br/> and then the room will itself decide who will play against whom
        </p>
      </header>
    </div>
  );
}

export default App;
