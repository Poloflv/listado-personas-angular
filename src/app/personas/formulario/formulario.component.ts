import { Component, OnInit } from '@angular/core';
import { Persona } from '../../persona.model';
import { LoggingService } from '../../LoggingService.service';
import { PersonasService } from '../../personas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  // providers: [LoggingService]
})
export class FormularioComponent implements OnInit {
  // @Output() personaCreada = new EventEmitter<Persona>();

  nombreInput:string = '';
  apellidoInput:string = '';
  index:number;
  modoEdicion:number;
  // @ViewChild('nombreInput') nombreInput:ElementRef;
  // @ViewChild('apellidoInput') apellidoInput:ElementRef;

  constructor(private loggingService:LoggingService,
              private personasService: PersonasService,
              private router:Router,
              private route: ActivatedRoute
              ) {
                this.personasService.saludar.subscribe(
                  (indice: number) => alert("El inidice es: " + indice)
                );
              }
    
    ngOnInit(){
      this.index = this.route.snapshot.params['id'];
      this.modoEdicion = +this.route.snapshot.queryParams['modoEdicion'];

      if(this.modoEdicion != null && this.modoEdicion ===1){
        let persona: Persona = this.personasService.encontrarPersona(this.index);
        this.nombreInput = persona.nombre;
        this.apellidoInput = persona.apellido;
      }
    }

    onGuardarPersona(){
    // let persona1 = new Persona( this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    let persona1 = new Persona( this.nombreInput, this.apellidoInput);
    if(this.modoEdicion != null && this.modoEdicion === 1){
      this.personasService.modificarPersona(this.index, persona1 );
    }else {
      this.personasService.agregarPersona(persona1);
    }
    // this.loggingService.enviaMensajeAConsola("Enviamos persona con nombre: " + persona1.nombre + " apellido: " + persona1.apellido);
    //this.personas.push(persona1);
    // this.personaCreada.emit(persona1);
    this.router.navigate(['personas']);
  }

  eliminarPersona(){
    if(this.index != null){
      this.personasService.eliminarPersona(this.index)

    }
    this.router.navigate(['personas']);
  }
}
