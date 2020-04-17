/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.tecazuay.azucultural.vista;

import ec.edu.tecazuay.azucultural.controlador.LoginRepositorio;
import ec.edu.tecazuay.azucultural.controlador.PersonaRepositorio;
import ec.edu.tecazuay.azucultural.modelo.Login;
import ec.edu.tecazuay.azucultural.modelo.Persona;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
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
 * @author Fernando
 */
@CrossOrigin
@RestController
@RequestMapping("/login")
public class LoginRest {
     @Autowired
    LoginRepositorio loginRepositorio;

    @GetMapping("")
    public List<Login> listar() {
        return loginRepositorio.findAll();
    }

    @GetMapping("/{idLogin}")
    public Login recuperar(@PathVariable Long idLogin) {
        return loginRepositorio.findById(idLogin).get();
    }

    @PostMapping("")
    public Login guardar(@RequestBody Login log) {
        return loginRepositorio.save(log);
    }

    @DeleteMapping("/{idLogin}")
    public void borrar(@PathVariable Long idLogin) {
        loginRepositorio.deleteById(idLogin);
    }
    
    @PutMapping("/{idLogin}") 
    public Login actualizar(@RequestBody Login log) {
        return loginRepositorio.save(log);
    }
    
}
