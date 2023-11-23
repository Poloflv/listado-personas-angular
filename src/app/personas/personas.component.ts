import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { LoggingService } from '../LoggingService.service';
import { PersonasService } from '../personas.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { EmptyError } from 'rxjs';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];

  constructor(
              // private loggingService: LoggingService,
              private personasService: PersonasService,
              private router: Router
              ){}


  ngOnInit():void{
    // this.personasService.obtenerPersonas()
    // .subscribe(
    //     (personas: Persona[]) => {
    //       this.personas = personas;
    //       this.personasService.setPersonas(personas);
    //     }
    // );
    this.personas = this.personasService.personas;
  }

  agregar(){
  this.router.navigate(['personas/agregar'])
  }

}

// (personas: Persona[]) => {
//   this.personas = personas;
//   this.personasService.setPersonas(personas);
// }