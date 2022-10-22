import './style.scss'
import { Box } from '@mui/material'
import CategoryProduct from './CategoryProduct';
import FilterByPrice from './FilterByPrice';
import RecentReview from './RecentReview';

function SideBarShop(props){
   const {typeOfProduct, reviewProduct} = props;
   console.log(reviewProduct)
   return (
      <div className='container siderBar_Shop'>
         <Box className='category_shop'>
            <CategoryProduct typeOfProduct={typeOfProduct} />
         </Box>
         <Box className='FilterByPrice'>
            <FilterByPrice />
         </Box>
         <Box className='RecentReview'>
            <RecentReview reviewProduct={reviewProduct} />
         </Box>
      </div>
   )
}

export default SideBarShop

