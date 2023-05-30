import { Component, OnInit } from '@angular/core';
import { productoInterface } from 'src/app/model/producto';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  productos:any[]=[]
  producto:productoInterface={
    nombre:"pulsera",
    imagen:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.cabecitadenoviaaccesorios.com%2Fproductos%2Fpulseras-personalizadas-hilo-rojo-letritas%2F&psig=AOvVaw1cdSUAS9n36xr1jyz4bCXG&ust=1685480996312000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIjprpG4m_8CFQAAAAAdAAAAABAE",
    descripcion:"pulsera para compartir",
    precio:500,
    cantidad:5,
    disponibilidad:true,
    oferta:false,
  }
  constructor(private dataApi:DataApiService){

  }
  ngOnInit(): void {
    this.dataApi.getTodosLosProductos().subscribe(resp=>{
      for(let i=0;i<resp.length;i++){
        if(resp[i].oferta==true){
          this.productos.push(resp[i])
        }
      }
    })
  }
  // async onSubmit(){
  //   console.log(this.producto)
  //   const response= await this.dataApi.agregarProducto(this.producto);
  //   console.log(response)
  // }
}
