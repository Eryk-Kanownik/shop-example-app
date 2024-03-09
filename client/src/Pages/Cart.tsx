import ProductInCartCard from '../Components/ProductInCartCard'
import { useAppSelector } from '../app/hooks'

const Cart = () => {
  const {cartItems, itemCount, value} = useAppSelector(state => state.cart)

  let items = cartItems.length > 0 ? cartItems.map(({product, count}) => (
    <ProductInCartCard product={product} count={count}/>
  )) : <h1>No products in cart!</h1>

  return (
    <div className='p-24 flex flex-col bg-slate-100'>      
        <h1 className='font-bold text-4xl mb-4 rounded-lg'>Cart</h1>
        {
          cartItems.length > 0 ? <h2 className='mb-4 text-2xl font-bold'>{itemCount} products for value of {value}$</h2> : ""
        }
        <div className='flex flex-col gap-2'>
          {items}
        </div>
        <button disabled={itemCount === 0 ? true : false} className='bg-white mt-4 border-2 border-slate-500 px-4 py-2 rounded-lg font-bold hover:bg-slate-500 hover:text-white duration-200 self-end' >Buy for $$$</button>
    </div>
  )
}

export default Cart