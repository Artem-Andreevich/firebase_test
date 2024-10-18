import Fbase from '../components/Fbase/Fbase';
import SignIn from '../components/SignIn/SignIn';
import SignUp from '../components/SignUp/SignUp';
import Upload from '../components/UploadFiles/Upload.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <p>Auth form</p>
      <SignIn />
      <p>Reg form</p>
      <SignUp />

      <p>Добавить в базу</p>
      <Fbase/>

      <p>Добавить в Storage</p>
      <Upload />
    </div>
  );
}

export default App;
