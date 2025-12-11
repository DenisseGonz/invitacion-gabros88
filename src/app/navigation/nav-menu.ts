import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button, ButtonDirective,} from "primeng/button";

@Component({
  selector: 'nav-root',
  imports: [RouterLink, Menubar, BadgeModule, AvatarModule, InputTextModule, CommonModule, Button, ButtonDirective],
  templateUrl: './nav-menu.html',
  standalone: true,
  styleUrls: ['./nav-menu.css']
})
export class NavMenu {
  items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                label: 'Inicio',
                icon: 'pi pi-star-fill',
                routerLink:'/'
            },
            {
                label: 'Torneos',
                icon: 'pi pi-flag-fill',
                routerLink:'/torneo-general'
            },
            {
                label: 'Ranking',
                icon: 'pi pi-angle-double-up',
            },
            {
                label: 'Trivia',
                icon: 'pi pi-bolt',
            },
        ];
    }

    isDark = false;
    toggleDarkMode() {
        const element = document.querySelector('html');
        if(element!=null){
            this.isDark = !this.isDark;
            //element.classList.toggle('my-app-dark');
            element.classList.remove('light-mode', 'dark-mode');
            element.classList.add(this.isDark ? 'dark-mode' : 'light-mode');
        }
    }
}
