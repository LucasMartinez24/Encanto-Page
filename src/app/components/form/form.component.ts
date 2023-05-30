import { Component } from '@angular/core';
import { productoInterface } from 'src/app/model/producto';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  producto:productoInterface={}
  path:string=""
  upload($event:any){
    this.path=$event.target.files[0]
    console.log(this.path)
  }
}
