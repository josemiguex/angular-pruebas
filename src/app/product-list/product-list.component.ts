import { Component } from '@angular/core';

import { products } from '../products';
import { FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  product: FormGroup;
  
  ngOnInit() {

    this.product = new FormGroup({
      name: new FormControl('Aquí la queja', [Validators.required, Validators.minLength(5)]),
      priority: new FormControl('90')
    });
  }
  
  onSubmit() {
    if (this.product.get('name').hasError('minlength')) {
      alert("Niño no sabe asé kejas o ke")
      return ;
    }
    if (this.product.get('name').value == 'Soporte está tardando mucho en analizar el ordenador') {
      alert('vamo a tarda 3 años')
    }
    
    if (!Number.isInteger(parseInt(this.product.get('priority').value))) {
      alert("Killo ezo no e un numero");
      return ;
    }
    if (!this.product.get('name').hasError('required')) {
      this.products.push({name: this.product.get('name').value,priority: this.product.get('priority').value})
    }
  }
  share() { 
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/