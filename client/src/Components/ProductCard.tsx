import React from 'react'
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../features/cartSlice';

interface IProductCard{
    id:number;
    name:string;
    description: string;
    price: number;
}


const ProductCard:React.FC<IProductCard> = ({id, name, description, price}) => {
    const dispatch = useDispatch();
    const addToCart = () => {
        let product = {
            id,name,description,price
        };
        dispatch(addProductToCart(product));
    }

  return (
    <div className='border-2 bg-white border-slate-200 p-4 rounded-md'>
        <h3 className='font-semibold text-lg mb-2'>{name}</h3>
        <p className='text-gray-500 mb-1'>{description}</p>
        <h4 className='font-semibold mb-4'>{price}</h4>
        <button className=' border-2 border-slate-500 px-4 py-2 rounded-md font-bold hover:bg-slate-500 hover:text-white duration-200' onClick={() => addToCart()}>Add to cart</button>
    </div>
  )
}

export default ProductCard