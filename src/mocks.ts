export class ProductsMock {
  public products: any = [{ title: "Cool shoes", description: "Isnt it obvious?", price: "39.99" }];
  public load: Function = () => {};
}

export class NavMock {
  public navigateBack: Function = (url: string | any[], options: any) => {};
  public navigateForward: Function = (url: string | any[], options: any) => {};
  public navigateRoot: Function = (url: string | any[], options: any) => {};
}

export class WishlistMock {
  public products = [
    { title: "Test 1", description: "Test 1", price: "39.99" },
    { title: "Test 2", description: "Test 2", price: "29.99" },
    { title: "Test 3", description: "Test 3", price: "19.99" }
  ];

  public addProduct: Function = (product: Object) => {};

  public deleteProduct: Function = (product: Object) => {};
}
