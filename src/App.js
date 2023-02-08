import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddToDoForm from './components/AddToDoForm';
import ToDoList from './components/ToDoList';
import TotalCompletedToDos from './components/TotalCompletedToDos';

function App() {
  return (
    <div className="container bg-white p-4 mt-5">
      <h1>
        My ToDo List
      </h1>
      <AddToDoForm />
      <ToDoList />
      <TotalCompletedToDos />
    </div>
  );
}

export default App;
