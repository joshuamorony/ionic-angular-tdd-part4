import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  public products: any[];

  constructor(private http: HttpClient) {}

  load() {
    this.http.get("assets/data/products.json").subscribe((data: any) => {
      this.products = data.products;
    });
  }
}
