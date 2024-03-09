import { useEffect, useState } from 'react';
import axios from 'axios';
import { Product } from '../features/cartSlice';
import ProductCard from '../Components/ProductCard';
import { useAppDispatch } from '../app/hooks';
import { useSelector } from 'react-redux';
import { fetchProducts } from '../features/productsSlice';

const Main = () => {
  const dispatch = useAppDispatch()
  const products = useSelector((state:any) => state.products.productList)
  
  useEffect(() => {
    dispatch(fetchProducts())
  },[])

  
  const list = products?.map(({id,name,description,price}:Product) => (
    <ProductCard key={id} id={id} name={name} description={description} price={price}/>
  ))

  return (
    <div className='p-24 bg-slate-100'>
      <h1 className='font-bold text-4xl mb-8 rounded-lg'>Products</h1>
      <div className='grid grid-cols-3 gap-3'>
        {
          list
        }
      </div>
    </div>
  )
}

export default Main