//get  

export const loadWishList = () => {
   try{
      const data = loadWishList.getItem('wishList')
      return data? JSON.parse(data) : []
   } catch (err)
   {
     console.log(err)
     return []
   }
}

// save
export const updateList = (product) => {
    const wishList = loadWishList()

    try{
        const isDuplicate = wishList.some(p => p.id === product.id)
        if(isDuplicate) return alert('Already added in wishList')
            const updatedWishList = [...wishList, product] 
        localStorage.setItem('wishList', JSON.stringify(updatedWishList))
    }
    catch (err) {
        console.log(err)
    }
}

//delete
export const removeFromWishList = id => {
    const wishList = loadWishList()
    try{
        const updatedWishList = wishList.filter(p => p.id !== id)
        localStorage.setItem('wishList', JSON.stringify(updatedWishList))
    } catch (err) {
        console.log(err)
    }
}