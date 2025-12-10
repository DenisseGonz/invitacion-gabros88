import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { Button, ButtonDirective, ButtonLabel, ButtonIcon } from "primeng/button";

@Component({
  selector: 'nav-root',
  imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule, Button, ButtonDirective, ButtonLabel, ButtonIcon],
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
            },
            {
                label: 'Torneos',
                icon: 'pi pi-flag-fill',
                items: [
                    {
                        label: 'Veteranos',
                        icon: 'pi pi-exclamation-triangle',
                    },
                    {
                        label: 'Libre',
                        icon: 'pi pi-face-smile',
                    },
                ],
            },
        ];
    }

    isDark = false;
    toggleDarkMode() {
        const element = document.querySelector('html');
        if(element!=null){
            this.isDark = !this.isDark;
            element.classList.toggle('my-app-dark');
        }
    }
}
