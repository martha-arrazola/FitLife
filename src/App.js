import './App.css';
import Cabecera from './components/Cabecera'
import MyForm from './components/Form'
import Getusers from './components/PeticionGET'
import enviarDatosAPI from './components/PeticionPOST'

function App() {



  return (
    <div className="App">
      <Cabecera />


      <Getusers />

      <enviarDatosAPI />

      <p>Regístrate</p>

      <MyForm />

    </div>




  );
}

export default App;
