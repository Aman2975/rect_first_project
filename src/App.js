// import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';

function App() {
  return (
    <>
    <Navbar title="textEditor" disable="disableText"/>
    {/* <Navbar /> */}
    {/* <Navbar title={4} disable="disableText"/> */}
    <div className="container">
    <TextForm title="Enter your Text here"/>
      
    </div>
    </>
  );
}

export default App;
