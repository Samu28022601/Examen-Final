package com.hotel.reservas.controller;

import com.hotel.reservas.model.Reserva;
import com.hotel.reservas.repository.ReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ReservaController {

    @Autowired
    private ReservaRepository reservaRepository;

    @PostMapping("/reservas")
    public Reserva crearReserva(@RequestBody Reserva reserva) {
        return reservaRepository.save(reserva);
    }

    @GetMapping("/reservas")
    public List<Reserva> obtenerReservas() {
        return reservaRepository.findAll();
    }

    // Agrega otros endpoints para actualizar y eliminar reservas
}