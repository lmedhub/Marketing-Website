export type Products = {
    id: number
    title: string
    price: string
    description: string
    image: string
  }
  
  export type MainPageProductProps = {
    data: Products[]
  }