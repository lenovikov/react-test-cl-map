import './App.css';
import MapContainer from './components/MapContainer/MapContainer';
import UserList from './components/UserList/UserList';

function App() {
  return (
    <div className="App">
      <h2 className="h-10">Тестовое задание Алексей Новиков</h2>
      <div className="flex">
        <div className="flex-1 mr-7">
          <h3 className="pl-8">List of Users</h3>
          <UserList />
        </div>
        <div className="flex-1">
          <h3>Building map</h3>
          <MapContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
