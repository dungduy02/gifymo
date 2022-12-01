import './style.scss'
import { Box } from '@mui/material'
import CategoryProduct from './CategoryProduct';
import FilterByPrice from './FilterByPrice';
import RecentReview from './RecentReview';
import {TypeOfProduct} from '../../../api'

function SideBarShop(props){
   const {
      // typeOfProduct, 
      reviewProduct,
      minPrice,
      maxPrice,
      setTypeProduct,
      filterMinPrice,
      filterMaxPrice,
      setFilterMinPrice,
      setFilterMaxPrice
   } = props;

   const data = TypeOfProduct;

   return (
      <div className='container siderBar_Shop'>
         <Box className='category_shop'>
            <CategoryProduct data={data} setTypeProduct={setTypeProduct} />
         </Box>
         <Box className='FilterByPrice'>
            <FilterByPrice 
               minPrice={minPrice}
               maxPrice={maxPrice}
               filterMinPrice={filterMinPrice}
               filterMaxPrice={filterMaxPrice}
               setFilterMinPrice={setFilterMinPrice}
               setFilterMaxPrice={setFilterMaxPrice}
            />
         </Box>
         <Box className='RecentReview'>
            <RecentReview reviewProduct={reviewProduct} />
         </Box>
      </div>
   )
}

export default SideBarShop

