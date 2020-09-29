
import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogosComponent } from './dialogos/dialogos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'holaMundo';

  articulo;


  constructor(private dialog: MatDialog,private route:Router){
    this.loadData();
    this.getCondicion(this.articulo.value);
  }

  getCondicion(value){

   return value!=undefined &&value>=5 ? this.openDialog(): null;
  }

  loadData(){
     this.articulo =  {id:1,name:"Bicicleta", value: 5};
  }

  openDialog(){
    const modal = this.dialog.open(DialogosComponent);
    modal.afterClosed().subscribe(result=>{
      return this.google();
    })
  }

  google(){
    //this.route.navigate(['tu ruta'];
    window.location.href = 'http://www.google.com';
  }
}