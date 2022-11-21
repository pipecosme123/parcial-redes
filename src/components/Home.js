import Logo from "../img/logo.svg"
import contexto from "../img/contexto.svg"
import '../css/Home.css';

function Home() {
    return (
        <div className="Home">
            <div className="img-logo">
                <img src={Logo} alt="" />
                <h1>Smart Street Lighting</h1>
            </div>
            <img src={contexto} alt="" />
            <div>
                <p><b><i>Smart Street Lighting</i></b> es un dispositivo de luz IoT que permite iluminar las calles de la ciudad de Cali, este dispositivo únicamente se enciende cuando detecta presencia de una persona a su alrededor, permitiendo economizar energía, ya que no permanece todo el tiempo encendida. Todos los dispositivos son monitoreados desde la página web oficial, donde se pueden apreciar los datos que el dispositivo está captando, tanto el nivel de luz del lugar como la distancia del objetivo</p>
            </div>

        </div>
    );
}

export default Home;
