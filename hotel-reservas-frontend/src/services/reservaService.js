import axios from 'axios';

const API_URL = 'http://localhost:8080/reservas';

const obtenerReservas = () => axios.get(API_URL);
const crearReserva = (reserva) => axios.post(API_URL, reserva);
const eliminarReserva = (id) => axios.delete(`${API_URL}/${id}`);

export default {
    obtenerReservas,
    crearReserva,
    eliminarReserva
};
