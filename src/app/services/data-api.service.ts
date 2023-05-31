import { Injectable } from '@angular/core';
import { productoInterface } from '../model/producto';
import { Firestore,collection,addDoc, collectionData, collectionChanges, getDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { deleteDoc, doc, updateDoc} from 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private firestore:Firestore) {
  }
  getTodosLosProductos():Observable<productoInterface[]>{
    const producRef=collection(this.firestore,'productos');
    return collectionData(producRef,{idField:'id'}) as Observable<productoInterface[]>
  }
  agregarProducto(producto:productoInterface){
    const producRef=collection(this.firestore,'productos');
    return addDoc(producRef,producto);
  }
  getProducto(id:string){
    const productRef=doc(this.firestore,`productos/${id}`)
    return productRef
  }
  actualizarProducto(producto:productoInterface){
    const productRef=doc(this.firestore,`productos/${producto.id}`)
    const prod=producto as any
    console.log(prod)
    return updateDoc(productRef,prod);
  }
  borrarProducto(producto:productoInterface){
    const producRef=doc(this.firestore,`productos/${producto.id}`)
    return deleteDoc(producRef)
  }
}
