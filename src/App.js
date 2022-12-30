import './App.css';
import Link from './component/Home/Link/Link';
import Banner from './component/Home/Banner/Banner';
import Footer from './component/Footer/Footer';
import Foods from './component/Foods/Foods';
import Food from './component/Foods/Food';
import FoodsCard from './component/FoodsCard/FoodsCard';

function App() {
  return (
    <div className="App">
      <Link/>
      <Banner/>
      <Food/>
      <Foods/>
      <FoodsCard/>
      <Footer/>
    </div>
  );
}

export default App;
