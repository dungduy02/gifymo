import { TypeOfProduct, ReviewProduct, listItems } from '../../api'
import { Box } from '@mui/material'
import './style.scss'
import SideBarShop from './SideBar';
import ShowListProduct from './Content/ShowListProduct';
import { FilterProductByType } from '../../util/FilterProductByType'
import { MinMaxPrice } from '../../util/HandlePrice'
import { useState } from 'react'
import { handleChooseFunction } from '../../util/Sort'

const ListTypeOfProduct = TypeOfProduct;
const ListRecentProduct = ReviewProduct;
const ListItemsProduct = listItems;

function Shop(props) {
   const [minPrice, maxPrice] = MinMaxPrice(ListItemsProduct)
   const [filterMinPrice, setFilterMinPrice] = useState(minPrice)
   const [filterMaxPrice, setFilterMaxPrice] = useState(maxPrice)
   const [typeProduct, setTypeProduct] = useState('')
   const [sortItems, setSortItems] = useState('')

   const ListFeatureByType = FilterProductByType(
      ListItemsProduct,
      typeProduct,
      filterMinPrice,
      filterMaxPrice
   ) 
      console.log(ListFeatureByType)
   const dataSort = handleChooseFunction(sortItems, ListFeatureByType);


   return (
      <Box className='shop_contain'>
         <Box className='sideBarShop'>
            <SideBarShop 
               setTypeProduct = {setTypeProduct}
               typeOfProduct={ListTypeOfProduct}
               reviewProduct= {ListRecentProduct}
               minPrice={minPrice}
               maxPrice={maxPrice}
               filterMinPrice={filterMinPrice}
               setFilterMinPrice={setFilterMinPrice}
               filterMaxPrice={filterMaxPrice}
               setFilterMaxPrice={setFilterMaxPrice}
             />
         </Box>
         <Box className='showListProduct'>
            <ShowListProduct 
               listItemsProduct={ListItemsProduct}
               data = {dataSort}
               sortItems={sortItems}
               setSortItems={setSortItems}
               typeProduct={typeProduct}
               setTypeProduct={setTypeProduct}
               minPrice={minPrice}
               maxPrice={maxPrice}
               filterMinPrice={filterMinPrice}
               filterMaxPrice={filterMaxPrice}
               setFilterMaxPrice={setFilterMaxPrice}
               setFilterMinPrice={setFilterMinPrice}
            />
         </Box>
      </Box>
   )
}

export default Shop