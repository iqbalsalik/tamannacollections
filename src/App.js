import './App.css';
import Header from "./components/Header";
import Body from './components/Body';
import SliderComponent from './components/SliderComponent';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App overflow-hidden">
      <Header />
      <Body />
      <SliderComponent />
      <Footer />
    </div>
  );
}

export default App;
