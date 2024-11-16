import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ReservaForm = ({ onAddReserva }) => {
  const [nombre, setNombre] = useState('');
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [tipoHabitacion, setTipoHabitacion] = useState('');
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await axios.get('http://localhost:8080/reservas');
        setReservas(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReservas();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevaReserva = { nombre, fechaInicio, fechaFin, tipoHabitacion };
      const response = await axios.post('http://localhost:8080/reservas', nuevaReserva);
      onAddReserva(response.data);
      setNombre('');
      setFechaInicio('');
      setFechaFin('');
      setTipoHabitacion('');
      setReservas([...reservas, response.data]); // Actualizar la lista de reservas
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Formulario de Reserva</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input 
            type="text" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
          />
        </label>
        <label>
          Fecha de inicio:
          <input 
            type="date" 
            value={fechaInicio} 
            onChange={(e) => setFechaInicio(e.target.value)} 
          />
        </label>
        <label>
          Fecha de fin:
          <input 
            type="date" 
            value={fechaFin} 
            onChange={(e) => setFechaFin(e.target.value)} 
          />
        </label>
        <label>
          Tipo de habitación:
          <select value={tipoHabitacion} onChange={(e) => setTipoHabitacion(e.target.value)}>
            <option value="Sencilla">Sencilla</option>
            <option value="Doble">Doble</option>
            <option value="Suite">Suite</option>
          </select>
        </label>
        <button type="submit">Reservar</button>
      </form>
      <h2>Reservas Actuales</h2>
      <ul>
        {reservas.map(reserva => (
          <li key={reserva.id}>
            Nombre: {reserva.nombre}, Fecha de inicio: {reserva.fechaInicio}, Fecha de fin: {reserva.fechaFin}, Tipo de habitación: {reserva.tipoHabitacion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservaForm;