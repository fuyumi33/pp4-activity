
import Navbar from './components/Header/Navbar';
import Carousel from './components/Body/Carousel';
import Card from './components/Body/Card';
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  
  return (
   
   
      <>
     
    <header>
    <Navbar/>
    </header>
        

        <Carousel/>

 <div className="container">
  <div className="row">
<Card/>
<Card/>
<Card/>
<Card/>
</div>    
 </div>

  <footer className="mt-3">
  <div className="container p-4">
    <div className="row">
      <Footer/>
      <Footer/>
      <Footer/>
      </div>
      </div>
      </footer>

</>
      
     
  );
}

export default App;
