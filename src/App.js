import logo from './logo.svg';
import './App.css';
import Link from './component/Home/Link/Link';
import Banner from './component/Home/Banner/Banner';
import Footer from './component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Link/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
