import { Component, OnInit } from "@angular/core";
import { MenuItem } from "primeng/api";
import { PanelModule } from 'primeng/panel';
import { Breadcrumb } from 'primeng/breadcrumb';

@Component({
  selector: 'torneo-general',
  imports: [PanelModule,Breadcrumb],
  templateUrl: './torneo-general.html',
  styleUrl: './torneo-general.css'
})
export class TorneoGeneral implements OnInit{
  items: MenuItem[] | undefined;

    home: MenuItem | undefined;

    ngOnInit() {
        this.items = [
            { label: 'Torneos' }
        ];

        this.home = { icon: 'pi pi-home', routerLink: '/' };
    }
}