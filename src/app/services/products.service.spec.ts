import { TestBed, inject, async } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

import { ProductsService } from "./products.service";

describe("Provider: Products", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],

      providers: [ProductsService],

      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  it("should have a non empty array called products", inject(
    [ProductsService, HttpTestingController],
    (productsService, httpMock) => {
      const mockResponse = {
        products: [
          { title: "Cool shoes", description: "Isn't it obvious?", price: "39.99" },
          {
            title: "Broken shoes",
            description: "You should probably get the other ones",
            price: "89.99"
          },
          { title: "Socks", description: "The essential footwear companion", price: "2.99" }
        ]
      };

      productsService.load();

      // Expect a request to the URL
      const mockReq = httpMock.expectOne("assets/data/products.json");

      // Execute the request using the mockResponse data
      mockReq.flush(mockResponse);

      expect(productsService.products.length).toBeGreaterThan(0);
    }
  ));
});
