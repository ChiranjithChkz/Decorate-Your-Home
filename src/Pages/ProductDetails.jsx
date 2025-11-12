import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Components/hooks/useProducts';
import { updateList } from '../utils/LocalStorage';



const ProductDetails = () => {
    const { id } = useParams()
    const { products, loading, error } = useProducts()
    const product = products.find(p => String(p.id) === id)
    
    if (loading) return  <p>Loading.......</p>
   const { name, image, category, price, description } = product

//   const handleAddToWishList = () =>{
//     const existingList = JSON.parse(localStorage.getItem('wishList'))
//     console.log(existingList)

//     let updatedList = []
//     if(existingList) {
//         const isDuplicate = existingList.some(p=> p.id === product.id)

//         if(isDuplicate) return alert("sorry vhai")
//          updatedList = [...existingList, product]
//     }else{
//         updatedList.push(product)
//     }
//     localStorage.setItem('wishList', JSON.stringify(updatedList))
//   }



  
    return (
        <div className="card bg-base-100 border shadow-sm   ">
            <figure className='h-84 overflow-hidden'>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>

                <p>Price: {category}</p>
                <p>Price: ${price}</p>

                <div className="card-actions justify-end">
                    <button onClick={() => updateList(product)} to={`/product/${id}`}
                        className="btn btn-primary">Add to wishList</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;