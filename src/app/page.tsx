import Image from "next/image"

interface productsProps {
  "id": number,
  "title": string,
  "price": number,
  "quantity": number,
  "total": number,
  "discountPercentage": number,
  "discountedTotal": number,
  "thumbnail": string
}

interface cardsProps {
  carts: [
    {
      id: number,
      products: productsProps[],
      total: number,
      discountedTotal: number,
      userId: number,
      totalProducts: number,
      totalQuantity: number
    },
  ]
}

export default async function Home() {
  const response = await fetch('https://dummyjson.com/carts')
  const data: cardsProps = await response.json()

  return (
    <div>
      <h1>Home Page</h1>
      <div className="flex flex-col gap-2">
        {data.carts.map((cart) => (
          <div className="bg-red-500 flex" key={cart.id}>
            <h2>Cart ID: {cart.id}</h2>
            {/* Render products */}
            {cart.products.map((product) => (
              <div className="bg-red-700" key={product.id}>
                <h3>{product.title}</h3>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Total: {product.total}</p>
                <p>Discount Percentage: {product.discountPercentage}</p>
                <p>Discounted Total: {product.discountedTotal}</p>
                <Image alt="thumbnail" src={product.thumbnail} width={30} height={30}/>
              </div>
            ))}
            <div>
              <p>Total: {cart.total}</p>
              <p>Discounted Total: {cart.discountedTotal}</p>
              <p>User ID: {cart.userId}</p>
              <p>Total Products: {cart.totalProducts}</p>
              <p>Total Quantity: {cart.totalQuantity}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}