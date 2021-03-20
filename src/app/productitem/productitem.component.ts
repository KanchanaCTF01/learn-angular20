import { Component,Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  OnSelected: EventEmitter<ProductItemComponent> = new EventEmitter();

  isSelected: boolean;
  
  constructor() { }
  select() {
    this.OnSelected.emit(this);
  }
  
  ngOnInit(): void {}
  
}
