import { TestBed, inject } from "@angular/core/testing";

import { WishlistService } from "./wishlist.service";

describe("WishlistService", () => {
  let testProduct;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    testProduct = {
      title: "Test Product",
      description: "Test Description",
      price: "39.99"
    };
  });

  it("should be created", () => {
    const service: WishlistService = TestBed.get(WishlistService);
    expect(service).toBeTruthy();
  });

  it("should be able to add a single product to product array", inject(
    [WishlistService],
    wishlistService => {
      let arrayLengthBefore = wishlistService.products.length;
      wishlistService.addProduct(testProduct);

      expect(wishlistService.products).toContain(testProduct);
      expect(wishlistService.products.length).toEqual(arrayLengthBefore + 1);
    }
  ));

  it("should not add a product to wishlist if it already exists in the wishlist", inject(
    [WishlistService],
    wishlistService => {
      let arrayLengthBefore = wishlistService.products.length;
      wishlistService.addProduct(testProduct);

      // Array length should have increased by one
      expect(wishlistService.products.length).toEqual(arrayLengthBefore + 1);

      wishlistService.addProduct(testProduct);

      // Array length should NOT have increased by one
      expect(wishlistService.products.length).toEqual(arrayLengthBefore + 1);
    }
  ));

  it("should remove a product from wishlist when delete function called", inject(
    [WishlistService],
    wishlistService => {
      wishlistService.addProduct(testProduct);

      expect(wishlistService.products).toContain(testProduct);

      wishlistService.deleteProduct(testProduct);

      expect(wishlistService.products).not.toContain(testProduct);
    }
  ));
});
