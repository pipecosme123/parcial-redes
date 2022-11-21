import axios from "axios";

export const useGetData = () => {

    const getData = (device, variable) => {

        let ubidots = new Promise((resolve) => {
            axios.get(`http://industrial.api.ubidots.com/api/v1.6/devices/${device.toLowerCase()}/${variable}/values`, {
                params: {
                    token: 'BBFF-rxXZIs5YIdgTGbyJq0uie3wstaRzq9'
                }
            }).then(response => {
                resolve(response.data.results);
            }).catch(e => {
                console.log(e);
            })
        })
        return ubidots;
    }

    return {
        getData
    }
}