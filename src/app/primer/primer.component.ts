import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-primer',
  templateUrl: './primer.component.html',
  styleUrls: ['./primer.component.css']
})
export class PrimerComponent implements OnInit 
{




  lastAction: string;

  /*data = [
    { label: 'one', checked: false },
    { label: 'two', checked: false },
    { label: 'three', checked: true },
    { label: 'four', checked: false },
    { label: 'five', checked: false }
    ];*/


  aparece:boolean=false;



  rangoinicio: any  [] = [];
  rangofin: any  [] = [];

  foods: any  [] = [
    /*{value: '2016-0', viewValue: '2016'},
    {value: '2017-1', viewValue: '2017'},
    {value: '2018-2', viewValue: '2018'},
    {value: '2019-3', viewValue: '2019'},
    {value: '2020-4', viewValue: '2020'},
    {value: 'TODOS-5', viewValue: 'TODOS'},*/
  ];

  listas: any [] = [];

  lista:any[]=[{año:2016,meses:[{mes:'ENERO',checked:false},{mes:'FEBRERO',checked:false},{mes:'MARZO',checked:false},{mes:'ABRIL',checked:false},{mes:'MAYO',checked:false},{mes:'JUNIO',checked:false},{mes:'JULIO',checked:false},{mes:'AGOSTO',checked:false},{mes:'SEPTIEMBRE',checked:false},{mes:'OCTUBRE',checked:false},{mes:'NOVIEMBRE',checked:false},{mes:'DICIEMBRE',checked:false}]},
               {año:2017,meses:[{mes:'ENERO',checked:false},{mes:'FEBRERO',checked:false},{mes:'MARZO',checked:false},{mes:'ABRIL',checked:false},{mes:'MAYO',checked:false},{mes:'JUNIO',checked:false},{mes:'JULIO',checked:false},{mes:'AGOSTO',checked:false},{mes:'SEPTIEMBRE',checked:false},{mes:'OCTUBRE',checked:false},{mes:'NOVIEMBRE',checked:false},{mes:'DICIEMBRE',checked:false}]},
               {año:2018,meses:[{mes:'ENERO',checked:false},{mes:'FEBRERO',checked:false},{mes:'MARZO',checked:false},{mes:'ABRIL',checked:false},{mes:'MAYO',checked:false},{mes:'JUNIO',checked:false},{mes:'JULIO',checked:false},{mes:'AGOSTO',checked:false},{mes:'SEPTIEMBRE',checked:false},{mes:'OCTUBRE',checked:false},{mes:'NOVIEMBRE',checked:false},{mes:'DICIEMBRE',checked:false}]},
               {año:2019,meses:[{mes:'ENERO',checked:false},{mes:'FEBRERO',checked:false},{mes:'MARZO',checked:false},{mes:'ABRIL',checked:false},{mes:'MAYO',checked:false},{mes:'JUNIO',checked:false},{mes:'JULIO',checked:false},{mes:'AGOSTO',checked:false},{mes:'SEPTIEMBRE',checked:false},{mes:'OCTUBRE',checked:false},{mes:'NOVIEMBRE',checked:false},{mes:'DICIEMBRE',checked:false}]},
               {año:2020,meses:[{mes:'ENERO',checked:false},{mes:'FEBRERO',checked:false},{mes:'MARZO',checked:false},{mes:'ABRIL',checked:false},{mes:'MAYO',checked:false},{mes:'JUNIO',checked:false},{mes:'JULIO',checked:false},{mes:'AGOSTO',checked:false},{mes:'SEPTIEMBRE',checked:false},{mes:'OCTUBRE',checked:false},{mes:'NOVIEMBRE',checked:false},{mes:'DICIEMBRE',checked:false}]},
              ];
  david:number=0;

  dav:string='';
  rangofinal:string='';

  constructor() 
  { 
    var f = new Date();
   // var dia_hoy=f.getDate();
    //var mes_hoy=f.getMonth()+1;
    var año_hoy=f.getFullYear();
    for(var g=2016;g<=año_hoy;g++)
    {
      var cont=0;
      var tt = { value:g+'-'+cont, viewValue:g+''};
      this.foods.push(tt);this.rangoinicio.push(tt);this.rangofin.push(tt);
      cont++;
      if(g==año_hoy)
      {
        var hh = {value:'TODOS-'+cont, viewValue:'TODOS'};
        this.foods.push(hh);
      }
    }
    

  }


  onChange(event, index, item) 
  {
    item.checked = !item.checked;
    this.lastAction = 'index: ' + index + ', label: ' + item.label + ', checked: ' + item.checked;
    console.log(index, event, item);
  }
  

  ngOnInit(): void 
  {
    this.david=this.lista.length;
    console.log(this.lista.length);
  }
  muestrafiltroanio()
  {
    this.listas=[];
    console.log("pas aqui ", this.dav);
    for(var i=0;i<this.lista.length;i++)
    {
      if(this.lista[i].año==this.dav)
      {
        this.listas.push(this.lista[i]);
        console.log("mami ",this.listas);
        //this.lista=[{año:2016,meses:[{mes:'ENERO',checked:true},{mes:'FEBRERO',checked:'false'},{mes:'MARZO',checked:true},{mes:'ABRIL',checked:true},{mes:'MAYO',checked:true},{mes:'JUNIO',checked:true},{mes:'JULIO',checked:true},{mes:'AGOSTO',checked:true},{mes:'SEPTIEMBRE',checked:true},{mes:'OCTUBRE',checked:true},{mes:'NOVIEMBRE',checked:true},{mes:'DICIEMBRE',checked:true}]}];
      }
      if(this.dav=='TODOS')
      {
        this.listas=this.lista;
      } 
    }
  }
  muestrafiltrorangoanio()
  {
    this.listas=[];
    console.log("pas aqui ", this.dav);
    console.log("pas aqui2 ", this.rangofinal);
    for(var i=0;i<this.lista.length;i++)
    {
      if((this.lista[i].año>=this.dav)&&(this.lista[i].año<=this.rangofinal))
      {
        this.listas.push(this.lista[i]);
        console.log("mami ",this.listas);
      }
      
    }
  }
  obtieneval(davi:string)
  {
    console.log("valor  ", davi);
    this.dav=davi;
    return davi;
  }
  obtieneval2(valor2:string)
  {
    console.log("valor2  ", valor2);
    this.rangofinal=valor2;
    return valor2;
  }
  aceptar()
  {
    this.aparece=true;
    //this.aparece=!this.aparece;
    console.log("este es la clave", this.aparece);
  }
  cancelar()
  {
    this.aparece=false;
  }
}
