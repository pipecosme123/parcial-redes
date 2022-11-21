import '../css/DevicesCard.css';

function DevicesCard({ getInfotmation }) {
    return (
        <div className='Devives'>
            <div className="DevicesCard" onClick={()=> getInfotmation("ESP32")}>
                <h3>OBJETO IoT - ESP32</h3>
            </div>
            <div className="DevicesCard" onClick={()=> getInfotmation("device_http")}>
                <h3>OBJETO IoT - HTTP</h3>
            </div>
        </div>
    );
}

export default DevicesCard;
