/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.tecazuay.azucultural.vista;

import ec.edu.tecazuay.azucultural.controlador.TipoPersonaRepositorio;
import ec.edu.tecazuay.azucultural.modelo.TipoPersona;
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
@RequestMapping("/TipoPersona")
public class TipoPersonaRest {

    @Autowired
    TipoPersonaRepositorio tipoRepositorio;

    @GetMapping("")
    public List<TipoPersona> listar() {
        return tipoRepositorio.findAll();
    }

    @GetMapping("/{idTipoPersona}")
    public TipoPersona recuperar(@PathVariable Long idTipoPersona) {
        return tipoRepositorio.findById(idTipoPersona).get();
    }

    @PostMapping("")
    public TipoPersona guardar(@RequestBody TipoPersona tipoPersona) {
        return tipoRepositorio.save(tipoPersona);
    }

    @DeleteMapping("/{idTipoPersona}")
    public void borrar(@PathVariable Long idTipoPersona) {
        tipoRepositorio.deleteById(idTipoPersona);
    }

    /*@PutMapping("")
    public TipoPersona crear(@RequestBody TipoPersona tipoPersona) {
        return tipoRepositorio.save(tipoPersona);
    }*/
}
