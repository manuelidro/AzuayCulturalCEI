/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package ec.edu.tecazuay.azucultural.vista;

import ec.edu.tecazuay.azucultural.controlador.CategoriaRepositorio;
import ec.edu.tecazuay.azucultural.modelo.Categoria;
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
@RequestMapping("/categoria")
public class CategoriaRest {
    @Autowired 
    CategoriaRepositorio categoriaRepositorio;
    
    @GetMapping("") 
    public List<Categoria> listar(){
        return categoriaRepositorio.findAll();  
    }
    
    @GetMapping("/{idCategoria}") 
    public Categoria recuperar(@PathVariable Long idCategoria) {
        return categoriaRepositorio.findById(idCategoria).get();
    }
    
    @PostMapping("") 
    public Categoria guardar(@RequestBody Categoria cate) {
        return categoriaRepositorio.save(cate);
    }
    
    @DeleteMapping("/{idCategoria}") 
    public void  borrar(@PathVariable Long idCategoria) {
        categoriaRepositorio.deleteById(idCategoria);
    }
    
    /*@PutMapping("") 
    public Categoria crear(@RequestBody Categoria cate) {
        return categoriaRepositorio.save(cate);
    }*/
}
