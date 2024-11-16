import React, { useEffect, useState } from "react";

const ReservaList = () => {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const response = await fetch("http://localhost:8080/reservas");
        const data = await response.json();
        setReservas(data);
      } catch (error) {
        console.error("Error al obtener las reservas:", error);
      }
    };

    fetchReservas();
  }, []);

  return (
    <div>
      <h2>Lista de Reservas</h2>
      <ul>
        {reservas.map((reserva) => (
          <li key={reserva.id}>
            {reserva.nombreCliente} - {reserva.fechaInicio} a {reserva.fechaFin} ({reserva.tipoHabitacion})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservaList;
