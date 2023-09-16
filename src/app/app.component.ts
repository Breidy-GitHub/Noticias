import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router:Router) {}

  irUsuario(){
    this.router.navigate(['./usuario'])
  }
  irNotificaciones(){
    this.router.navigate(['./notificaciones'])
  }
  irAmistades(){
    this.router.navigate(['./amistades'])
  }
  irNuevo(){
    this.router.navigate(['./nuevo'])
  }
  irRecordatorios(){
    this.router.navigate(['./recordatorios'])
  }
  irHome(){
    this.router.navigate(['./home'])
  }
  
}
