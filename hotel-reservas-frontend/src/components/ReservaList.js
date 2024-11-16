import React from 'react';

const ReservaList = ({ reservas }) => {
  return (
    <ul>
      {reservas.map((reserva, index) => (
        <li key={index}>
          {reserva.nombre} - {reserva.fechaInicio} al {reserva.fechaFin} - {reserva.tipoHabitacion}
        </li>
      ))}
    </ul>
  );
};

export default ReservaList;