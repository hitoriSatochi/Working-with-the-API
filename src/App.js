import "bootstrap/dist/css/bootstrap.min.css";

import './App.css'

import Header from './commponents/header'
import Footer from './commponents/footer'



function App() {
  return (
    <div className='app'>
      <Header/>
      <h2>Home page</h2>
      
      <Footer/>
    </div>
  );
}

export default App;
