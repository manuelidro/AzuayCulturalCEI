import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
    selector: 'app-bs-component',
    templateUrl: './bs-component.component.html',
    styleUrls: ['./bs-component.component.scss']
})
export class BsComponentComponent implements OnInit {
   
    options: any;

    overlays: any[];

    ngOnInit() {
       this.options = {
            center: {lat: -2.901312, lng: -79.002685},
            zoom: 14
        };
        this.overlays = [
            new google.maps.Marker({position: {lat: -2.926681, lng: -79.039257},
                label: { text: "La Abduccion" }, title:"Una fiesta de otro mundo"}),
            new google.maps.Marker({position: {lat: -2.894065, lng: -79.019754}, 
                label: { text: "Compadres Tour" }, title: "Cepeda y Fonseca 2020"}),
            new google.maps.Marker({position: {lat: -2.897332, lng: -79.004499},
                label: { text: "Corpus Cristi" }, title: "Fiesta tradicional del Corpus Cristi"}),
            new google.maps.Marker({position: {lat: -2.900644, lng: -79.010207},
                label: { text: "Congreso de Seguridad" }, title: "Primer congreso de seguridad alimentaria y nutricional"}),
            new google.maps.Marker({position: {lat: -2.886811, lng: -79.007830},
                label: { text: "Cuenca Music Fest" }, title: "Podras disfrutar, reciclar y ayudar de manera ecologica"}),
            new google.maps.Marker({position: {lat: -2.898649, lng: -79.003948},
                label: { text: "Pika Fest" }, title: "Evento para publico otaku, k-poper, gamer, etc."}),
            new google.maps.Marker({position: {lat: -2.897960, lng: -79.011181},
                label: { text: "Roto Fest 2020" }, title: "Festival de musica electronica e independiente mas grande del Ecuador"}),
        ];
    }
   
}
