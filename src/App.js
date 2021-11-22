import './App.css';
import Adress from './Component/Profile/Adress';
import FullName from './Component/Profile/FullName';
import Profilephotos from './Component/Profile/Profilephotos';
import Img from '../src/img1.jpeg';
function App() {
  return (
    <div className="App">
<div className="card" style={{ width: "18rem" }}>
  <Profilephotos/>
  <div className="card-body">
    <h5 className="card-title"><FullName/></h5>
    <p className="card-text">
    <Adress/>
    </p>
  </div>
</div> 
    </div>
  );
}

export default App;
