import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { DialogoConfirmacionComponent } from "../dialogo-confirmacion/dialogo-confirmacion.component";
import { Base64Service } from '../base64.service';


@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.css']
})

export class SegundoComponent
{
david:string="";
 constructor(public dialogo: MatDialog, private servicis: Base64Service) 
 {
  this.primerservicio();
 }
  mostrarDialogo(): void 
  {
    this.david="";
    this.dialogo.open(DialogoConfirmacionComponent, 
      {
        data: `¿Te gusta programar en TypeScript?`
      })
      .afterClosed()
      .subscribe((confirmado: Boolean) => {
        if (confirmado) {
          alert("¡A mí también!");
        } else {
          alert("Deberías probarlo, a mí me gusta :)");
        }
      });
  }

  primerservicio()
  {
    console.log("mati");
    this.servicis.obtenerUsuarios()
          .subscribe((res: any) => {
              this.david=res,
              console.log("--> ",res)
          }, (error) => {
            console.log(error);
          })
  }
}