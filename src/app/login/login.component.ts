import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{

  constructor(public _router: Router) 
  {
    
  }

  ngOnInit(): void 
  {

  }

  ingresar()
  {
    console.log("llega y pasa por quia");
    this._router.navigateByUrl('principal')
  }

}
