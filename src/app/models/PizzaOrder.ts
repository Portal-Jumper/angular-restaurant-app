export class PizzaOrder {
  arrid!: number;
  id!: number;
  name!: string;
  size!: string;
  price!: number;


  constructor(arrid: number,id: number, name: string, size: string, price: number) {
    this.arrid = arrid;
    this.id = id;
    this.name = name;
    this.size = size;
    this.price = price;
  }
}
