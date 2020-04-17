import { element } from 'protractor';
import { environment } from './../../../environments/environment';

import { Component, OnInit } from '@angular/core';
import * as Mapboxgl from 'mapbox-gl';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Component({
    selector: 'app-bs-component',
    templateUrl: './bs-component.component.html',
    styleUrls: ['./bs-component.component.scss']
})
export class BsComponentComponent implements OnInit {
   mapa: Mapboxgl.Map;

    ngOnInit() {
       ( Mapboxgl as any).accessToken =environment.mapboxKey;
         
      this.mapa= new Mapboxgl.Map({
        container: 'mapa-mapbox', 
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-78.989855,-2.9046954], // starting position
        zoom: 16.6 // starting zoom
        });
        this.crearMarcador(-78.989855,-2.9046954);
    }
    crearMarcador(lng:number,lat:number){

        const marker = new Mapboxgl.Marker({
            draggable: true
            })
            .setLngLat([lng, lat])
            .addTo(this.mapa);
            marker.on('drag',()=>{
console.log(marker.getLngLat());
            })
            let element =document.createElement('div')
            element.className='marker'
            let marcador =new Mapboxgl.Marker(element).setLngLat({
                lng:-78.989855,
                lat:-2.9046954
            })
            .addTo(this.mapa)
    }
   
}
