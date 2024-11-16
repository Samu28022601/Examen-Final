import React, { useState } from 'react';
import ReservaForm from './components/ReservaForm';
import ReservaList from './components/ReservaList';
import Home from './components/Home';
import './App.css';

function App() {
  const [reservas, setReservas] = useState([]);

  const addReserva = (nuevaReserva) => {
    setReservas([...reservas, nuevaReserva]);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Hotel Reservas</h1>
      </header>
      <main className="main-content">
        <section className="form-section">
          <ReservaForm onAddReserva={addReserva} />
        </section>
        <section className="list-section">
          <ReservaList reservas={reservas} />
        </section>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 Hotel Reservas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;