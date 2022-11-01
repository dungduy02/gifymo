import './style.scss'
import {useState} from 'react'
import { Box } from '@mui/material'
import SortProduct from './SortProduct'
import LayoutContent from './LayoutContent'
function ShowListProduct(props){
   const {
      // listItemsProduct,
      sortItems,
      setSortItems,
      data, 
      minPrice,
      maxPrice,
      typeProduct,
      setTypeProduct,
      filterMinPrice,
      filterMaxPrice,
      setFilterMinPrice,
      setFilteMaxPrice
   } = props

   const [layoutShow, setLayoutShow] = useState(1);
   return (
      <Box className='container showList'>
         <Box className='sortProduct'>
            <SortProduct 
               sortItems = {sortItems}
               setSortItems={setSortItems}
               length = {data.length}
               typeProduct={typeProduct}
               setTypeProduct={setTypeProduct}
               minPrice={minPrice}
               maxPrice={maxPrice}
               filterMaxPrice={filterMaxPrice}
               filterMinPrice={filterMinPrice}
               setFilteMaxPrice={setFilteMaxPrice}
               setFilterMinPrice={setFilterMinPrice}
               layoutShow={layoutShow}
               setLayoutShow={setLayoutShow}
            />
         </Box>
         <Box className='layoutContent'>
            <LayoutContent data={data} />
         </Box>
      </Box>
   )
}

export default ShowListProduct