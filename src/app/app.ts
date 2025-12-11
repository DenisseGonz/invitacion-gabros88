import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import {NavMenu} from './navigation/nav-menu';
import { NgxBackgroundBeamsComponent } from "@omnedia/ngx-background-beams";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, NavMenu,NgxBackgroundBeamsComponent/*Inicio,*/],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Bienvenidoooos');
}
