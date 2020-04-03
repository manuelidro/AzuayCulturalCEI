/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.tecazuay.azucultural.vista;

import ec.edu.tecazuay.azucultural.controlador.EventoRepositorio;
import ec.edu.tecazuay.azucultural.modelo.Evento;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author alumno
 */
@RestController
@RequestMapping("/evento")
public class EventoRest {

    @Autowired
    EventoRepositorio eventoRepositorio;

    @GetMapping("")
    public List<Evento> listar() {
        return eventoRepositorio.findAll();
    }

    @GetMapping("/{idEvento}")
    public Evento recuperar(@PathVariable Long idEvento) {
        return eventoRepositorio.findById(idEvento).get();
    }

    @PostMapping("")
    public Evento guardar(@RequestBody Evento evento) {
        return eventoRepositorio.save(evento);
    }

    @DeleteMapping("/{idEvento}")
    public void borrar(@PathVariable Long idEvento) {
        eventoRepositorio.deleteById(idEvento);
    }

    /*@PutMapping("")
    public Evento crear(@RequestBody Evento evento) {
        return eventoRepositorio.save(evento);
    }*/
}
