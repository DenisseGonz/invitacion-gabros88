import { Component } from "@angular/core";
import { FieldsetModule } from 'primeng/fieldset';
import { AccordionModule } from 'primeng/accordion';
import { BadgeModule } from 'primeng/badge';
import { TabsModule } from 'primeng/tabs';
import { TimelineModule } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { NgxShineBorderComponent } from '@omnedia/ngx-shine-border';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { NgxTypewriterComponent } from '@omnedia/ngx-typewriter';
import { DividerModule } from 'primeng/divider';

interface EventItem {
    status?: string;
    date?: string;
    icon?: string;
    severity?: string;
    text?: string;
}

@Component({
    selector:'interes',
    imports:[FieldsetModule,DividerModule,AccordionModule,BadgeModule,ScrollPanelModule,TabsModule,TimelineModule, NgxTypewriterComponent, CardModule, ButtonModule,NgxShineBorderComponent],
    templateUrl:'./interes.html',
    standalone:true,
    styleUrl:'./interes.css'
})
export class Interes{
    events: EventItem[];

    constructor() {
        this.events = [
            { status: 'Recepción', date: '15:30', icon: 'pi pi-calendar-clock', severity: 'help', text:'¡Llegada de los invitados! Se aceptan regalos.' },
            { status: 'Apertura del puesto de trivia / Reto de Google', date: '16:00', icon: 'pi pi-sparkles', severity: 'info', text:'¡Se apertura la captura de premios! ¿Quién contestará las preguntas más dificiles o quién llegará más lejos?' },
            { status: 'Inicio de los torneos', date: '17:00', icon: 'pi pi-play-circle', severity: 'danger', text:'En caso de que los participantes esten antes, se puede adelantar la actividad' },
            { status: 'Receso - Comida', date: '18:30', icon: 'pi pi-receipt', severity: 'warn',text:'¡Disfruta de los noodles o el arroz!' },
            { status: 'Presentación equipos de música', date: '19:30', icon: 'pi pi-video', severity: 'secondary',text:'Ya armados los equipos, nos preparamos para la creatividad ¿Qué equipo hará la mejor canción?' },
            { status: 'Premiación - Torneos / Apertura pool del cumpleañero', date: '20:00', icon: 'pi pi-trophy', severity: 'info',text:'Es un estimado, puede que el torneo veterano tarde más, pero a esta hora se podrá retar al cumpleañero en las partidas de Smash. ¿Quedará invicto?' },
            { status: 'Fin de la fiesta', date: '03:00', icon: 'pi pi-stop-circle', severity: 'danger',text:'Es momento de retirarnos todos. Zzz' }
        ];
    }
}