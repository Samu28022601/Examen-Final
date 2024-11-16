import React, { useState } from "react";

const ReservaForm = () => {
  const [reserva, setReserva] = useState({
    nombreCliente: "",
    fechaInicio: "",
    fechaFin: "",
    tipoHabitacion: "Sencilla",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReserva({ ...reserva, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/reservas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reserva),
      });
      if (response.ok) {
        alert("Reserva guardada correctamente.");
        // Actualiza la lista de reservas
        window.location.reload();
      } else {
        alert("Error al guardar la reserva.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombreCliente"
        placeholder="Nombre del Cliente"
        value={reserva.nombreCliente}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="fechaInicio"
        value={reserva.fechaInicio}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="fechaFin"
        value={reserva.fechaFin}
        onChange={handleChange}
        required
      />
      <select
        name="tipoHabitacion"
        value={reserva.tipoHabitacion}
        onChange={handleChange}
      >
        <option value="Sencilla">Sencilla</option>
        <option value="Doble">Doble</option>
        <option value="Suite">Suite</option>
      </select>
      <button type="submit">Guardar Reserva</button>
    </form>
  );
};

export default ReservaForm;
