import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class WishlistService {
  public products: any = [];

  constructor() {}

  addProduct(product): void {
    if (!this.products.includes(product)) {
      this.products.push(product);
    }
  }

  deleteProduct(product): void {
    let index = this.products.indexOf(product);

    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
}
