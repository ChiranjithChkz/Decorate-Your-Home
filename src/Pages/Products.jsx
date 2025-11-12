import React, { useState } from 'react';
import useProducts from '../Components/hooks/useProducts';
import ProductCard from '../Components/ProductCard';
import SkeletonSpinner from '../Components/SkeletonSpinner';

const Products = () => {

    const { products, loading } = useProducts()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchProducts = term ? products.filter(product =>
        product.name.toLocaleLowerCase().includes(term)
    )
        : products

    console.log(searchProducts)

    return <div>
        <div className='flex justify-between py-5 item-center'>
            <h1 className='text-3xl font-semibold'>All Products <span className='text-sm text-gray-500'>({searchProducts.length})Products found</span></h1>
            <label className="input">

                <input value={search} onChange={e => setSearch(e.target.value)}
                    type="Search" placeholder="Search" />
            </label>
        </div>
        {
            loading ? <SkeletonSpinner /> :

                <div className=' m-auto  grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        searchProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    }
                </div>
        }
    </div>

};

export default Products;