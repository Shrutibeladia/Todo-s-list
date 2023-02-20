import logo from './logo.svg';
import './App.css';
import Header from './mycomponents/Header';
import Todos from './mycomponents/Todos';
import Footer from './mycomponents/Footer';
function App() {
  return (
       <>
       <Header title="Shruti's Todos List"/>
       <Todos />
       <Footer />

       </>
  );
}

export default App;
