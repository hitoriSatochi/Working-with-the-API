import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'

import Header from './commponents/header'
import Footer from './commponents/footer'
import { Home } from "./pages/Home";


function App() {
  return (
    <div className='app'>
      <Header/>
      
      <Home></Home>
      <Footer/>
    </div>
  );
}

export default App;
