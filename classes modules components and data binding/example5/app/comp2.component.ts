import { Component } from '@angular/core';
import { NewProd} from './newprod';
@Component({
  
  selector: 'comp2',
  template: `    
  <h3>Multiple components New Product</h3>
  <ul >
  <li> id: {{pr.id}} </li>
  <li> first name: {{pr.name}} </li>
  <li> first name: {{pr.price}} </li>
  </ul>
  `
})

export class Comp2 {

pr: NewProd = {
    id: 4615,
    name: 'FRT-105',
    price: 256
}
}