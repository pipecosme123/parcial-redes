
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto"
import '../css/Lineal.css';

function Lineal({ dataIoT }) {
    return (
        <div className='Devives'>
            <Line data={dataIoT} />
        </div>
    );
}

export default Lineal;
