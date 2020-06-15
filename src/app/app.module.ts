import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';


import { Routes, RouterModule } from '@angular/router';


export const childrenRoutesPrincipal:Routes=[
  { path:'', redirectTo:'principal',pathMatch:'full' },
  { path:'principal', component:PrincipalComponent },
  { path:'primer', component:PrimerComponent },
  { path:'segundo', component:SegundoComponent },
];



/***************************PARA LAS RUTAS GLOBALES*************************/
const appRoutes: Routes = [
  { path: '', component: LoginComponent, data: { title: 'First Component' } },
  //{ path: 'principal', component: PlantillaComponent },
  //{ path: 'primer', component: PrimerComponent },
  //{ path: 'segundo', component: SegundoComponent },
  {
    path:'principal',
    component:PlantillaComponent,
    //canActivate:[ UsuarioLogueadoGuard ],
    children:childrenRoutesPrincipal
  }

];
/***************************FIN PARA LAS RUTAS GLOBALES*************************/


import { Base64Service } from './base64.service';

//para los servicos//
import {HttpClientModule} from '@angular/common/http' 
//fin servicios//


import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatSelectModule} from '@angular/material/select';
import { MatTabsModule} from '@angular/material/tabs';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule} from '@angular/material/dialog';

import {MatCardModule} from '@angular/material/card';

import { PrimerComponent } from './primer/primer.component';
import { SegundoComponent } from './segundo/segundo.component';
import { PrincipalComponent } from './principal/principal.component';
import { DialogoConfirmacionComponent } from './dialogo-confirmacion/dialogo-confirmacion.component';


@NgModule({
  declarations: [
    AppComponent,
    PlantillaComponent,
    LoginComponent,
    PrimerComponent,
    SegundoComponent,
    PrincipalComponent,
    DialogoConfirmacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,

    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule,

    MatSelectModule,
    MatTabsModule,
    MatDialogModule,

  
    

    MatCardModule,

    RouterModule.forRoot(
      appRoutes,
      { useHash: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule,MatCardModule,FlexLayoutModule,MatInputModule,MatButtonModule,MatFormFieldModule,MatDialogModule,DialogoConfirmacionComponent],
  providers: [Base64Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
