import '../css/InformarionDevice.css';

const InformarionDevice = ({ name_device, luz, dis, alerta }) => {

    const fecha = (ubidots_fecha) => {
        let newFecha = new Date(ubidots_fecha);
        let fechaF = `${newFecha.getDate()}/${newFecha.getMonth() + 1}/${newFecha.getFullYear()}`
        return fechaF;
    }

    const hora = (ubidots_fecha) => {
        let newFecha = new Date(ubidots_fecha);
        let fechaF = `${newFecha.getHours() - 12}:${newFecha.getMinutes()}:${newFecha.getSeconds()} ${newFecha.getHours() < 12 ? "AM": "PM"}`
        return fechaF;
    }

    return (
        <div className='InformarionDevice'>
            <h1 className={`name_device ${name_device}`}>{name_device === "device_http" ? "HTTP" : name_device.toUpperCase()}</h1>
            <div className='tarjetas'>
                <div className={`DevicesCard ${name_device}`}>
                    <h3>ILUMINACIÓN</h3>
                    <h1>{luz[0].value}</h1>
                </div>
                <div className={`DevicesCard ${name_device}`}>
                    <h3>DISTANCIA</h3>
                    <h1>{dis[0].value}</h1>
                </div>
                <div className={`DevicesCard ${name_device}`}>
                    <h3>ALERTA</h3>
                    <h1>{alerta[0].value}</h1>
                </div>
            </div>
            <div className={`tabla ${name_device}`}>
                <table>
                    <thead>
                        <tr>
                            <th>N°</th>
                            <th>Iluminación</th>
                            <th>Distancia</th>
                            <th>Fecha</th>
                            <th>Hora</th>
                        </tr>
                    </thead>
                    <tbody>
                        {luz.map((data, key) => {
                            if (key < 30) {
                                return (
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{data.value}</td>
                                        <td>{dis[key].value}</td>
                                        <td>{fecha(data.timestamp)}</td>
                                        <td>{hora(data.timestamp)}</td>
                                    </tr>
                                )
                            }
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default InformarionDevice;