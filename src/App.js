import logo from './logo.svg';
// import './App.css';
import Front_page from './components/front_page';
import Service1 from './components/service1';
import Service2 from './components/service2';
import Service3 from './components/service3';
import Service4 from './components/service4';
import Contacts from './components/service5';
import Footer from './components/service6';
import { LLogin } from './components/LLogin';
import LoginForm from './components/LoginForm';

function App() {
  
  return (
    <div className="App">
      {/* <Front_page />
      <Service1 />
      <Service2 />
      <Service3 />
      <Service4 />
      <Contacts />
      <Footer /> */}
      {/* <LLogin /> */}
      <LoginForm />
      

    </div>
  );
}

export default App;
