import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const itemCount = useSelector((state:any) => state.cart.itemCount)

  console.log(itemCount)
  return (
    <div className='p-4 bg-slate-500 text-center font-bold flex flex-row justify-between items-center sticky top-0 left-0 right-0'>
      <Link to="/">
        Shop Example App
      </Link>
      <Link className="bg-white px-4 py-2 rounded-lg" to="/cart">{itemCount} Products in cart</Link>
    </div>
  )
}

export default Navbar