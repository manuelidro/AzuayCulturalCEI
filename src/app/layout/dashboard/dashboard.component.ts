import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';



@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
    
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        
        this.sliders.push(
        
            {
        
                imagePath: 'assets/images/corpus.png',
                
                label : 'Corpus Christi',
                text:
                    'Rituales de fe, tradiciones y dulces en Cuenca por el Corpus Christi'
            },
            {
                imagePath: 'assets/images/rotofest.png',
                label: 'Roto Fest',
                text: 'El Festival de Cultura Electrónica y música independiente más grande del Ecuador..'
            },
            {
                imagePath: 'assets/images/independencia.png',
                label: 'Independencia de Cuenca',
                text:
                    'Una de las fiestas más importantes de Cuenca'
            }
   
        );
/*
        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            
            }
        );
        Alertas dashboard
           <hr />
    <ngb-alert [type]="alert.type" (close)="closeAlert(alert)" *ngFor="let alert of alerts">{{ alert.message }}</ngb-alert>
    <hr />
        */
    }

    ngOnInit() {}

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
