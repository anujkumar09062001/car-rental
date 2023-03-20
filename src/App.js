import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app/assets/css/general.scss';
import './app/assets/css/style.scss';
import Navbar from './app/screens/Navbar';
import Home from './app/screens/Home';
import Footer from './app/screens/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
