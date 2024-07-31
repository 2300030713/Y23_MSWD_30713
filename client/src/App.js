import logo from './logo.svg';
import './App.css';
import klulogo from  './klulogo.jpg'
import Header from './components/Header';
import Footer from './components/Footer';
import Faculty from './components/Faculty';
import Student from './components/Student';
import Courses from './components/Courses';
import User from './components/User';
const user={logo:klulogo}

function App() {
  return (
    <div className="App">
     <Header/>
     <Faculty/>
     <Courses/>
     <Student/>
     <Footer/> 
     <User/>
     


    </div>
    
  );
}

export default App;
