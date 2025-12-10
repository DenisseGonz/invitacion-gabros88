import { Component } from "@angular/core";
import { SplitterModule } from 'primeng/splitter';
import { AboutUs } from "./about-us/about-us";
import { Interes } from "./interes/interes";
import { ScrollPanelModule } from 'primeng/scrollpanel';

@Component({
    selector:'inicio',
    imports:[SplitterModule,AboutUs,Interes,ScrollPanelModule],
    templateUrl:'./inicio.html',
    standalone:true,
    styleUrl:'./inicio.css'
})
export class Inicio{
    
}