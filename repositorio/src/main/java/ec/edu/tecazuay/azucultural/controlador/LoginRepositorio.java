/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.tecazuay.azucultural.controlador;

import ec.edu.tecazuay.azucultural.modelo.Persona;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

/**
 *
 * @author alumno
 */
public interface LoginRepositorio extends CrudRepository<Persona, Long>{
    @Query("Select u from Persona u where u.usuario = :usu and u.contrasenia = :pass")
Persona validarUsuario(@Param("usu")String usu,@Param("pass")String pass);
}
