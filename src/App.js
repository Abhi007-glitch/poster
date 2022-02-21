import Header from './component/Header/Header';
import Footer from './component/Footer/Footer'
import './App.css';
import ComponentB1 from './component/ComponentB1/ComponetB1';
import ComponentT1 from './component/ComponentT1/ComponentT1';


function App() {
  return (
    <div className="App" width = "device-width">
      <Header />
     
      <ComponentT1 />
      <ComponentB1 />

      <Footer />
    </div>
  );
}

export default App;
