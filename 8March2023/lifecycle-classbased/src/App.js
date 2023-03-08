import './App.css';
import Counter from './Counter';
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState(["user1", "user2", "user3"]);

  const addUser = () => {
    var user = "user" + (users.length + 1);
    setUsers(users.concat(user));
  }
  return (
    <div className="App">
      <button onClick={addUser}>Add Users</button>
      <h1>The count of users in App Component is  {users.length}</h1>
      <Counter users={users}></Counter>
    </div>
  );
}
export default App;
