import { Component } from "@angular/core";
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { Button } from "primeng/button";

@Component({
    selector:'about-us',
    imports: [ImageModule, CardModule, Button],
    templateUrl:'./about-us.html',
    standalone:true,
    styleUrl:'./about-us.css'
})
export class AboutUs{

}