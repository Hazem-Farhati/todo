import './App.css';
import ListTask from './component/ListTask';
import Task from './component/Task';
import Addtask from './component/Addtask';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Addtask/>
      
      <ListTask/>
    </div>
  );
}

export default App;
