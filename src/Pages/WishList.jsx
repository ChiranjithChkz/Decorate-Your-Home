import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { loadWishList } from '../utils/LocalStorage';
 
 

const WishList = () => {
    const [wishList, setWishList] = useState(() => loadWishList() )
    const [sortOrder, setSortOrder] = useState('none')
    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('wishList'))

        if (savedList) setWishList(savedList)
    }, [])
    // setWishList([])


    if(!wishList.length) return <p>NO data available</p>



    const sortedItem = (() => {
        if (sortOrder === 'price-asc') {
            return [...wishList].sort((a, b) => a.price - b.price)
        }
        else if (sortOrder === 'price-desc') {
            return [...wishList].sort((a, b) => b.price - a.price)
        } else {
            return wishList
        }
    })()


    const handleRemove = (id) => {
        //remove from local storage
        removeEventListener(id)
        //for ui instant update
        setWishList(prev => prev.filter(p=> p.id !== id))
    }

    // generate chart data
    const totalsByCategory = {}
        wishList.forEach(product => {
            const category = product.category
            totalsByCategory[category] = (totalsByCategory[category] || 0) + product.price
        })
    
        const chartData = Object.keys(totalsByCategory).map(category =>({ category: category,
            total: totalsByCategory[category],
        }))
        console.log(chartData)



    return (
        <div className='space-y-4'>
            <div className='flex justify-between py-5 item-center'>
                <h1 className='text-3xl font-semibold'>WishList Products <span className='text-sm text-gray-500'>({sortedItem.length})Products found</span></h1>

                <label className='form-control w-full max-w-xs'>

                    <select className='select select-bordered' name="" id="" value={sortOrder} onChange={e => setSortOrder(e.target.value)}>

                        <option value="none">Sort by price</option>
                        <option value="price-asc">Low-&gt; High</option>
                        <option value="price-desc">High-&gt; low</option>
                    </select>
                </label>
            </div>

            <div className='space-y-4'>
                {sortedItem.map(p => <div className="card h-48 card-side bg-base-100 shadow-sm">
                    <figure>
                        <img
                            src={p.image}
                            alt="Movie" />
                    </figure>
                    <div className="flex card-body justify-between">
                        <div>
                            <h2 className="card-title">{p.name}</h2>
                            <p>{p.description}</p>
                            <p>Price: ${p.price}</p>
                        </div>
                        <div className="card-actions ">
                            <button onClick={() => handleRemove(p.id)} className="btn btn-outline">Remove</button>
                        </div>
                    </div>
                </div>)}

            </div>

            {/* chart */}
            <div className='space-y-3'>
                <h3 className='text-xl font-semibold'>Wishlist summary</h3>
                <div className='bg-base-100 border rounded-xl p-4 h-80'>
                    <ResponsiveContainer width='100%' height='100%'>
                    <BarChart
                       
                        data={chartData}
                      
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Legend/>
                        <Bar dataKey="total" fill='brown' />

                    </BarChart>
                    </ResponsiveContainer>
                </div>

            </div>

        </div>
    );
};

export default WishList;


