/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.tecazuay.azucultural.vista;

import ec.edu.tecazuay.azucultural.controlador.UbicacionRepositorio;
import ec.edu.tecazuay.azucultural.modelo.Ubicacion;
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
@RequestMapping("/ubicacion")
public class UbicacionRest {

    @Autowired
    UbicacionRepositorio ubicacionRepositorio;

    @GetMapping("")
    public List<Ubicacion> listar() {
        return ubicacionRepositorio.findAll();
    }

    @GetMapping("/{idUbicacion}")
    public Ubicacion recuperar(@PathVariable Long idUbicacion) {
        return ubicacionRepositorio.findById(idUbicacion).get();
    }

    @PostMapping("")
    public Ubicacion guardar(@RequestBody Ubicacion ubi) {
        return ubicacionRepositorio.save(ubi);
    }

    @DeleteMapping("/{idUbicacion}")
    public void borrar(@PathVariable Long idUbicacion) {
        ubicacionRepositorio.deleteById(idUbicacion);
    }

    /*@PutMapping("")
    public Ubicacion crear(@RequestBody Ubicacion ubi) {
        return ubicacionRepositorio.save(ubi);
    }*/
}
