import { useState } from 'react';
import DevicesCard from './components/DevicesCard';
import Home from './components/Home';
import InformarionDevice from './components/InformarionDevice';
import './css/App.css';
import { useGetData } from './hook/useGetData';

function App() {

  const { getData } = useGetData();
  const [nameDevice, setNameDevice] = useState("");
  const [luz, setLuz] = useState({});
  const [dis, setDis] = useState({});
  const [alerta, setAlerta] = useState({});


  const getInfotmation = async (device) => {
    setLuz(await getData(device, "iluminacion"));
    setDis(await getData(device, "distancia"));
    setAlerta(await getData(device, "encendido"));
    setNameDevice(device);
  }

  return (
    <div className="App">
      {/* <Header /> */}
      <div className='Container'>
        <Home />
        <DevicesCard getInfotmation={getInfotmation} />
        {nameDevice !== "" &&
          <div className='infoDevice'>
            <InformarionDevice name_device={nameDevice} luz={luz} dis={dis} alerta={alerta} />
          </div>
        }
      </div>
    </div>
  );
}

export default App;
