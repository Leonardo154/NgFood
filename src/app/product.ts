export interface IProduct {
  id: number,
  category: string,
  title: string,
  price: number,
  img: string
}

export interface IItemOrder {
  product: IProduct,
  quantity: number
}