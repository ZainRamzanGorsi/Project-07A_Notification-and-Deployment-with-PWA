import './App.css';
import initNotification  from './services/firebaseService'
function App() {
  return (
    <div className="App">
      <h1>Most Wellcome!</h1>
      <h2>Deployment and Notification with PWA by ZAIN RAMZAN GORSI</h2>
      <button onClick={initNotification}>Configuration</button>
     
    </div>
  );
}

export default App;
