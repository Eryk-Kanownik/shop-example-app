import React from 'react'
import { Product } from '../features/productsSlice'

interface IProductInCartCard{
    product: Product,
    count:number
}

const ProductInCartCard:React.FC<IProductInCartCard> = ({product, count}) => {
  return (
    <div className='border-2 bg-white border-slate-200 rounded-md p-4 flex justify-between'>
        <div className=' flex flex-col'>
            <h3 className='font-semibold text-lg mb-2'>{product.name}</h3>
            <p className='text-gray-500 mb-1'>{product.description}</p>
            <h4 className='font-semibold mb-4'>{product.price}</h4>
        </div>
        <div className='flex justify-center items-center gap-2'>
            <div className='flex border-2 rounded-md'>
                <button  className='px-2 py-2 hover:bg-slate-200 duration-200'>
                    -
                </button>
                <p className=' text-center self-center p-2'>{count}</p>
                <button className='px-2 py-2 hover:bg-slate-200 duration-200'>
                    +
                </button>
            </div>
            <button className='py-2  px-4 border-2 border-red-500 hover:bg-red-500 rounded-md font-bold'>Delete</button>
        </div>
    </div>
  )
}

export default ProductInCartCard