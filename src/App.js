import logo from './logo.svg';
import './App.css';
import MylineChart from './Components/Mylinechart/MylineChart';
import Myareachart from './Components/Myareachart/Myareachart';

function App() {
  return (
    <div className="App">
      <MylineChart></MylineChart>

      <Myareachart></Myareachart>
    </div>
  );
}

export default App;
