/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.tecazuay.azucultural.vista;

import ec.edu.tecazuay.azucultural.controlador.LoginRepositorio;
import ec.edu.tecazuay.azucultural.controlador.PersonaRepositorio;
import ec.edu.tecazuay.azucultural.modelo.Persona;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author alumno
 */
@RestController
@RequestMapping("/persona")
public class PersonaRest {

    @Autowired
    PersonaRepositorio personaRepositorio;

    @GetMapping("")
    public List<Persona> listar() {
        return personaRepositorio.findAll();
    }

    @GetMapping("/{idPersona}")
    public Persona recuperar(@PathVariable Long idPersona) {
        return personaRepositorio.findById(idPersona).get();
    }

    @PostMapping("")
    public Persona guardar(@RequestBody Persona person) {
        return personaRepositorio.save(person);
    }

    @DeleteMapping("/{idPersona}")
    public void borrar(@PathVariable Long idPersona) {
        personaRepositorio.deleteById(idPersona);
    }
    
    /*@PutMapping("") 
    public Persona crear(@RequestBody Persona person) {
        return personaRepositorio.save(person);
    }*/

    @Autowired
    LoginRepositorio loginRepositorio;

    @RequestMapping(value = "/{usuario}/{contrasenia}", method = RequestMethod.GET)
    @ResponseBody

    public Persona login(@PathVariable String usuario, @PathVariable String contrasenia) {
        return loginRepositorio.validarUsuario(usuario, contrasenia);
    }
}
