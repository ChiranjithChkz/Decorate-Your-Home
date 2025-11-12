import React, { } from 'react';
import { Link  } from 'react-router';
import ProductCard from '../Components/ProductCard';
import useProducts from '../Components/hooks/useProducts';
import SkeletonSpinner from '../Components/SkeletonSpinner';

const Home = () => {
    
const {products, loading} = useProducts()
    
    const featuredProducts = products.slice(0, 6)
    console.log(products);
    return (
        <div>
             

            <div className='flex justify-between py-5 item-cneter'>
                <h1 className='text-xl font-sans'>Featured Products</h1>
                 <Link className='btn btn-outline' to='/products'>See All design</Link>
            </div>
               {
                loading? <SkeletonSpinner/> :


                 <div className=' m-auto  grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                   loading ? ( <SkeletonSpinner/>
                    ) : (

                   featuredProducts.map(product => (
                         <ProductCard key={product.id} product={product}/>
                    ) ))
                }
            </div>
               }
        </div>
    );
};

export default Home;